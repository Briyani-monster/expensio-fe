import { Meta, StoryObj } from "@storybook/react";
import Icon from ".";

const meta = {
  title: "core/Icons",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "NorthEast",
    className: "text-neutral-500",
  },
};
