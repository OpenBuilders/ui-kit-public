# Input

Controlled text input with optional validation.

## Usage

```tsx
import { Input } from "@components";

<Input
  value={value}
  onChange={(next) => setValue(next)}
  placeholder="Type here"
/>
```

## Props

```ts
export interface InputProps {
  value: string;
  placeholder?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date";
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  min?: string;
  max?: string;
  pattern?: string;
  size?: number;
  spellCheck?: boolean;
  tabIndex?: number;
  numeric?: boolean;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  onCopy?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  onCut?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  validator?: (value: string) => string | null;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  error?: string;
  success?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "data-testid"?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  "aria-required"?: boolean;
}
```

### Behavior
- `validator` returns an error string or null.
- `validateOnBlur` (default true) and `validateOnChange` control when validation runs.
- If `error` is provided, it overrides internal validation error.
