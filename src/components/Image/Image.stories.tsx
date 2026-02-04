import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "text" },
      description: "Width: string (px, %, rem, etc.)",
    },
    height: {
      control: { type: "text" },
      description: "Height: string (px, %, rem, etc.)",
    },
    aspectRatio: {
      control: { type: "text" },
      description: "Aspect ratio: string (1, 16/9, etc.)",
    },
    borderRadius: {
      control: { type: "text" },
      description: "Border radius: string (px, %, rem, etc.)",
    },
    objectFit: {
      control: { type: "select" },
      options: ["cover", "contain", "fill", "none"],
      description: "Object fit: cover, contain, fill, none",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const placeholderUrl = "https://picsum.photos/400/400";

export const Default: Story = {
  args: {
    src: placeholderUrl,
    alt: "Example image",
    aspectRatio: "1",
    objectFit: "cover",
    width: "200px",
  },
  render: (args) => <Image {...args} />,
};

export const Fallback: Story = {
  args: {
    src: "",
    alt: "Example image",
    fallback: "No Image",
    aspectRatio: "1",
    objectFit: "cover",
    borderRadius: "50%",
    width: "100px",
  },
  render: (args) => <Image {...args} />,
};
