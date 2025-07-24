import { IconProps } from "./types";

import styles from "./Icon.module.scss";
import cn from "classnames";
import { useIcons } from "./IconContextUtils";

export const Icon = ({
  name,
  size = "16",
  color = "default",
  className,
  borderRadius = "0",
}: IconProps) => {
  const icons = useIcons();
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const sizeStyle = size === "full" ? `100%` : `${size}px`;
  const borderRadiusStyle =
    borderRadius === "full" ? `50%` : `${borderRadius}px`;

  return (
    <div
      style={{
        width: sizeStyle,
        height: sizeStyle,
        minWidth: sizeStyle,
        borderRadius: borderRadiusStyle,
      }}
      className={cn(
        styles.icon,
        color !== "default" && styles[`color-${color}`],
        className
      )}
    >
      <IconComponent />
    </div>
  );
};
