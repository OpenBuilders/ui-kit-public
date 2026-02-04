# Icon

Renders an SVG icon by name, or a custom icon element.

## Usage

```tsx
import { Icon } from "@components";

<Icon name="cross" size="16px" color="primary" />
```

## Props

```ts
type IconName = "cross" | "chevron" | "doubleChevron" | "check";

type IconColor =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent"
  | "destructive"
  | "warning"
  | "success";

type ColorType = "fill" | "stroke" | "both";

interface IconProps {
  name?: IconName;
  size?: string | "full";
  color?: IconColor;
  colorType?: ColorType;
  className?: string;
  borderRadius?: string | "full";
  customIcon?: React.ReactElement;
}
```

### Behavior
- If `name` is not found and `customIcon` is not provided, the icon is not rendered.
- You can supply a custom icon map via `IconContext.Provider`.
