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
  Dashboard: () => ICONS.Dashboard,
  Income: () => ICONS.Income,
  Expense: () => ICONS.Expense,
  Subscription: () => ICONS.Subscription,
  Investment: () => ICONS.Investment,
  Help: () => ICONS.Help,
  Settings: () => ICONS.Settings,
  Logout: () => ICONS.Logout,
};

export const getIconComponent = (name: IconName) => {
  const applyMapper = ICON_MAPPER[name];
  return applyMapper ? applyMapper() : null;
};
