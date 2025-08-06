import { createSlice } from "@reduxjs/toolkit";

let customerFromStorage = sessionStorage.getItem("customer")
  ? JSON.parse(sessionStorage.getItem("customer"))
  : null;


const initialState = {
  customer: customerFromStorage,
};

const CustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customer = action.payload;

      if (action.payload) {
        sessionStorage.setItem("customer", JSON.stringify(action.payload));
      } else {
        sessionStorage.removeItem("customer");
      }
    },
    logoutCustomer: (state) => {
      state.customer = null;
      sessionStorage.removeItem("customer");
    },
  },
});

export const { setCustomer, logoutCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;
