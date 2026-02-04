import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./Toggle";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    isEnabled: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    onChange: {
      action: "onChange",
    },
  },
  args: {
    isEnabled: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isEnabled, setIsEnabled] = useState(args.isEnabled);
    return (
      <div style={{ padding: "16px" }}>
        <Toggle
          {...args}
          isEnabled={isEnabled}
          onChange={(value) => {
            setIsEnabled(value);
          }}
        />
      </div>
    );
  },
};
