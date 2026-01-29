# ui-kit-public

Open-source, iOS-like UI component library built with React.

## Install

```bash
npm install @telegram-tools/ui-kit
```

## Usage

```tsx
import "@telegram-tools/ui-kit/dist/index.css";
import { Button, Text } from "@telegram-tools/ui-kit";

export function Example() {
  return (
    <div>
      <Text type="title3">Hello</Text>
      <Button text="Click" onClick={() => {}} />
    </div>
  );
}
```

## Storybook

```text
https://ui-kit-public-fe-stage-en8vi.ondigitalocean.app/?path=/story/components-group--default&globals=theme:light
```

## Release workflow

### Stable (prod)
1) Create a changeset:
   ```bash
   yarn changeset
   ```
2) Version packages:
   ```bash
   yarn version-packages
   ```
3) Publish:
   ```bash
   yarn release:changeset
   ```

### Dev pre-releases (dev tag)
1) Enter prerelease mode:
   ```bash
   yarn changeset pre enter dev
   ```
2) Create changeset(s) and publish:
   ```bash
   yarn changeset
   yarn version-packages
   yarn release:changeset
   ```
3) Exit prerelease mode for stable releases:
   ```bash
   yarn changeset pre exit
   ```

### Install dev builds
```bash
npm install @telegram-tools/ui-kit@dev
```
