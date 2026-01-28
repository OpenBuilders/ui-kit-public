import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";
import { useState } from "storybook/internal/preview-api";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    // text: {
    //   control: { type: "text" },
    // },
    // description: {
    //   control: { type: "text" },
    // },
    // before: {
    //   control: { type: "object" },
    // },
    // after: {
    //   control: { type: "object" },
    // },
    // disabled: {
    //   control: { type: "boolean" },
    // },
  },
  args: {
    options: [
      {
        label: "Option 1",
        value: "option1",
        image: "https://picsum.photos/400/400",
      },
      {
        label: "Option 2",
        value: "option2",
        image: "https://picsum.photos/400/400",
      },
      {
        label: "Option 3",
        value: "option3",
        image: "https://picsum.photos/400/400",
      },
    ],
    value: "option1",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <div style={{ width: "200px", padding: "16px" }}>
        <Select {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};
