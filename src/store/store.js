import { configureStore } from "@reduxjs/toolkit";
import toasterReducer from "@store/slices/toaster.slice";

const store = configureStore({
  reducer: {
    toaster: toasterReducer,
  },
});

export default store;
