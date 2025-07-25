import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { icons } from "./icons";
import { IconName } from "./types";
import { Text } from "@components";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "range", min: 11, max: 60, step: 1 },
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "accent",
        "destructive",
        "warning",
        "success",
      ],
    },
    name: {
      control: { type: "select" },
      options: Object.keys(icons),
    },
    borderRadius: {
      control: { type: "range", min: 0, max: 60, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconsList: Story = {
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "flex-start",
            borderBottom: "1px solid var(--color-foreground-primary)",
            padding: "16px",
          }}
        >
          <div style={{ width: "150px" }}>
            <Text type="title4" weight="medium">
              Icon Name
            </Text>
          </div>
          <Text type="title4" weight="medium">
            Icon View
          </Text>
        </div>
        {Object.keys(icons).map((icon) => (
          <div
            key={icon}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "flex-start",
              borderBottom: "1px solid var(--color-foreground-primary)",
              padding: "16px",
            }}
          >
            <div style={{ width: "150px" }}>
              <Text type="body">{icon}</Text>
            </div>
            <Icon {...args} name={icon as IconName} />
          </div>
        ))}
      </div>
    );
  },
};
