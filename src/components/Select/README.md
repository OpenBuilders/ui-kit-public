# Select

Select input with an internal dropdown.

## Usage

```tsx
import { Select } from "@components";
import type { Option } from "@types";

const options: Option[] = [
  { label: "One", value: "one" },
  { label: "Two", value: "two" },
];

<Select options={options} value={value} onChange={setValue} />
```

## Props

```ts
type Option = {
  label: string;
  value: string | null;
  image?: string;
};

interface SelectProps {
  options: Option[];
  value?: string | null;
  onChange: (value: string | null) => void;
}
```

### Behavior
- Uses `Dropdown` internally and closes after selection.
- Displays the label for the selected value.
