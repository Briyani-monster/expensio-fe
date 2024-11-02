import { BOTTOM_NAV_KEY } from "./app";
import { ROUTES } from "./routes";

export const NAVIGATION = {
  topNav: [
    { name: "Dashboard", path: ROUTES.dashboard, icon: "Dashboard" },
    { name: "Income", path: ROUTES.income, icon: "Income" },
    { name: "Expense", path: ROUTES.expense, icon: "Expense" },
    { name: "Investments", path: ROUTES.investement, icon: "Subscription" },
    { name: "Subscription", path: ROUTES.subscription, icon: "Investment" },
  ],
  bottomNav: [
    { name: "help", key: BOTTOM_NAV_KEY.help, icon: "Help" },
    { name: "settings", path: ROUTES.settings, icon: "Settings" },
    { name: "logout", key: BOTTOM_NAV_KEY.logout, icon: "Logout" },
  ],
};
