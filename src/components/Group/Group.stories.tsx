import type { Meta, StoryObj } from "@storybook/react-vite";
import { Group } from "./Group";

import { Icon, GroupItem, Toggle, Text, Input, Image } from "@components";
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

    const ImageComponent = () => (
      <Image
        src="https://picsum.photos/400/400"
        borderRadius="6px"
        width="30px"
        aspectRatio="1"
      />
    );

    return (
      <div style={{ width: "100%", padding: "16px" }}>
        <Group {...args}>
          <GroupItem
            before={<ImageComponent />}
            chevron
            text="Some title"
            description="Some description"
            onClick={() => {
              console.log("clicked");
            }}
          />
          <GroupItem before={<ImageComponent />} chevron text="Some title" />
          <GroupItem
            before={<ImageComponent />}
            chevron
            text="Some title"
            description="Some description"
          />
          <GroupItem
            before={<ImageComponent />}
            chevron
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
