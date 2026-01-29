# Toast

Toast notifications with provider and hook.

## Usage

```tsx
import { ToastProvider, useToast } from "@components";

const App = () => (
  <ToastProvider>
    <Page />
  </ToastProvider>
);

const Page = () => {
  const { showToast } = useToast();
  return (
    <button onClick={() => showToast("Saved", { type: "success" })}>
      Show
    </button>
  );
};
```

## Types

```ts
type ToastType = "success" | "error" | "info";

type ToastOptions = {
  duration?: number; // ms, default 3000
  type?: ToastType;
};
```

### Behavior
- Only one toast is visible at a time; the next one queues and shows after the current closes.
- Toasts auto-hide after `duration`.
