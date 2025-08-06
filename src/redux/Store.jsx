import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/CustomerSlice";
import organiserReducer from "./slices/OrganiserSlice";
export const store = configureStore({
  reducer: {
    customer: customerReducer,
    organiser: organiserReducer,
  },
});
