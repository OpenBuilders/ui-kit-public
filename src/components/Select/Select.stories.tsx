import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

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
  //   args: {
  //     text: "Some title",
  //     description: "Some description",
  //   },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ width: "200px", padding: "16px" }}>
        <Select value="Hello" />
      </div>
    );
  },
};
