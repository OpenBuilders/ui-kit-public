import { Icon, Text } from "@components";
import cn from "classnames";

import styles from "./GroupItem.module.scss";

interface GroupProps {
  isDragging?: boolean;
  main?: React.ReactNode;
  text?: React.ReactNode;
  description?: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  chevron?: boolean;
  canDrag?: boolean;
}

const renderText = (text: string | React.ReactNode) => {
  if (typeof text === "string") {
    return <Text type="body" truncate>{text}</Text>;
  }
  return text;
};

const renderDescription = (description: string | React.ReactNode) => {
  if (typeof description === "string") {
    return (
      <Text type="caption1" color="secondary" truncate>
        {description}
      </Text>
    );
  }
  return description;
};

export const GroupItem = ({
  isDragging,
  main,
  text,
  description,
  before,
  after,
  disabled,
  onClick,
  chevron,
  canDrag,
}: GroupProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        styles.container,
        before && styles.hasBefore,
        onClick && styles.clickable,
        disabled && styles.disabled,
        isDragging && styles.dragging
      )}
      onClick={handleClick}
      data-group-item
    >
      {before && (
        <div className={styles.before} data-group-item-before>
          <div className={styles.beforeContent} data-group-item-before-content>
            {before}
          </div>
        </div>
      )}
      <div className={styles.main}>
        <div className={styles.content}>
          {main && main}
          {text && renderText(text)}
          {description && renderDescription(description)}
        </div>
        {after && <div className={styles.after}>{after}</div>}
        {chevron && (
          <div className={styles.chevron}>
            <Icon name="chevron" />
          </div>
        )}
        {canDrag && (
          <div className={styles.dragIcon}>
            <span />
          </div>
        )}
      </div>
      <div data-group-item-border-bottom className={styles.bottomBorder} />
    </div>
  );
};
