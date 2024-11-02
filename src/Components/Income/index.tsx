import React, { useMemo } from "react";
import Page from "../core/Page";
import Card from "../core/Card";
import {
  CARD_UI_PAGES_KEYS,
  CARDS_UI_OF_DIFFERENT_PAGES,
} from "../../utils/app";
import { amountToCurrency, formatNumber } from "../../utils/common";
import { useSelector } from "react-redux";
import { currencySelector } from "../../store/selectors/app";

type Props = {};

const Income = (props: Props) => {
  const currency = useSelector(currencySelector);
  const cardUI = useMemo(
    () =>
      CARDS_UI_OF_DIFFERENT_PAGES.income.map((item) => ({ ...item, value: 0 })),
    [],
  );
  return (
    <Page name="Income">
      <div className="flex flex-col gap-4">
        <h3>Summary</h3>
        <div className="flex flex-row gap-4">
          {cardUI?.map((item) => (
            <Card
              key={`${item?.title.split(" ")?.join("-")}`}
              name={item?.title}
            >
              {item?.key === CARD_UI_PAGES_KEYS.TOTAL
                ? formatNumber(item.value)
                : amountToCurrency(item.value, currency)}
            </Card>
          ))}
        </div>
        <div></div>
      </div>
    </Page>
  );
};

export default Income;
