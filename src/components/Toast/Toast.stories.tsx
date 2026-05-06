import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastProvider, ToastType, useToast } from "./Toast";

type ToastDemoArgs = {
  message: string;
  duration: number;
  type?: ToastType;
  bottomOffset: number;
};

const ToastDemo = ({ message, duration, type }: ToastDemoArgs) => {
  const { showToast } = useToast();

  return (
    <div style={{ padding: "16px" }}>
      <button
        type="button"
        onClick={() => showToast(message, { duration, type })}
        style={{
          padding: "10px 14px",
          borderRadius: "10px",
          border: "1px solid var(--color-border-separator)",
          background: "var(--color-background-section)",
          color: "var(--color-foreground-primary)",
          cursor: "pointer",
        }}
      >
        Show toast
      </button>
    </div>
  );
};

const meta = {
  title: "Components/Toast",
  component: ToastDemo,
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: { type: "text" },
      defaultValue: "Saved successfully",
    },
    duration: {
      control: { type: "number" },
      defaultValue: 3000,
    },
    type: {
      control: { type: "radio" },
      options: ["success", "error", "info"],
      defaultValue: "success",
    },
    bottomOffset: {
      control: { type: "number" },
      defaultValue: 24,
    },
  },
  args: {
    message: "Saved successfully",
    duration: 3000,
    type: "success",
    bottomOffset: 24,
  },
} satisfies Meta<ToastDemoArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ToastProvider bottomOffset={args.bottomOffset}>
      <ToastDemo
        message={args.message}
        duration={args.duration}
        type={args.type}
        bottomOffset={args.bottomOffset}
      />
    </ToastProvider>
  ),
};
