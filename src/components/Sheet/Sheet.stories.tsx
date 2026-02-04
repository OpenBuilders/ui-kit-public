import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";

import { Button } from "@components";
import { Sheet } from "./Sheet";

const SHEETS = {
  BASIC: () => (
    <div style={{ padding: "16px" }}>
      <p style={{ margin: 0 }}>Tap outside or the cross to close</p>
    </div>
  ),
  SECOND: () => (
    <div style={{ padding: "16px" }}>
      <p style={{ margin: 0 }}>Second sheet content</p>
    </div>
  ),
};

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {
    activeSheet: {
      control: { type: "select" },
      options: [null, ...Object.keys(SHEETS)],
    },
    opened: {
      control: { type: "boolean" },
    },
    onClose: {
      action: "onClose",
    },
    sheets: { control: false },
    transitionDuration: { control: false },
  },
  args: {
    opened: false,
    activeSheet: "BASIC",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.opened);
    const [activeSheet, setActiveSheet] = useState<string | null>(
      args.activeSheet ?? null
    );

    useEffect(() => {
      setIsOpen(args.opened);
    }, [args.opened]);

    useEffect(() => {
      setActiveSheet(args.activeSheet ?? null);
    }, [args.activeSheet]);

    const handleClose = () => {
      args.onClose?.();
      setIsOpen(false);
    };

    return (
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button
            text="Open basic"
            onClick={() => {
              setActiveSheet("BASIC");
              setIsOpen(true);
            }}
          />
          <Button
            text="Open second"
            onClick={() => {
              setActiveSheet("SECOND");
              setIsOpen(true);
            }}
          />
        </div>
        <Sheet
          {...args}
          sheets={SHEETS}
          activeSheet={activeSheet}
          opened={isOpen}
          onClose={handleClose}
        />
      </div>
    );
  },
};
