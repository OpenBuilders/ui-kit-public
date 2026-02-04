# Image

Image wrapper with skeleton loading state and optional sizing helpers.

## Usage

```tsx
import { Image } from "@components";

<Image src="/avatar.png" width="40px" height="40px" borderRadius="50%" />
```

## Props

```ts
export interface ImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>,
    "onLoad" | "onError" | "width" | "height"
  > {
  src: string;
  alt?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
```

### Behavior
- Shows a skeleton until the image finishes loading.
- Adds an error style if the image fails to load.
