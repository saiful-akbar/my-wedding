import { createSlice } from "@reduxjs/toolkit";

// State awal
const initialState = {
  appearance: {
    mode: "light",
    isDark: false,
  },
};

// Slice
const settingsSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    changeAppearance: (state, action) => {
      const { mode, isDark } = action.payload;
      state.appearance = {
        mode,
        isDark,
      };
    },
  },
});

// Actions
export const { changeAppearance } = settingsSlice.actions;

// Reducer
export default settingsSlice.reducer;
