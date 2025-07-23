import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { icons } from "./icons";
import { IconName } from "./types";

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
          gap: "36px",
          borderBottom: "1px solid var(--color-foreground-primary)",
        }}
      >
        {Object.keys(icons).map((icon) => (
          <div
            key={icon}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <p>{icon}: </p>
            <Icon {...args} name={icon as IconName} />
          </div>
        ))}
      </div>
    );
  },
};
