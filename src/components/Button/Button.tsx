import classNames from "classnames";
import { ReactNode, useCallback } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?(): void;
  type?: "primary" | "secondary";
  className?: string;
}

export const Button = ({
  text,
  onClick,
  disabled,
  icon,
  type = "primary",
  className,
}: ButtonProps) => {
  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);
  return (
    <button
      className={classNames(styles.button, styles[`type-${type}`], className)}
      onClick={handleClick}
      disabled={disabled}
      aria-label={text}
      role="button"
    >
      {icon && icon}
      {text}
    </button>
  );
};
