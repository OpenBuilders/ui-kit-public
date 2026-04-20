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
  // События
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
  // Валидация
  validator?: (value: string) => string | null; // возвращает ошибку или null
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  // Состояние
  error?: string;
  success?: boolean;
  // Дополнительные пропсы для передачи в DOM элемент
  className?: string;
  style?: React.CSSProperties;
  "data-testid"?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  "aria-required"?: boolean;
}
