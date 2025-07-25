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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <div style={{ marginLeft: 16 }}>
            <Text type="caption1" color="tertiary" uppercase>
              {header}
            </Text>
          </div>
          {action && <div style={{ marginRight: 16 }}>{action}</div>}
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
        <div style={{ margin: "6px 0 0 16px" }}>
          <Text type="caption1" color="tertiary">
            {footer}
          </Text>
        </div>
      )}
    </>
  );
};
