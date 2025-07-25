import type { Meta, StoryObj } from "@storybook/react-vite";
import { Group } from "./Group";

import { Icon, GroupItem } from "@components";

const meta: Meta<typeof Group> = {
  title: "Components/Group",
  component: Group,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object" },
    },
    header: {
      control: { type: "text" },
    },
    footer: {
      control: { type: "text" },
    },
    action: {
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ width: "100%" }}>
        <Group {...args}>
          <GroupItem
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
          <GroupItem
            before={
              <img
                src="https://placehold.co/30"
                style={{ borderRadius: "6px" }}
              />
            }
            after={<Icon name="chevron" size="16" />}
            text="Some title"
          />
          <GroupItem
            before={
              <img
                src="https://placehold.co/30"
                style={{ borderRadius: "6px" }}
              />
            }
            text="Some title"
            description="Some description"
          />
        </Group>
      </div>
    );
  },
};
