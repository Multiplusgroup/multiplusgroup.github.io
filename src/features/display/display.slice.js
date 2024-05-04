import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerHeight: 0,
  navBarHeight: 0,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    getNavHeight(state, action) {
      state.navBarHeight = action.payload;
    },
    getHeaderHeight(state, action) {
      state.headerHeight = action.payload;
    },
  },
});

export default displaySlice.reducer;

export const { getHeaderHeight, getNavHeight } = displaySlice.actions;
