import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  severity: "success",
};

const toasterSlice = createSlice({
  initialState,
  name: "toaster",
  reducers: {
    setMessage: (state, action) => {
      const { message, severity } = action.payload;
      state.message = message;
      state.severity = severity;
    },
  },
});

const { setMessage } = toasterSlice.actions;

export { setMessage };
const toasterReducer = toasterSlice.reducer;

export default toasterReducer;
