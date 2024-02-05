import React from "react";
import { IconComponents } from "../typeCore";
import { getIconComponent } from "./helper";

function Icon({ name, className, onClick }: IconComponents) {
  const IconComponent = getIconComponent(name);
  return IconComponent ? (
    <IconComponent className={className} onClick={onClick} />
  ) : null;
}

export default Icon;
