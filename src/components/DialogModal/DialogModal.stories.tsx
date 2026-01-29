import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Button, DialogModal } from "@components";

const meta: Meta<typeof DialogModal> = {
  title: "Components/DialogModal",
  component: DialogModal,
  tags: ["autodocs"],
  argTypes: {
    active: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    confirmText: {
      control: { type: "text" },
    },
    closeText: {
      control: { type: "text" },
    },
    onClose: {
      action: "onClose",
    },
    onConfirm: {
      action: "onConfirm",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  args: {
    active: false,
    title: "Are you sure?",
    description: "This action cannot be undone.",
    confirmText: "Confirm",
    closeText: "Cancel",
    onConfirm: () => alert("Confirmed"),
  },
  render: (args) => {
    const [isActive, setIsActive] = useState(args.active);

    const handleClose = () => {
      args.onClose?.();
      setIsActive(false);
    };

    const handleConfirm = () => {
      args.onConfirm?.();
      setIsActive(false);
    };

    return (
      <div style={{ padding: "24px" }}>
        <Button text="Open dialog" onClick={() => setIsActive(true)} />
        <DialogModal
          {...args}
          active={isActive}
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
      </div>
    );
  },
};

export const Delete: Story = {
  args: {
    active: false,
    title: "Are you sure you want to delete this item?",
    description: "This action cannot be undone.",
    confirmText: "Delete",
    closeText: "Cancel",
    onDelete: () => alert("Deleted"),
  },
  render: (args) => {
    const [isActive, setIsActive] = useState(args.active);

    const handleClose = () => {
      args.onClose?.();
      setIsActive(false);
    };

    const handleDelete = () => {
      args.onDelete?.();
      setIsActive(false);
    };

    return (
      <div style={{ padding: "24px" }}>
        <Button text="Open dialog" onClick={() => setIsActive(true)} />
        <DialogModal
          {...args}
          active={isActive}
          onClose={handleClose}
          onDelete={handleDelete}
        />
      </div>
    );
  },
};
