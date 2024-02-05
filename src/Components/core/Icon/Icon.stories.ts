import { Meta, StoryObj } from "@storybook/react";
import Icon from ".";

const meta = {
  title: "Icons",
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
  },
};
