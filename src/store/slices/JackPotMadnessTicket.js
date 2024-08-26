import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    spinnerPopup:false
}

const cartSlice = createSlice({
  name: "JackPot",
  initialState,
  reducers: {
    setSpinnerPopup: (state, action) => {
  
      state.spinnerPopup = true;

      console.log(state.spinnerPopup)
    },
  },
});

export const { setSpinnerPopup } = cartSlice.actions;
export default cartSlice.reducer;
