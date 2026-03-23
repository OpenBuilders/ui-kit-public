import styles from "./Text.module.scss";
import { TextAlign, TextColor, TextType, TextWeight } from "./types";
import cn from "classnames";

interface TextProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  type?: TextType;
  weight?: TextWeight;
  align?: TextAlign;
  color?: TextColor;
  uppercase?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Text: React.FC<TextProps> = ({
  children,
  as = "p",
  type = "body",
  weight = "regular",
  align = "left",
  color = "primary",
  uppercase = false,
  className,
  onClick,
}) => {
  const Component = as;

  return (
    <Component
      className={cn(
        styles.text,
        styles[`type-${type}`],
        styles[`weight-${weight}`],
        styles[`align-${align}`],
        styles[`color-${color}`],
        uppercase && styles.uppercase,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};
