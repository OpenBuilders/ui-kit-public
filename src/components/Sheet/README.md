# Sheet

Bottom sheet container with portal rendering and controlled visibility.

## Usage

```tsx
import { Sheet } from "@components";

const sheets = {
  DETAILS: DetailsSheet,
  SETTINGS: SettingsSheet,
};

<Sheet
  sheets={sheets}
  activeSheet="DETAILS"
  opened={isOpen}
  onClose={() => setIsOpen(false)}
/>;
```

## Props

```ts
type SheetComponentMap = Record<string, React.ComponentType>;

interface SheetProps {
  sheets: SheetComponentMap;
  activeSheet: string | null;
  opened: boolean;
  onClose: () => void;
  transitionDuration?: number; // ms, default 300
}
```

### Behavior
- `opened` controls visibility and animation state.
- `activeSheet` picks which component to render from `sheets`.
- Switching `activeSheet` while `opened` is `true` triggers a close → swap → open sequence.
- The sheet is rendered into `document.body` via a portal.
- Background scroll is locked while open.

## Notes
- Provide stable component references in `sheets` to avoid remounting.
- If `activeSheet` is `null`, no content is rendered.
