import cn from "classnames";
import { forwardRef, useState, useCallback } from "react";

import styles from "./Textarea.module.scss";
import { TextareaProps } from "./types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      value,
      placeholder,
      disabled = false,
      readOnly = false,
      required = false,
      autoFocus = false,
      autoComplete,
      name,
      id,
      maxLength,
      minLength,
      rows,
      cols,
      wrap,
      resize = "vertical",
      spellCheck,
      tabIndex,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyUp,
      onInput,
      onPaste,
      onCopy,
      onCut,
      validator,
      validateOnBlur = true,
      validateOnChange = false,
      error: externalError,
      className,
      style,
      "data-testid": dataTestId,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedby,
      "aria-invalid": ariaInvalid,
      "aria-required": ariaRequired,
      ...restProps
    } = props;

    // Состояние для внутренней валидации
    const [internalError, setInternalError] = useState<string | null>(null);

    // Валидация
    const validate = useCallback(
      (valueToValidate: string): boolean => {
        if (validator) {
          const validationError = validator(valueToValidate);
          setInternalError(validationError);
          return !validationError;
        }
        return true;
      },
      [validator]
    );

    // Обработчики событий
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;

        if (validateOnChange) {
          validate(newValue);
        }

        onChange?.(newValue, event);
      },
      [validateOnChange, validate, onChange]
    );

    const handleFocus = useCallback(
      (event: React.FocusEvent<HTMLTextAreaElement>) => {
        onFocus?.(event);
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLTextAreaElement>) => {
        if (validateOnBlur) {
          validate(value);
        }

        onBlur?.(event);
      },
      [validateOnBlur, validate, value, onBlur]
    );

    // Определяем ошибку (внешняя имеет приоритет)
    const error = externalError || internalError;

    return (
      <textarea
        ref={ref}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        name={name}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        rows={rows}
        cols={cols}
        wrap={wrap}
        spellCheck={spellCheck}
        tabIndex={tabIndex}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onInput={onInput}
        onPaste={onPaste}
        onCopy={onCopy}
        onCut={onCut}
        className={cn(styles.textarea, styles[`resize-${resize}`], className)}
        style={style}
        data-testid={dataTestId}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-invalid={ariaInvalid ?? !!error}
        aria-required={ariaRequired ?? required}
        {...restProps}
      />
    );
  }
);

Textarea.displayName = "Textarea";
