import React, { FunctionComponent } from "react";
import { ACTION_TYPES, CHIP_TYPES, CHIP_VARIANT } from "./helper";
import Icon from "../Icon";
import { ChipProps } from "../typeCore";
/**
 * Chip component represents a small, interactive element typically used for selection or action.
 * @param {ChipProps} props - The props object containing various properties for configuring the chip.
 * @param {CHIP_TYPES} props.type - The type of chip. Default is CHIP_TYPES.DANGER.
 * @param {CHIP_VARIANT} props.variant - The variant of the chip. Default is CHIP_VARIANT.SECONDARY.
 * @param {ACTION_TYPES} props.actionType - The action type of the chip. Default is ACTION_TYPES.SELECTED.
 * @param {string} props.title - The title or label displayed within the chip. Default is "demo".
 * @param {string} [props.preIcon] - The name of the icon to be displayed before the title. Default is "Add".
 * @param {string} [props.postIcon] - The name of the icon to be displayed after the title. Default is "TrendingUp".
 * @param {object} [props.preIconProps] - Additional props to be passed to the pre-icon component.
 * @param {object} [props.postIconProps] - Additional props to be passed to the post-icon component.
 * @param {string} [props.className] - Additional CSS classes to be applied to the chip.
 * @param {boolean} [props.selected] - Boolean indicating whether the chip is selected or not.
 * @param {Function} [props.handleSelection] - Callback function to handle chip selection.
 * @returns {JSX.Element} JSX representation of the Chip component.
 */
const Chip: FunctionComponent<ChipProps> = ({
  type,
  variant,
  actionType,
  title,
  preIcon,
  postIcon,
  preIconProps,
  postIconProps,
  className,
  selected,
  handleSelection,
}: ChipProps) => {
  const showIcon = (icon = "") =>
    actionType === ACTION_TYPES.SELECTED && selected
      ? icon
      : actionType === ACTION_TYPES.STATIC
        ? icon
        : null;
  return (
    <div
      onClick={handleSelection}
      className={`chip-${actionType} chip-${type}__${variant} ${className}`}
    >
      {showIcon(preIcon) ? (
        <Icon
          name={preIcon}
          {...preIconProps}
          className={`icon ${preIconProps?.className || ""}`}
        />
      ) : null}
      <span>{title}</span>
      {showIcon(postIcon) ? (
        <Icon
          name={postIcon}
          {...postIconProps}
          className={`icon ${preIconProps?.className || ""}`}
        />
      ) : null}
    </div>
  );
};

export default Chip;

Chip.defaultProps = {
  preIcon: undefined,
  postIcon: undefined,
  actionType: ACTION_TYPES.SELECTED,
  title: "demo",
  type: CHIP_TYPES.DANGER,
  variant: CHIP_VARIANT.SECONDARY,
  className: "",
};
