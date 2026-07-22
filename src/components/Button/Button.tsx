import classNames from "classnames";
import { ReactNode, useCallback } from "react";

import styles from "./Button.module.scss";
import { Spinner } from "../Spinner";

interface ButtonProps {
  disabled?: boolean;
  children?: ReactNode;
  onClick?(): void;
  type?: "primary" | "secondary" | "outline" | "danger";
  className?: string;
  loading?: boolean;
}

export const Button = ({
  children,
  onClick,
  disabled,
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
    return children;
  }, [children, loading]);

  return (
    <button
      className={classNames(styles.button, styles[`type-${type}`], className)}
      onClick={handleClick}
      disabled={disabled}
      role="button"
    >
      {renderContent()}
    </button>
  );
};
