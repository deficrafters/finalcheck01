import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

let myItems = []

const initialState = { Data: { sam: true } };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.Data = action.payload;
      console.log(state.Data);
      // toast.success("Done From Here");
      return state; // Return the updated state
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    JackpotBundelTicket(state, action) {
      state.Data = action.payload;
      console.log(state.Data);
      // toast.success("Done From Here");
      return state; // Return the updated state
    },
  },
});


export const { add, remove, JackpotBundelTicket } = cartSlice.actions;
export default cartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";

// let myItems = []

// const initialState = {Data:{sam:true}};

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     add(state, action) {
//       state.Data = action.payload;


//       console.log(state.Data)
//       toast.success("Done From Here")

//       return state; // Return the updated state
//     },
//     remove(state, action) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });


// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;
