import { Option } from "@types";
import { useRef, useState } from "react";
import { Icon, Dropdown, Text } from "@components";
import styles from "./Select.module.scss";

interface SelectProps {
  options: Option[];
  value?: string | null;
  onChange: (value: string | null) => void;
}

export const Select = (props: SelectProps) => {
  const { options, value, onChange } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (value: string | null) => {
    onChange(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.select} ref={selectRef}>
      <div className={styles.selectContainer} onClick={handleToggleDropdown}>
        <Text type="body" color="accent">
          {options.find((option) => option.value === value)?.label}
        </Text>
        <Icon name="doubleChevron" size="12px" color="accent" />
      </div>
      <Dropdown
        active={isDropdownOpen}
        options={options}
        selectedValue={value}
        onSelect={(value) => handleSelect(value)}
        onClose={() => handleToggleDropdown()}
        triggerRef={selectRef}
      />
    </div>
  );
};
