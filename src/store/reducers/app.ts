import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../utils/store";

const initialState: AppState = {
  isLoading: false,
  error: null,
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