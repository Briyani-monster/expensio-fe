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
};

export default iconComponents;
