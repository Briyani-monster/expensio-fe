// src/features/app/appSelectors.ts

import { RootState } from "..";

// Selector to get the loading state
export const selectIsLoading = (state: RootState) => state.app.isLoading;

// Selector to get the error state
export const selectError = (state: RootState) => state.app.error;
export const navigationSelector = (state: RootState) => state.app.navigation;
// Add more selectors here as needed
