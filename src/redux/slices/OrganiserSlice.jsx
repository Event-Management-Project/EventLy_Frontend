import { createSlice } from "@reduxjs/toolkit";

const organiserFromStorage = sessionStorage.getItem("organiser")
  ? JSON.parse(sessionStorage.getItem("organiser"))
  : null;

const initialState = {
  organiser: organiserFromStorage,
};
const organiserSlice = createSlice({
  name: "organiser",
  initialState,
  reducers: {
    setOrganiser: (state, action) => {
      state.organiser = action.payload;
      sessionStorage.setItem("organiser", JSON.stringify(action.payload));
    },
    clearOrganiser: (state) => {
      state.organiser = null;
      sessionStorage.removeItem("organiser");
    },
  },
});

export const { setOrganiser, clearOrganiser } = organiserSlice.actions;
export default organiserSlice.reducer;
