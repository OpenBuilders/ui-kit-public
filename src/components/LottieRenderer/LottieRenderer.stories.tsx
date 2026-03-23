import type { Meta, StoryObj } from "@storybook/react-vite";

import { LottieRenderer } from "./LottieRenderer";

const meta: Meta<typeof LottieRenderer> = {
  title: "Components/LottieRenderer",
  component: LottieRenderer,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    autoplay: {
      control: { type: "boolean" },
    },
    loop: {
      control: { type: "boolean" },
    },
    speed: {
      control: { type: "number" },
    },
  },
  args: {
    src: "",
    width: "220px",
    height: "220px",
    autoplay: true,
    loop: true,
    speed: 1,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 24 }}>
      <LottieRenderer {...args} />
    </div>
  ),
};
