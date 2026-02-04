# Group

List container with optional header, footer, action, and skeleton state.

## Usage

```tsx
import { Group, GroupItem } from "@components";

<Group header="Settings" footer="Last updated today">
  <GroupItem text="Notifications" />
  <GroupItem text="Privacy" />
</Group>
```

## Props

```ts
interface GroupSkeleton {
  show?: boolean;
  styles?: React.CSSProperties;
}

interface GroupProps {
  children: React.ReactNode;
  header?: string;
  footer?: React.ReactNode | string;
  action?: React.ReactNode;
  skeleton?: GroupSkeleton;
}
```

### Behavior
- When `skeleton.show` is true, renders a skeleton block instead of content.
- Automatically hides the last divider for elements that set `data-group-item-border-bottom`.
