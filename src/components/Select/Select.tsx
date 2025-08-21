import { Icon } from "../Icon";
import { Text } from "../Text";
import styles from "./Select.module.scss";

interface SelectProps {
  options?: {
    value: string;
    name: string;
  }[];
  onChange?: (value: string) => void;
  value?: string | null;
  placeholder?: string;
  disabled?: boolean;
}

export const Select = ({
  options,
  onChange,
  value,
  placeholder,
  disabled,
}: SelectProps) => {
  const selectValue = value ?? placeholder ?? "";
  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectMain}>
        <Text>{selectValue}</Text>
        <Icon name="doubleChevron" size="12" />
      </div>
      <div className={styles.selectOptionsContainer}></div>
    </div>
    // <div className={styles.selectWrapper}>
    //   <select
    //     className={styles.appSelect}
    //     value={value ?? ""}
    //     onChange={(e) => onChange?.(e.target.value)}
    //     disabled={disabled}
    //     dir="rtl"
    //   >
    //     {placeholder && (
    //       <option dir="ltr" value="" disabled>
    //         {placeholder}
    //       </option>
    //     )}
    //     {options?.map((option) => (
    //       <option key={option.value} dir="ltr" value={option.value}>
    //         {option.name}
    //       </option>
    //     ))}
    //   </select>
    //   <div className={styles.icon}>
    //     <Icon name="doubleChevron" size="12" />
    //   </div>
    // </div>
  );
};
