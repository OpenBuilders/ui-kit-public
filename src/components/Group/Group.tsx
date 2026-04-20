import { SkeletonElement, Text } from "@components";

import React, { useLayoutEffect, useRef } from "react";
import cn from "classnames";

import styles from "./Group.module.scss";

interface GroupSkeleton {
  show?: boolean;
  styles?: React.CSSProperties;
}

interface GroupProps {
  children: React.ReactNode;
  header?: string;
  footer?: React.ReactNode | string;
  action?: React.ReactNode;
  skeleton?: GroupSkeleton;
  color?: "primary" | "secondary";
}

export const Group = ({
  children,
  header,
  footer,
  action,
  skeleton,
  color = "primary",
}: GroupProps) => {
  const groupRef = useRef<HTMLDivElement>(null);
  const ITEM_LEFT_GAP = 16;
  const GROUP_ITEM_GAP = 10;

  useLayoutEffect(() => {
    if (!groupRef.current) return;

    const groupElement = groupRef.current;

    const updateGroupLayout = () => {
      const borderItems = groupElement.querySelectorAll<HTMLElement>(
        "[data-group-item-border-bottom]",
      );
      const beforeContentItems = groupElement.querySelectorAll<HTMLElement>(
        "[data-group-item-before-content]",
      );

      let maxBeforeWidth = 0;
      beforeContentItems.forEach((beforeContent) => {
        maxBeforeWidth = Math.max(
          maxBeforeWidth,
          beforeContent.getBoundingClientRect().width,
        );
      });

      const contentLeftOffset =
        maxBeforeWidth > 0
          ? ITEM_LEFT_GAP + maxBeforeWidth + GROUP_ITEM_GAP
          : ITEM_LEFT_GAP;

      if (maxBeforeWidth > 0) {
        groupElement.style.setProperty(
          "--group-item-before-size",
          `${maxBeforeWidth}px`,
        );
      } else {
        groupElement.style.removeProperty("--group-item-before-size");
      }
      groupElement.style.setProperty(
        "--group-item-content-left-offset",
        `${contentLeftOffset}px`,
      );

      borderItems.forEach((item) => {
        item.style.opacity = "1";
      });

      const lastItem = borderItems[borderItems.length - 1];
      if (lastItem) {
        lastItem.style.opacity = "0";
      }
    };

    updateGroupLayout();

    if (typeof ResizeObserver === "undefined") return;

    const resizeObserver = new ResizeObserver(updateGroupLayout);
    resizeObserver.observe(groupElement);

    const beforeContentItems = groupElement.querySelectorAll<HTMLElement>(
      "[data-group-item-before-content]",
    );
    beforeContentItems.forEach((beforeContent) => {
      resizeObserver.observe(beforeContent);
    });

    return () => resizeObserver.disconnect();
  }, [children]);

  if (skeleton?.show) {
    return (
      <SkeletonElement
        className={cn(styles.group)}
        style={{
          height: "50px",
          ...skeleton?.styles,
        }}
        aria-hidden
      />
    );
  }

  return (
    <>
      {header && (
        <div className={styles.header}>
          <div className={styles.headerText}>
            <Text type="caption1" color="secondary" uppercase>
              {header}
            </Text>
          </div>
          {action && <div className={styles.action}>{action}</div>}
        </div>
      )}
      <div
        ref={groupRef}
        className={cn(styles.group, color && styles[`color-${color}`])}
      >
        {children}
      </div>
      {footer && (
        <div className={styles.footer}>
          <Text type="caption1" color="secondary">
            {footer}
          </Text>
        </div>
      )}
    </>
  );
};
