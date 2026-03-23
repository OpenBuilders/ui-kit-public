import cn from "classnames";
import { useState, useCallback, useEffect, useRef } from "react";

import styles from "./Image.module.scss";
import { SkeletonElement } from "../SkeletonElement";
import { getColor, getFirstLetter, getNumberFromString } from "./helpers";

export interface ImageProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "onLoad" | "onError" | "width" | "height"
  > {
  src?: string;
  alt?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
  fallback?: string;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const DEFAULT_SIZE = 24;

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
  fallback,
  ...rest
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [fallbackFontSize, setFallbackFontSize] = useState(DEFAULT_SIZE / 2);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
  }, [src]);

  useEffect(() => {
    if (src) return;

    const sizeFromProps =
      getNumberFromString(height) || getNumberFromString(width);

    if (sizeFromProps) {
      setFallbackFontSize(sizeFromProps / 2);
      return;
    }

    const node = wrapperRef.current;
    if (!node) return;

    const updateSize = () => {
      const rect = node.getBoundingClientRect();
      const minSide = Math.min(rect.width, rect.height);
      setFallbackFontSize(minSide > 0 ? minSide / 2 : DEFAULT_SIZE / 2);
    };

    updateSize();

    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(updateSize);
    observer.observe(node);

    return () => observer.disconnect();
  }, [src, width, height]);

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

  const renderContent = () => {
    if (!src) {
      const firstLetter = getFirstLetter(fallback);
      const backgroundColor = getColor(firstLetter);

      return (
        <div
          className={styles.fallback}
          style={{
            background: backgroundColor,
            width: "100%",
            height: "100%",
            aspectRatio: aspectRatio || "1 / 1",
            fontSize: fallbackFontSize,
          }}
        >
          <p className={styles.fallbackText}>{firstLetter}</p>
        </div>
      );
    }

    return (
      <>
        <SkeletonElement
          className={cn(styles.skeleton, isError && styles.skeletonError)}
          aria-hidden
        />
        <img
          {...rest}
          src={src}
          alt={alt}
          className={cn(styles.img, isLoaded && styles.imgLoaded)}
          style={{ objectFit }}
          onLoad={handleLoad}
          onError={handleError}
        />
      </>
    );
  };

  return (
    <div ref={wrapperRef} className={cn(styles.wrapper, className)} style={wrapperStyle}>
      {renderContent()}
    </div>
  );
};

Image.displayName = "Image";
