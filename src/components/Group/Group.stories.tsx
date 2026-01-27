import type { Meta, StoryObj } from "@storybook/react-vite";
import { Group } from "./Group";

import { Icon, GroupItem, Toggle, Text, Input } from "@components";
import { useState } from "storybook/internal/preview-api";

const meta: Meta<typeof Group> = {
  title: "Components/Group",
  component: Group,
  tags: ["autodocs"],
  argTypes: {
    // children: {
    //   control: { type: "object" },
    // },
    // header: {
    //   control: { type: "text" },
    // },
    // footer: {
    //   control: { type: "text" },
    // },
    // action: {
    //   control: { type: "object" },
    // },
  },
  args: {
    header: "Some header",
    footer: "Some footer",
    action: (
      <Text
        type="caption1"
        color="accent"
        uppercase
        onClick={() => {
          console.log("clicked");
        }}
      >
        Some action
      </Text>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (value: string) => setSearchValue(value);

    return (
      <div style={{ width: "100%", padding: "16px" }}>
        <Group {...args}>
          <GroupItem
            before={
              <img
                src="https://placehold.co/30"
                style={{ borderRadius: "6px" }}
              />
            }
            after={
              <Icon
                name="chevron"
                size="16"
                color="tertiary"
                colorType="stroke"
              />
            }
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
            after={
              <Icon
                name="chevron"
                size="16"
                color="tertiary"
                colorType="stroke"
              />
            }
            text="Some title"
          />
          <GroupItem
            before={
              <img
                src="https://placehold.co/30"
                style={{ borderRadius: "6px" }}
              />
            }
            after={
              <Toggle
                isEnabled={isEnabled}
                onChange={(value) => setIsEnabled(value)}
              />
            }
            text="Some title"
            description="Some description"
          />
          <GroupItem
            before={
              <img
                src="https://placehold.co/30"
                style={{ borderRadius: "6px" }}
              />
            }
            after={
              <Input
                value={searchValue}
                onChange={handleChange}
                placeholder="Some value"
                style={{
                  padding: "4px 10px",
                  fontSize: "14px",
                }}
              />
            }
            text="Some title"
            onClick={() => {
              console.log("clicked");
            }}
          />
        </Group>
      </div>
    );
  },
};
