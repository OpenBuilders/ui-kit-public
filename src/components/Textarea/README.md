# Textarea

Controlled textarea with optional validation.

## Usage

```tsx
import { Textarea } from "@components";

<Textarea
  value={value}
  onChange={(next) => setValue(next)}
  placeholder="Type here"
/>
```

## Props

```ts
export interface TextareaProps {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  rows?: number;
  cols?: number;
  wrap?: "hard" | "soft" | "off";
  resize?: "none" | "vertical" | "horizontal" | "both";
  spellCheck?: boolean;
  tabIndex?: number;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onInput?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  onCopy?: (event: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  onCut?: (event: React.ClipboardEvent<HTMLTextAreaElement>) => void;
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
