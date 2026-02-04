# Button

Primary/secondary button with optional icon and loading state.

## Usage

```tsx
import { Button } from "@components";

<Button text="Save" onClick={handleSave} />
```

## Props

```ts
interface ButtonProps {
  text?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?(): void;
  type?: "primary" | "secondary";
  className?: string;
  loading?: boolean;
}
```

### Behavior
- `loading` shows a spinner and prevents clicks.
- `disabled` uses the native disabled state.
