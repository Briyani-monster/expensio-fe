export const BOTTOM_NAV_KEY = {
  help: "help",
  logout: "logout",
};

export const ANIMATION_TYPE = {
  INCREMENT: "inc",
  DECREMENT: "dec",
};
export const CARD_UI_PAGES_KEYS = {
  AMOUNT: "amount",
  TOTAL: "total",
};
export const CARDS_UI_OF_DIFFERENT_PAGES = {
  income: [
    {
      title: "Total Income",
      key: CARD_UI_PAGES_KEYS.TOTAL,
    },
    {
      title: "Total Amount",
      key: CARD_UI_PAGES_KEYS.AMOUNT,
    },
  ],
};
export enum DateRangeOption {
  All = "All",
  ThisWeek = "This Week",
  ThisMonth = "This Month",
  PastWeek = "Past Week",
  PastMonth = "Past Month",
  Custom = "Custom",
}
