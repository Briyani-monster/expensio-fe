import NorthEastIcon from "./NorthEast.svg?react";
import SouthWest from "./SouthWest.svg?react";
import TrendingUp from "./treadingUp.svg?react"; // Corrected typo here
import Receipt from "./reciept.svg?react";
import Calendar from "./CalendarToday.svg?react";
import RepeatCalendar from "./RepeatCalendar.svg?react";
import Add from "./Add.svg?react";

interface IconComponents {
  NorthEast: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  SouthWest: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  TrendingUp: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Receipt: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Calendar: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  RepeatCalendar: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Add: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const iconComponents: IconComponents = {
  NorthEast: NorthEastIcon,
  SouthWest,
  TrendingUp,
  Receipt,
  Calendar,
  RepeatCalendar,
  Add,
};

export default iconComponents;
