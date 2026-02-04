# GroupItem

List row with optional media, text, description, actions, and chevron.

## Usage

```tsx
import { GroupItem, Icon } from "@components";

<GroupItem
  text="Profile"
  description="Edit your profile"
  before={<Icon name="chevron" />}
  chevron
  onClick={openProfile}
/>
```

## Props

```ts
interface GroupItemProps {
  isDragging?: boolean;
  main?: React.ReactNode;
  text?: React.ReactNode;
  description?: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  chevron?: boolean;
  canDrag?: boolean;
}
```

### Behavior
- `text` and `description` can be strings or custom nodes.
- `disabled` prevents clicks.
- `chevron` shows a chevron icon; `canDrag` shows a drag handle.
