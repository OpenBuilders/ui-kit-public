import { IconProps } from "./types";

import styles from "./Icon.module.scss";
import cn from "classnames";
import { useIcons } from "./IconContextUtils";

export const Icon = ({
  name,
  size = "full",
  color = "default",
  colorType = "fill",
  className,
  borderRadius = "0",
  customIcon,
}: IconProps) => {
  const icons = useIcons();
  const IconComponent = name ? icons[name] : null;

  if (!IconComponent && !customIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const sizeStyle = size === "full" ? `100%` : `${size}`;
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
        color !== "default" && styles[`color-${color}-${colorType}`],
        className
      )}
    >
      {IconComponent && <IconComponent />}
      {customIcon && customIcon}
    </div>
  );
};
