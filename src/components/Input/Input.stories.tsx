import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

import { useState } from "storybook/internal/preview-api";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (value: string) => {
      setSearchValue(value);
    };

    return (
      <div style={{ width: "400px", padding: "16px" }}>
        <Input
          {...args}
          value={searchValue}
          onChange={handleChange}
          style={{ border: "1px solid black" }}
        />
      </div>
    );
  },
};
