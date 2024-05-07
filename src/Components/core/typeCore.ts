// @ts-nocheck
import { ICON_MAPPER } from "./Icon/helper";
import { CHIP_TYPES, CHIP_VARIANT, ACTION_TYPES } from "./Chip/helper";
import { MouseEventHandler } from "react";
export type IconName = keyof typeof ICON_MAPPER;
export interface IconComponents {
  name: IconName;
  className?: string;
  onClick?: () => void;
}

export interface ChipProps {
  type?: (typeof CHIP_TYPES)[keyof typeof CHIP_TYPES];
  variant?: (typeof CHIP_VARIANT)[keyof typeof CHIP_VARIANT];
  actionType?: (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];
  title?: string;
  preIcon?: IconName;
  postIcon?: IconName;
  preIconProps?: IconComponents;
  postIconProps?: IconComponents;
  className?: string;
  selected?: boolean;
  handleSelection?: MouseEventHandler<HTMLDivElement>;
}
