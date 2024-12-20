import React, { useEffect } from "react";
import Icon from "../core/Icon";
import { useSelector } from "react-redux";
import { navigationSelector } from "../../store/selectors/app";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { NAVIGATION__KEYBOARD_KEY } from "../../utils/navigattion";
import Tooltip from "../core/Tooltip";

type Props = {};

const Navbar = (props: Props) => {
  const navigation = useSelector(navigationSelector);
  const navigationHook = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(event);
      if (event.target.id === "search-bar") return;
      switch (event.key.toLowerCase()) {
        case NAVIGATION__KEYBOARD_KEY.dashboard.toLowerCase():
          navigationHook(ROUTES.dashboard);
          break;
        case NAVIGATION__KEYBOARD_KEY.income.toLowerCase():
          navigationHook(ROUTES.income);
          break;
        case NAVIGATION__KEYBOARD_KEY.expense.toLowerCase():
          navigationHook(ROUTES.expense);
          break;
        case NAVIGATION__KEYBOARD_KEY.subscription.toLowerCase():
          navigationHook(ROUTES.subscription);
          break;
        case NAVIGATION__KEYBOARD_KEY.investement.toLowerCase():
          navigationHook(ROUTES.investement);
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="bg-slate-900 px-3 pb-5 h-full">
      <div
        onClick={() => navigationHook(ROUTES.dashboard)}
        className="border-b flex items-center justify-center cursor-pointer border-slate-600 pt-5 pb-3"
      >
        <Icon className="w-6  text-white" name="Logo" />
      </div>
      <div className="flex flex-col  justify-between h-full">
        <div className="py-3 flex flex-col gap-3">
          {navigation.topNav.map((item, index) => (
            <div
              id={`tooltip-${index}-${item.name.toLowerCase()}`}
              className={`${location.pathname === item.path ? "bg-slate-700" : "hover:bg-slate-800"}  cursor-pointer p-2 rounded-lg`}
              onClick={() => navigationHook(item.path)}
            >
              <Icon
                key={item.name}
                name={item.icon}
                className="w-5 text-white "
              />
              <Tooltip
                id={`#tooltip-${index}-${item.name.toLowerCase()}`}
                text={`${item.name} (${item.keyboardKey})`}
                placement="right"
              />
            </div>
          ))}
        </div>
        <div className="pb-12 flex flex-col gap-3 ">
          {navigation.bottomNav.map((item) => (
            <div
              className={`${location.pathname === item.path ? "bg-slate-800" : ""} hover:bg-slate-800 cursor-pointer p-2 rounded-lg`}
              onClick={item.path ? () => navigationHook(item.path) : () => {}}
            >
              <Icon
                key={item.name}
                name={item.icon}
                className="w-5 text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
