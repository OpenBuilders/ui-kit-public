import { IconProps } from "./types";

import styles from "./Icon.module.scss";
import cn from "classnames";
import { useIcons } from "./IconContextUtils";

export const Icon = ({
  name,
  width = "full",
  height = "auto",
  color = "default",
  colorType = "fill",
  renderAs = "svg",
  className,
  borderRadius = "0",
  customIcon,
}: IconProps) => {
  const icons = useIcons();
  const IconComponent = name ? icons[name] : null;
  const customIconString =
    typeof customIcon === "string" ? customIcon.trim() : null;
  const customInlineSvg =
    renderAs === "svg" && customIconString ? customIconString : null;
  const customIconUrl =
    renderAs === "image" && customIconString ? customIconString : null;

  if (!IconComponent && !customIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const widthStyle = width === "full" ? `100%` : `${width}`;
  const heightStyle = height === "full" ? `100%` : `${height}`;
  const borderRadiusStyle =
    borderRadius === "full" ? `50%` : `${borderRadius}px`;

  return (
    <div
      style={{
        width: widthStyle,
        height: heightStyle,
        minWidth: widthStyle,
        borderRadius: borderRadiusStyle,
      }}
      className={cn(
        styles.icon,
        color !== "default" && styles[`color-${color}-${colorType}`],
        className,
      )}
    >
      {IconComponent && <IconComponent />}
      {customInlineSvg ? (
        <span
          aria-hidden="true"
          className={styles.customIconSvg}
          dangerouslySetInnerHTML={{ __html: customInlineSvg }}
        />
      ) : customIconUrl ? (
        <img
          src={customIconUrl}
          alt=""
          aria-hidden="true"
          className={styles.customIconImage}
        />
      ) : (
        customIcon
      )}
    </div>
  );
};
