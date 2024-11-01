import ICONS from "../../../assets/icons/index";
import { IconName } from "../typeCore";

export const ICON_MAPPER = {
  NorthEast: () => ICONS.NorthEast,
  SouthWest: () => ICONS.SouthWest,
  TrendingUp: () => ICONS.TrendingUp,
  Reciept: () => ICONS.Receipt,
  Calendar: () => ICONS.Calendar,
  RepeatCalendar: () => ICONS.RepeatCalendar,
  Add: () => ICONS.Add,
  Logo: () => ICONS.Logo,
};

export const getIconComponent = (name: IconName) => {
  const applyMapper = ICON_MAPPER[name];
  return applyMapper ? applyMapper() : null;
};
