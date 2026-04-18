import type { Meta, StoryObj } from "@storybook/react-vite";
import { GroupItem } from "./GroupItem";
import { Image } from "@components";

const meta: Meta<typeof GroupItem> = {
  title: "Components/GroupItem",
  component: GroupItem,
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
    text: "Some title",
    description: "Some description",
    before: (
      <Image
        src="https://picsum.photos/400/400"
        borderRadius="6px"
        width="30px"
        aspectRatio="1"
      />
    ),
    chevron: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ padding: "16px" }}>
        <GroupItem {...args} />
      </div>
    );
  },
};
