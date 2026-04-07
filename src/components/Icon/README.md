# Icon

Renders an SVG icon by name, or a custom icon element.

## Usage

```tsx
import { Icon } from "@components";

<Icon name="cross" width="16px" height="16px" color="primary" />

import customLogo from "./logo.svg";

<Icon customIcon={customLogo} width="16px" height="16px" />

const customInlineSvg = `<svg viewBox="0 0 24 24"><path d="..." /></svg>`;

<Icon customIcon={customInlineSvg} renderAs="svg" width="16px" height="16px" />
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
type CustomIconRenderAs = "image" | "svg";

interface IconProps {
  name?: IconName;
  width?: string | "full";
  height?: string | "full";
  color?: IconColor;
  colorType?: ColorType;
  renderAs?: CustomIconRenderAs;
  className?: string;
  borderRadius?: string | "full";
  customIcon?: React.ReactElement | string;
}
```

### Behavior
- If `name` is not found and `customIcon` is not provided, the icon is not rendered.
- You can supply a custom icon map via `IconContext.Provider`.
- `renderAs` affects string `customIcon` only:
  - `"image"` (default): renders string as `<img src="...">`
  - `"svg"`: renders string as inline SVG markup
