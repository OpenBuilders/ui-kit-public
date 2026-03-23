import {
  DotLottie,
  type Data as DotLottieData,
} from "@lottiefiles/dotlottie-web";
import cn from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./LottieRenderer.module.scss";
import { loadLocalLottie, type LottieName } from "./lotties";
import { SkeletonElement } from "../SkeletonElement";

export interface LottieRendererProps {
  name?: LottieName;
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
  name,
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
  const [localData, setLocalData] = useState<DotLottieData | null>(null);
  const [isResolvingLocal, setIsResolvingLocal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadError, setIsLoadError] = useState(false);

  const sourceConfig = useMemo(() => {
    if (data) {
      return { data };
    }

    if (src) {
      return { src };
    }

    if (localData) {
      return { data: localData };
    }

    return null;
  }, [data, localData, src]);

  useEffect(() => {
    let isCancelled = false;

    if (!name || data || src) {
      setLocalData(null);
      setIsResolvingLocal(false);
      return;
    }

    setIsResolvingLocal(true);
    setIsLoadError(false);
    setIsLoading(true);

    loadLocalLottie(name)
      .then((animationData) => {
        if (isCancelled) {
          return;
        }

        setLocalData(animationData);
        setIsResolvingLocal(false);
      })
      .catch(() => {
        if (isCancelled) {
          return;
        }

        setIsLoadError(true);
        setIsLoading(false);
        setIsResolvingLocal(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [data, name, src]);

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

  const hasSource = Boolean(data || src || name);
  const shouldShowSkeleton = isResolvingLocal || isLoading || isLoadError;

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
