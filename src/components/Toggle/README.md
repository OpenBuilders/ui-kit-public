# Toggle

Controlled switch component.

## Usage

```tsx
import { Toggle } from "@components";

<Toggle isEnabled={enabled} onChange={setEnabled} />
```

## Props

```ts
interface ToggleProps {
  isEnabled: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  className?: string;
  height?: number;
  width?: number;
  borderRadius?: number;
}
```

### Behavior
- When `disabled`, clicks are ignored.
