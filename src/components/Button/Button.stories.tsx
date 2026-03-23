import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@components";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
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
    onClick: {
      action: "clicked",
    },
  },
  args: {
    children: "Button",
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

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => {
    return <Button {...args} />;
  },
};
