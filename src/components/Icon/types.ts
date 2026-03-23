import React from "react";

export type ActionIconName = "cross" | "chevron" | "doubleChevron" | "check";

export type IconName = ActionIconName;

export type IconComponent = () => React.ReactElement;

export type ColorType = "fill" | "stroke" | "both";

export type IconColor =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent"
  | "destructive"
  | "warning"
  | "success";

export interface IconProps {
  name?: IconName;
  width?: string | "full";
  height?: string | "full";
  color?: IconColor;
  colorType?: ColorType;
  className?: string;
  borderRadius?: string | "full";
  customIcon?: React.ReactElement;
}
