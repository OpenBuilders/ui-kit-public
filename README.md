# ui-kit-public

Open-source, iOS-like UI component library built with React.

## Install

```bash
npm install @telegram-tools/ui-kit

yarn add @telegram-tools/ui-kit
```

## Usage

```tsx
import "@telegram-tools/ui-kit/dist/index.css";
import { Button, Text, ThemeProvider } from "@telegram-tools/ui-kit";

export function Example() {
  return (
    <ThemeProvider>
      <div>
        <Text type="title3">Hello</Text>
        <Button text="Click" onClick={() => {}} />
      </div>
    </ThemeProvider>
  );
}
```

`ThemeProvider` sets the `theme-mode` attribute on `html` and pulls the theme from Telegram WebApp, or from the `theme` prop if provided.

## Storybook

```text
https://ui-kit-public-fe-prod-dwbtc.ondigitalocean.app/
```
