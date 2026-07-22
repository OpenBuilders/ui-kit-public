# Button

Primary/secondary/danger button with custom children content and loading state.

## Usage

```tsx
import { Button } from "@components";

<Button onClick={handleSave}>Save</Button>
```

## Props

```ts
interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?(): void;
  type?: "primary" | "secondary" | "outline" | "danger";
  className?: string;
  loading?: boolean;
}
```

### Behavior
- `loading` shows a spinner and prevents clicks.
- `disabled` uses the native disabled state.
