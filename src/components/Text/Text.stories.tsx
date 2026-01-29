import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  // parameters: {
  //   layout: "centered",
  // },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: [
        "hero",
        "largeTitle",
        "title1",
        "title2",
        "title3",
        "title4",
        "body",
        "callout",
        "subheadline1",
        "subheadline2",
        "footnote",
        "caption1",
        "caption2",
      ],
    },
    weight: {
      control: { type: "radio" },
      options: ["light", "regular", "medium", "bold"],
    },
    align: {
      control: { type: "radio" },
      options: ["left", "center", "right"],
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "tertiary", "accent"],
    },
    uppercase: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Some text",
    type: "body",
    weight: "regular",
  },
};
