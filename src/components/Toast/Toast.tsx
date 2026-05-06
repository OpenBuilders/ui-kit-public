import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import cn from "classnames";

import styles from "./Toast.module.scss";
import { Icon, IconName, Text } from "@components";

export type ToastType = "success" | "error" | "info";

type ToastOptions = {
  duration?: number;
  type?: ToastType;
};

type ToastItem = {
  id: number;
  message: string;
  duration: number;
  type?: ToastType;
};

type ToastContextValue = {
  showToast: (message: string, options?: ToastOptions) => void;
};

type ToastProviderProps = {
  children: React.ReactNode;
  bottomOffset?: number | string;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

const DEFAULT_DURATION_MS = 3000;
const DEFAULT_BOTTOM_OFFSET = 24;

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider = ({
  children,
  bottomOffset = DEFAULT_BOTTOM_OFFSET,
}: ToastProviderProps) => {
  const [currentToast, setCurrentToast] = useState<ToastItem | null>(null);
  const [nextToast, setNextToast] = useState<ToastItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const idRef = useRef(0);
  const currentToastRef = useRef<ToastItem | null>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    currentToastRef.current = currentToast;
  }, [currentToast]);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const clearRaf = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const showWithAnimation = useCallback(
    (toast: ToastItem) => {
      clearRaf();
      setCurrentToast(toast);
      setIsVisible(false);
      rafRef.current = requestAnimationFrame(() => {
        setIsVisible(true);
        rafRef.current = null;
      });
    },
    [clearRaf]
  );

  const showToast = useCallback(
    (message: string, options?: ToastOptions) => {
      const duration = options?.duration ?? DEFAULT_DURATION_MS;
      const type = options?.type ?? "success";
      const newToast: ToastItem = {
        id: (idRef.current += 1),
        message,
        duration,
        type,
      };

      clearHideTimeout();

      if (!currentToastRef.current) {
        showWithAnimation(newToast);
        return;
      }

      setNextToast(newToast);
      setIsVisible(false);
    },
    [clearHideTimeout, showWithAnimation]
  );

  useEffect(() => {
    if (!currentToast || !isVisible) {
      return;
    }

    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, currentToast.duration);

    return () => {
      clearHideTimeout();
    };
  }, [clearHideTimeout, currentToast, isVisible]);

  useEffect(() => {
    return () => {
      clearRaf();
      clearHideTimeout();
    };
  }, [clearRaf, clearHideTimeout]);

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (
      event.propertyName !== "opacity" &&
      event.propertyName !== "transform"
    ) {
      return;
    }

    if (isVisible) {
      return;
    }

    if (nextToast) {
      showWithAnimation(nextToast);
      setNextToast(null);
      return;
    }

    setCurrentToast(null);
  };

  const contextValue = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {currentToast && (
        <div
          className={styles.toastContainer}
          style={{ bottom: bottomOffset }}
          aria-live="polite"
        >
          <div
            className={cn(styles.toast, isVisible && styles.toastVisible)}
            onTransitionEnd={handleTransitionEnd}
            role="status"
          >
            <div className={styles.toastContent}>
              {currentToast.type && (
                <Icon
                  width="18px"
                  height="18px"
                  name={currentToast.type as IconName}
                />
              )}
              <Text type="caption1" color="white">
                {currentToast.message}
              </Text>
            </div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};
