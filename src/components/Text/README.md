# Text

Typography component with preset sizes and weights.

## Usage

```tsx
import { Text } from "@components";

<Text type="body" weight="medium">Hello</Text>
```

## Props

```ts
type TextType =
  | "hero"
  | "largeTitle"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "body"
  | "callout"
  | "subheadline1"
  | "subheadline2"
  | "footnote"
  | "caption1"
  | "caption2";

type TextWeight = "light" | "regular" | "medium" | "semibold" | "bold";

type TextAlign = "left" | "center" | "right" | "stretch";

type TextColor = "primary" | "secondary" | "tertiary" | "accent" | "danger" | "white";

interface TextProps {
  children: React.ReactNode;
  type?: TextType;
  weight?: TextWeight;
  align?: TextAlign;
  color?: TextColor;
  uppercase?: boolean;
  className?: string;
  onClick?: () => void;
}
```
