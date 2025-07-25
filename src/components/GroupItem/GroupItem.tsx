import cn from "classnames";
import { Text } from "@components";

import styles from "./GroupItem.module.scss";

interface GroupProps {
  text?: React.ReactNode;
  description?: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const renderText = (text: string | React.ReactNode) => {
  if (typeof text === "string") {
    return <Text type="body">{text}</Text>;
  }
  return text;
};

const renderDescription = (description: string | React.ReactNode) => {
  if (typeof description === "string") {
    return <Text type="caption1">{description}</Text>;
  }
  return description;
};

export const GroupItem = ({
  text,
  description,
  before,
  after,
  disabled,
  onClick,
}: GroupProps) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        styles.container,
        onClick && styles.clickable,
        disabled && styles.disabled
      )}
      onClick={handleClick}
      data-group-item
    >
      {before && (
        <div className={styles.before} data-group-item-before>
          {before}
        </div>
      )}
      <div className={styles.content}>
        {text && renderText(text)}
        {description && renderDescription(description)}
      </div>
      {after && <div className={styles.after}>{after}</div>}
      <div className={styles.line} data-group-item-line />
    </div>
  );
};
