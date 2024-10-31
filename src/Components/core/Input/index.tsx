import React, { useState } from "react";
import Icon from "../Icon";
import { InputProps } from "../typeCore";

function Input({
  label,
  value,
  onChange,
  type = "text",
  onFocus = () => {},
  onBlur = () => {},
  error = "",
  description,
  preIcon,
  preIconProps = {},
  postIcon,
  postIconProps = {},
  disabled,
}: InputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const getBorderColor = () => {
    if (disabled && error) return "border-danger-300";
    if (disabled) return "border-neutral-100";
    else if (error) return "border-danger-500";
    else if (isFocus) return "border-primary-500";
    else return "border-neutral-200";
  };
  return (
    <div className="flex flex-col relative">
      <div
        className={`flex flex-row items-center relative px-1  border-2  ${getBorderColor()} rounded-md `}
      >
        {postIcon ? (
          <Icon
            name={postIcon}
            className={`text-neutral-500 ${postIconProps?.className}`}
            {...postIconProps}
          />
        ) : null}
        <input
          placeholder={label}
          type={type}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={(e) => {
            setIsFocus(true);
            onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocus(false);
            onBlur(e);
          }}
          className="outline-none text-sm px-2 py-2"
        />
        {preIcon ? (
          <Icon
            name={preIcon}
            className={`text-neutral-500 ${preIconProps?.className}`}
            {...preIconProps}
          />
        ) : null}
      </div>
      <div className="absolute top-9">
        {error ? (
          <span
            className={`text-xs ${disabled ? "text-danger-300" : "text-danger-500"} `}
          >
            {error}
          </span>
        ) : null}
        {description ? (
          <span
            className={`text-xs ${disabled ? "text-neutral-300" : "text-neutral-500"}`}
          >
            {description}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default Input;
