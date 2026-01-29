import classNames from "classnames";
import { ReactNode, useCallback } from "react";

import styles from "./Button.module.scss";
import { Spinner } from "../Spinner";

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?(): void;
  type?: "primary" | "secondary";
  className?: string;
  loading?: boolean;
}

export const Button = ({
  text,
  onClick,
  disabled,
  icon,
  type = "primary",
  className,
  loading = false,
}: ButtonProps) => {
  const handleClick = useCallback(() => {
    if (!disabled && onClick && !loading) {
      onClick();
    }
  }, [disabled, onClick, loading]);

  const renderContent = useCallback(() => {
    if (loading) {
      return <Spinner size="16px" color="white" />;
    }
    return (
      <>
        {icon && icon}
        {text}
      </>
    );
  }, [icon, text, loading]);

  return (
    <button
      className={classNames(styles.button, styles[`type-${type}`], className)}
      onClick={handleClick}
      disabled={disabled}
      aria-label={text}
      role="button"
    >
      {renderContent()}
    </button>
  );
};
