import styles from "./Spinner.module.scss";
import cn from "classnames";

interface SpinnerProps {
  size?: string;
  color?: "primary" | "secondary" | "accent" | "white";
}

export const Spinner = ({ size = "16px", color = "primary" }: SpinnerProps) => {
  return (
    <div
      className={cn(styles.spinner, styles[`spinner-color-${color}`])}
      style={{ width: size, height: size }}
    />
  );
};
