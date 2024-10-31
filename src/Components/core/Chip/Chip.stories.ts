import { Meta, StoryObj } from "@storybook/react";
import Chip from ".";
import { ACTION_TYPES, CHIP_TYPES, CHIP_VARIANT } from "./helper";
import "../../../assets/styles/index.scss";
import { ICON_MAPPER } from "../Icon/helper";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "core/Chip",
  component: Chip,
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
    type: { control: "select", options: Object.values(CHIP_TYPES) },
    actionType: { control: "select", options: Object.values(ACTION_TYPES) },
    variant: { control: "select", options: Object.values(CHIP_VARIANT) },
    selected: { control: "boolean" },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actionType: ACTION_TYPES.SELECTED,
    title: "demo",
    type: CHIP_TYPES.DANGER,
    variant: CHIP_VARIANT.SECONDARY,
    className: "",
    selected: false,
    handleSelection: action("on-click"),
  },
};
