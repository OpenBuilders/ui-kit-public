import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

import { useState } from "storybook/internal/preview-api";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    const handleChange = (nextValue: string) => {
      setValue(nextValue);
    };

    return (
      <div style={{ width: "400px", padding: "16px" }}>
        <Textarea
          {...args}
          value={value}
          onChange={handleChange}
          rows={4}
          style={{ border: "1px solid black", width: "100%" }}
        />
      </div>
    );
  },
};
