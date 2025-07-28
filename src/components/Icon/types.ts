export type ActionIconName = "cross" | "chevron";

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
  name: IconName;
  size?: string | "full";
  color?: IconColor;
  colorType?: ColorType;
  className?: string;
  borderRadius?: string | "full";
}
