import { Meta, StoryObj } from "@storybook/react";
import Input from ".";
import { ICON_MAPPER } from "../Icon/helper";
const meta = {
  title: "core/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    preIcon: {
      control: "select",
      options: [null, ...Object.keys(ICON_MAPPER)],
    },
    postIcon: {
      control: "select",
      options: [null, Object.keys(ICON_MAPPER)],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Description",
    value: "",
    onChange: () => {},
    type: "text",
    onFocus: () => {},
    onBlur: () => {},
    error: "",
    description: "",
    preIconProps: {},
    postIconProps: {},
  },
};
