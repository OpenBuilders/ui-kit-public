// import { Option } from "@types";
import cn from "classnames";
import { useEffect, useRef } from "react";

import { Icon, Image, Text } from "@components";
import { Option } from "@types";

import styles from "./Dropdown.module.scss";

type DropdownProps = {
  options: Option[];
  active: boolean;
  selectedValue?: string | null;
  onSelect: (value: string | null) => void;
  onClose: () => void;
  className?: string;
  triggerRef?: React.RefObject<HTMLDivElement | null>;
};

export const Dropdown = ({
  options,
  active,
  selectedValue,
  onSelect,
  onClose,
  className,
  triggerRef,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!active) {
      return;
    }

    const handleClickOutside = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        dropdownRef.current?.contains(target) ||
        triggerRef?.current?.contains(target)
      ) {
        return;
      }

      onClose();
    };

    document.addEventListener("pointerdown", handleClickOutside, true);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside, true);
    };
  }, [active, onClose, triggerRef]);

  const handleSelect = (value: string | null) => {
    // hapticFeedback("soft");
    onSelect(value);
    onClose();
  };

  return (
    <div
      ref={dropdownRef}
      className={cn(
        styles.dropdown,
        active && styles.dropdownActive,
        className
      )}
    >
      <ul className={styles.list}>
        {options.map(({ label, value, image }, index) => {
          const isSelected = value === selectedValue;

          return (
            <li
              key={`${value}-${index}-${label}`}
              className={cn(styles.item, isSelected && styles.itemActive)}
              onClick={() => handleSelect(value)}
            >
              {image && (
                <Image
                  src={image}
                  width="24px"
                  borderRadius="50%"
                  aspectRatio="1"
                  alt={label}
                />
              )}
              <Text type="body" color="primary" className={styles.itemText}>
                {label}
              </Text>
              <Icon
                name="check"
                color="accent"
                colorType="stroke"
                className={cn(
                  styles.checkIcon,
                  isSelected && styles.checkIconActive
                )}
                size="16px"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
