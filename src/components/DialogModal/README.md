# DialogModal

Confirmation dialog with title, description, and two actions.

## Usage

```tsx
import { DialogModal } from "@components";

<DialogModal
  active={isOpen}
  title="Delete item?"
  description="This action cannot be undone."
  confirmText="Delete"
  closeText="Cancel"
  onConfirm={handleConfirm}
  onClose={() => setIsOpen(false)}
/>
```

## Props

```ts
interface DialogModalProps {
  active: boolean;
  title: string;
  description: string;
  confirmText: string;
  closeText: string;
  onConfirm?: () => void;
  onDelete?: () => void;
  onClose: () => void;
}
```

### Behavior
- When `active` becomes false, the modal unmounts after 500ms to allow exit animation.
- If `onDelete` is provided, the confirm button calls `onDelete`; otherwise it calls `onConfirm`.
