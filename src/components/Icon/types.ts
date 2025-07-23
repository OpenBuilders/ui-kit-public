export type ActionIconName = "cross";

export type IconName = ActionIconName;

export type IconComponent = () => React.ReactElement;

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
  className?: string;
  borderRadius?: string | "full";
}
