import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@components";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: "Button",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    icon: {
      control: false,
      table: { disable: true },
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    text: "Button",
    type: "primary",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
};
