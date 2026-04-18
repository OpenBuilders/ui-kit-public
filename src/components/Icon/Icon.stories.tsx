import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { icons } from "./icons";
import { IconName } from "./types";
import { Text } from "@components";

const colorTypeStrokeIcons = ["check", "chevron"];

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "text" },
      defaultValue: "24px",
    },
    height: {
      control: { type: "text" },
      defaultValue: "24px",
    },
    name: {
      control: false,
      table: { disable: true },
    },
    color: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "tertiary",
        "accent",
        "destructive",
        "warning",
        "success",
      ],
    },
    renderAs: {
      control: { type: "select" },
      options: ["image", "svg"],
    },
    borderRadius: {
      control: { type: "range", min: 0, max: 60, step: 1 },
    },
  },
  args: {
    width: "24px",
    height: "24px",
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconsList: Story = {
  argTypes: {
    colorType: {
      control: false,
      table: { disable: true },
    },
  },
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
        {Object.keys(icons).map((icon) => {
          const colorType = colorTypeStrokeIcons.includes(icon)
            ? "stroke"
            : "fill";
          return (
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
              <Icon {...args} colorType={colorType} name={icon as IconName} />
            </div>
          );
        })}
      </div>
    );
  },
};

const CustomIconComponent = (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
  >
    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
  </svg>
);

export const CustomIcon: Story = {
  argTypes: {
    colorType: {
      control: { type: "select" },
      options: ["stroke", "fill", "both"],
    },
    customIcon: {
      control: {
        type: "object",
      },
    },
  },
  args: {
    customIcon: CustomIconComponent,
    width: "24px",
    height: "auto",
  },
  render: (args) => {
    return <Icon {...args} />;
  },
};

export const CustomIconInlineSvg: Story = {
  argTypes: {
    renderAs: {
      control: false,
      table: { disable: true },
    },
    customIcon: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    customIcon: "",
    renderAs: "svg",
    color: "accent",
    colorType: "fill",
    width: "24px",
    height: "24px",
  },
  render: (args) => {
    return <Icon {...args} />;
  },
};
