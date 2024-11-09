export const TABLE_ID = {
  NAME: "name",
  AMOUNT: "amount",
  RECEIVED_DATE: "receivedDate",
  CATEGORY: "category",
  NOTES: "notes",
  ACTIONS: "actions",
};

export const TABLE_COMPONENTS = {
  [TABLE_ID.NAME]: "Name",
  [TABLE_ID.AMOUNT]: "Amount",
  [TABLE_ID.RECEIVED_DATE]: "Received date",
  [TABLE_ID.CATEGORY]: "Category",
  [TABLE_ID.NOTES]: "Notes",
  [TABLE_ID.ACTIONS]: "Actions",
};
export const TABLE_ACTIONS = {
  INCOME: "Income",
};
export const MASTER_TABLE_HEADERS = {
  EXPENSE: [
    {
      id: TABLE_ID.NAME,
      label: "Name",
      sortable: true,
    },
    {
      id: TABLE_ID.AMOUNT,
      label: "Amount",
      sortable: true,
    },
    {
      id: TABLE_ID.RECEIVED_DATE,
      label: "Received date",
      sortable: true,
    },
    {
      id: TABLE_ID.CATEGORY,
      label: "Category",
      sortable: true,
    },
    {
      id: TABLE_ID.NOTES,
      label: "Notes",
    },
    {
      id: TABLE_ID.ACTIONS,
      label: "Actions",
    },
  ],
};
