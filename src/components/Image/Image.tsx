import cn from "classnames";
import { useState, useCallback, useEffect } from "react";

import styles from "./Image.module.scss";
import { SkeletonElement } from "../SkeletonElement";

export interface ImageProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "onLoad" | "onError" | "width" | "height"
  > {
  src: string;
  alt?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Image = ({
  src,
  alt,
  borderRadius,
  width,
  height,
  aspectRatio,
  objectFit = "cover",
  className,
  style,
  onLoad,
  onError,
  ...rest
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
  }, [src]);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsLoaded(true);
      onLoad?.(e);
    },
    [onLoad]
  );

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsError(true);
      onError?.(e);
    },
    [onError]
  );

  const wrapperStyle = {
    ...(width && { width }),
    ...(height && { height }),
    ...(aspectRatio && { aspectRatio }),
    ...(borderRadius && { borderRadius }),
    ...style,
  };

  return (
    <div className={cn(styles.wrapper, className)} style={wrapperStyle}>
      {!isLoaded && (
        <SkeletonElement
          className={cn(styles.skeleton, isError && styles.skeletonError)}
          aria-hidden
        />
      )}
      <img
        {...rest}
        src={src}
        alt={alt}
        className={cn(styles.img, isLoaded && styles.imgLoaded)}
        style={{ objectFit }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

Image.displayName = "Image";
