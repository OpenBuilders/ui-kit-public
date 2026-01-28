import styles from "./SkeletonElement.module.scss";
import cn from "classnames";

interface SkeletonElementProps {
  style?: React.CSSProperties;
  className?: string;
}

export const SkeletonElement = ({ style, className }: SkeletonElementProps) => {
  return (
    <div className={cn(styles.skeletonElement, className)} style={style} />
  );
};
