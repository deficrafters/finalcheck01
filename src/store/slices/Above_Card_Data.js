import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
    Data: {}
}

const cartSlice = createSlice({
    name: "AboveData",
    initialState,
    reducers: {
        setSpinnerPopup: (state, action) => {

            let getDta = localStorage.getItem("jwt");
            let parseIt = JSON.parse(getDta);

            try {
                axios
                    .post("/api/Wallet_Balance_Data", {
                        _id: parseIt.data._id
                    })
                    .then((acc) => {
                        console.log("from router ======================")
                        console.log(acc.data)
                        console.log("from router ======================")

                        state.Data = acc.data
                        //   setGet_Above_Card_Data(acc.data)
                    })
                    .catch((err) => {

                    });
            } catch (error) {

            }


            //   state.spinnerPopup = true;

            //   console.log(state.spinnerPopup)
        },
    },
});

export const { setSpinnerPopup } = cartSlice.actions;
export default cartSlice.reducer;
