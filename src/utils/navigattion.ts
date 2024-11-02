import { BOTTOM_NAV_KEY } from "./app";
import { ROUTES } from "./routes";
export const NAVIGATION__KEYBOARD_KEY = {
  dashboard: "D",
  income: "I",
  expense: "E",
  investement: "v",
  subscription: "S",
};
export const NAVIGATION = {
  topNav: [
    {
      name: "Dashboard",
      path: ROUTES.dashboard,
      icon: "Dashboard",
      keyboardKey: NAVIGATION__KEYBOARD_KEY.dashboard,
    },
    {
      name: "Income",
      path: ROUTES.income,
      icon: "Income",
      keyboardKey: NAVIGATION__KEYBOARD_KEY.income,
    },
    {
      name: "Expense",
      path: ROUTES.expense,
      icon: "Expense",
      keyboardKey: NAVIGATION__KEYBOARD_KEY.expense,
    },
    {
      name: "Investments",
      path: ROUTES.investement,
      icon: "Investment",
      keyboardKey: NAVIGATION__KEYBOARD_KEY.investement,
    },
    {
      name: "Subscription",
      path: ROUTES.subscription,
      icon: "Subscription",
      keyboardKey: NAVIGATION__KEYBOARD_KEY.subscription,
    },
  ],
  bottomNav: [
    { name: "help", key: BOTTOM_NAV_KEY.help, icon: "Help" },
    { name: "settings", path: ROUTES.settings, icon: "Settings" },
    { name: "logout", key: BOTTOM_NAV_KEY.logout, icon: "Logout" },
  ],
};
