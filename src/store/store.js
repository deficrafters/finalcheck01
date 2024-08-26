import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import popupSlice from "./slices/popupSlice";
import JackPotMadnessTicket from "./slices/JackPotMadnessTicket";
import Above_Card_Data from "./slices/Above_Card_Data";
import thunk from 'redux-thunk';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    popup: popupSlice,
    JackPot:JackPotMadnessTicket,
    AboveData:Above_Card_Data,
  },
  // middleware: [thunk]
  
});

export default store;
