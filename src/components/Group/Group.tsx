import { Text } from "@components";
import styles from "./Group.module.scss";
import { useState, useEffect } from "react";

interface GroupProps {
  children: React.ReactNode;
  header?: string;
  footer?: React.ReactNode | string;
  action?: React.ReactNode;
}

const GROUP_ITEM_GAP = 10;
const GROUP_ITEM_LEFT_GAP = 16;

export const Group = ({ children, header, footer, action }: GroupProps) => {
  const [maxLeftGap, setMaxLeftGap] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const groupItems = document.querySelectorAll("[data-group-item-before]");
      if (groupItems) {
        const maxWidth = Math.max(
          ...Array.from(groupItems).map(
            (item) => item.getBoundingClientRect().width
          )
        );
        setMaxLeftGap(maxWidth);
      }
    }, 100);
  }, [children]);

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
        className={styles.group}
        style={
          {
            "--left-gap": `${
              maxLeftGap + GROUP_ITEM_LEFT_GAP + GROUP_ITEM_GAP
            }px`,
          } as React.CSSProperties
        }
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
