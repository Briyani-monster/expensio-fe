// src/app/store.ts

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app";
export const store = configureStore({
  reducer: {
    app: appReducer,
    // Add other reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
