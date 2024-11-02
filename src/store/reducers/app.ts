import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../utils/store";
import { NAVIGATION } from "../../utils/navigattion";

const initialState: AppState = {
  isLoading: false,
  error: null,
  navigation: NAVIGATION,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    // Add other reducers here as needed
  },
});

export const { setLoading, setError } = appSlice.actions;
export default appSlice.reducer;
