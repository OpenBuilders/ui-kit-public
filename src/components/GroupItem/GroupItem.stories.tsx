import type { Meta, StoryObj } from "@storybook/react-vite";
import { GroupItem } from "./GroupItem";
import { Icon } from "@components";

const meta: Meta<typeof GroupItem> = {
  title: "Components/GroupItem",
  component: GroupItem,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    before: {
      control: { type: "object" },
    },
    after: {
      control: { type: "object" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ width: "100%" }}>
        <GroupItem
          {...args}
          before={
            <img
              src="https://placehold.co/30"
              style={{ borderRadius: "6px" }}
            />
          }
          after={<Icon name="chevron" size="16" />}
          text="Some title"
          description="Some description"
          onClick={() => {
            console.log("clicked");
          }}
        />
      </div>
    );
  },
};
