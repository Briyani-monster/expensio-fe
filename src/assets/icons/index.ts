// @ts-nocheck
import NorthEastIcon from "./NorthEast.svg?react";
import SouthWest from "./SouthWest.svg?react";
import TrendingUp from "./treadingUp.svg?react"; // Corrected typo here
import Receipt from "./reciept.svg?react";
import Calendar from "./CalendarToday.svg?react";
import RepeatCalendar from "./RepeatCalendar.svg?react";
import Add from "./Add.svg?react";
import Logo from "./logo.svg?react";
import Dashboard from "./dashboard.svg?react";
import Income from "./income.svg?react";
import Expense from "./expense.svg?react";
import Subscription from "./subscription.svg?react";
import Investment from "./investment.svg?react";
import Help from "./help.svg?react";
import Settings from "./settings.svg?react";
import Logout from "./logout.svg?react";
import Close from "./Close.svg?react";
import NoData from "./noData.svg?react";
import SortAsc from "./sortAsc.svg?react";
import SortDesc from "./sortDesc.svg?react";
import Category from "./Category.svg?react";
import Search from "./Search.svg?react";
import ArrowBack from "./ArrowBack.svg?react";
import DateFilter from "./DateFilter.svg?react";
import Columns from "./Columns.svg?react";

interface IconComponents {
  NorthEast: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  SouthWest: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  TrendingUp: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Receipt: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Calendar: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  RepeatCalendar: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Add: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Income: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Dashboard: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Expense: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Subscription: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Investment: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Help: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Settings: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Logout: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Close: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  NoData: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  SortAsc: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  SortDesc: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Category: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Search: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  ArrowBack: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  DateFilter: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Columns: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const iconComponents: IconComponents = {
  NorthEast: NorthEastIcon,
  SouthWest,
  TrendingUp,
  Receipt,
  Calendar,
  RepeatCalendar,
  Add,
  Logo,
  Dashboard,
  Income,
  Expense,
  Subscription,
  Investment,
  Help,
  Settings,
  Logout,
  Close,
  NoData,
  SortAsc,
  SortDesc,
  Category,
  Search,
  ArrowBack,
  DateFilter,
  Columns,
};

export default iconComponents;
