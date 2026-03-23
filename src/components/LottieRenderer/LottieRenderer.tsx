import {
  DotLottie,
  type Data as DotLottieData,
} from "@lottiefiles/dotlottie-web";
import cn from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./LottieRenderer.module.scss";
import { SkeletonElement } from "../SkeletonElement";

export interface LottieRendererProps {
  src?: string;
  data?: DotLottieData;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export const LottieRenderer = ({
  src,
  data,
  autoplay = true,
  loop = true,
  speed = 1,
  className,
  width = "100%",
  height = "100%",
  style,
}: LottieRendererProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerRef = useRef<DotLottie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadError, setIsLoadError] = useState(false);

  const sourceConfig = useMemo(() => {
    if (data) {
      return { data };
    }

    if (src) {
      return { src };
    }

    return null;
  }, [data, src]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || !sourceConfig) {
      return;
    }

    setIsLoading(true);
    setIsLoadError(false);

    const player = new DotLottie({
      canvas,
      ...sourceConfig,
      autoplay,
      loop,
      speed,
      renderConfig: {
        autoResize: true,
        devicePixelRatio: window.devicePixelRatio || 1,
      },
    });

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleLoadError = () => {
      setIsLoading(false);
      setIsLoadError(true);
    };

    player.addEventListener("load", handleLoad);
    player.addEventListener("loadError", handleLoadError);

    playerRef.current = player;

    return () => {
      player.removeEventListener("load", handleLoad);
      player.removeEventListener("loadError", handleLoadError);
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [autoplay, loop, sourceConfig, speed]);

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      return;
    }

    player.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      return;
    }

    player.setLoop(loop);
  }, [loop]);

  const hasSource = Boolean(data || src);
  const shouldShowSkeleton = isLoading || isLoadError;

  if (!hasSource) {
    return null;
  }

  return (
    <div
      className={cn(styles.wrapper, className)}
      style={{ width, height, ...style }}
    >
      {sourceConfig && (
        <canvas
          ref={canvasRef}
          className={cn(
            styles.canvas,
            shouldShowSkeleton && styles.canvasHidden,
          )}
        />
      )}
      {shouldShowSkeleton && <SkeletonElement className={styles.skeleton} />}
    </div>
  );
};
