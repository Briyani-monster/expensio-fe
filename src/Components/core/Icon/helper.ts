import ICONS from "../../../assets/icons/index";
import Search from "../Filters/Search";
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
  Close: () => ICONS.Close,
  NoData: () => ICONS.NoData,
  SortDesc: () => ICONS.SortDesc,
  SortAsc: () => ICONS.SortAsc,
  Category: () => ICONS.Category,
  Search: () => ICONS.Search,
  ArrowBack: () => ICONS.ArrowBack,
  DateFilter: () => ICONS.DateFilter,
  Columns: () => ICONS.Columns,
};

export const getIconComponent = (name: IconName) => {
  const applyMapper = ICON_MAPPER[name];
  return applyMapper ? applyMapper() : null;
};
