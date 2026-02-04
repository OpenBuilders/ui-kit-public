# Dropdown

Selectable list dropdown.

## Usage

```tsx
import { Dropdown } from "@components";
import type { Option } from "@types";

const options: Option[] = [
  { label: "One", value: "one" },
  { label: "Two", value: "two" },
];

<Dropdown
  options={options}
  active={isOpen}
  selectedValue={value}
  onSelect={setValue}
  onClose={() => setIsOpen(false)}
/>
```

## Props

```ts
type Option = {
  label: string;
  value: string | null;
  image?: string;
};

type DropdownProps = {
  options: Option[];
  active: boolean;
  selectedValue?: string | null;
  onSelect: (value: string | null) => void;
  onClose: () => void;
  className?: string;
  triggerRef?: React.RefObject<HTMLDivElement | null>;
};
```

### Behavior
- Closes on outside click (pointerdown). `triggerRef` prevents closing when clicking the trigger.
- Selecting an item calls `onSelect` and then `onClose`.
