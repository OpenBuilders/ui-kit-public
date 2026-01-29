import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "text" },
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent"],
    },
  },
  args: {
    size: "16px",
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: "16px" }}>
      <Spinner {...args} />
    </div>
  ),
};
