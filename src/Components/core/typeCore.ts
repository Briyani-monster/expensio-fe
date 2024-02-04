import { ICON_MAPPER } from "./Icon/helper";

export type IconName = keyof typeof ICON_MAPPER;

export interface IconComponents {
  name: IconName;
  className?: string;
  onClick?: () => void;
}
