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
export interface restIconProps {
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
  preIconProps?: restIconProps;
  postIconProps?: restIconProps;
  className?: string;
  selected?: boolean;
  handleSelection?: MouseEventHandler<HTMLDivElement>;
}

// Define the props for the Input component
export interface InputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  description?: string;
  preIcon?: IconName;
  preIconProps?: restIconProps;
  postIcon?: IconName;
  postIconProps?: restIconProps;
  disabled?: boolean;
}

export interface AnimationTypeProps {
  INCREMENT: string;
  DECREMENT: string;
}
