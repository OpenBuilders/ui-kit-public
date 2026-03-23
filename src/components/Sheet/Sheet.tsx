import { createPortal } from "react-dom";
import cn from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

import { Icon } from "@components";
import styles from "./Sheet.module.scss";

export type SheetComponentMap = Record<string, React.ComponentType>;

interface SheetProps {
  sheets: SheetComponentMap;
  activeSheet: string | null;
  opened: boolean;
  onClose: () => void;
  transitionDuration?: number;
}

const DEFAULT_TRANSITION_DURATION = 300;

export function Sheet({
  sheets,
  activeSheet,
  opened,
  onClose,
  transitionDuration = DEFAULT_TRANSITION_DURATION,
}: SheetProps) {
  const [hostActive, setHostActive] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [displayedName, setDisplayedName] = useState<string | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const prevNameRef = useRef<string | null>(null);
  const prevOpenedRef = useRef<boolean>(false);

  const ActiveComponent = useMemo(() => {
    if (!displayedName) return null;
    return sheets[displayedName];
  }, [displayedName, sheets]);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const clearRaf = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => {
    const prevName = prevNameRef.current;
    const prevOpened = prevOpenedRef.current;
    const nextName = activeSheet;

    // Opening
    if (!prevOpened && opened) {
      clearTimer();
      clearRaf();
      setDisplayedName(nextName);
      setHostActive(true);
      setPanelOpen(false);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setPanelOpen(true);
          clearRaf();
        });
      });
    }

    // Closing
    if (prevOpened && !opened) {
      clearTimer();
      clearRaf();
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setHostActive(false);
        setDisplayedName(null);
        clearTimer();
      }, transitionDuration);
    }

    // Switch while open
    if (prevOpened && opened && prevName && nextName && prevName !== nextName) {
      clearTimer();
      clearRaf();
      setPanelOpen(false);
      timerRef.current = setTimeout(() => {
        setDisplayedName(nextName);
        rafRef.current = requestAnimationFrame(() => {
          setPanelOpen(true);
          clearRaf();
        });
        clearTimer();
      }, transitionDuration);
    }

    // Update displayed name while closed
    if (!opened && prevName !== nextName) {
      setDisplayedName(nextName);
    }

    prevNameRef.current = nextName;
    prevOpenedRef.current = opened;

    return () => {
      clearTimer();
      clearRaf();
    };
  }, [activeSheet, opened, transitionDuration]);

  if (!hostActive) return null;

  return createPortal(
    <RemoveScroll enabled={opened}>
      <div
        className={cn(styles.root, (panelOpen || opened) && styles.rootActive)}
        onClick={onClose}
        aria-hidden
      />

      <div
        className={cn(styles.sheet, panelOpen && styles.sheetActive)}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.cross} onClick={onClose} aria-label="Close">
          <Icon name="cross" width="16px" height="16px" color="primary" />
        </div>

        <div className={styles.content}>
          {ActiveComponent ? <ActiveComponent /> : null}
        </div>
      </div>
    </RemoveScroll>,
    document.body
  );
}
