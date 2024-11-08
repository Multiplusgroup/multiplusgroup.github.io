import displayReducer from "@/features/display/display.slice";
import emailsReducer from "@/features/emails/emails.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    display: displayReducer,
    emails: emailsReducer,
  },
});

export default store;
