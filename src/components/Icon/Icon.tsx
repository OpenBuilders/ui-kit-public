import React from "react";
import { IconName } from "./types";
import { icons } from "./icons";
import styles from "./Icon.module.scss";
import cn from "classnames";

interface IconProps {
  name: IconName;
  size?: number;
  fullSize?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "accent"
    | "destructive"
    | "warning"
    | "success";
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  fullSize = false,
  color = "primary",
  className,
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const sizeStyle = fullSize ? `100%` : `${size}px`;

  return (
    <div
      style={{ width: sizeStyle, height: sizeStyle, minWidth: sizeStyle }}
      className={cn(styles.icon, styles[`color-${color}`], className)}
    >
      <IconComponent />
    </div>
  );
};
