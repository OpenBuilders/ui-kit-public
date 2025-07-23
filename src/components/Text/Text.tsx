import styles from "./Text.module.scss";
import { TextAlign, TextType, TextWeight } from "./types";
import cn from "classnames";

interface TextProps {
  children: React.ReactNode;
  type?: TextType;
  weight?: TextWeight;
  align?: TextAlign;
}

export const Text: React.FC<TextProps> = ({
  children,
  type = "body",
  weight = "regular",
  align = "left",
}) => {
  return (
    <div
      className={cn(
        styles[`type-${type}`],
        styles[`weight-${weight}`],
        styles[`align-${align}`]
      )}
    >
      {children}
    </div>
  );
};
