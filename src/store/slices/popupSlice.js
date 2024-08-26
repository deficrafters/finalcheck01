import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  spinnerPopup: false,
  ticketPopup: false,
  socialPopup: false,
  walletPopup: {
    title: "",
    open: false,
    isSec: null
  },
  SelectedCountry: "",
  DepositHash: "",
  JackPotMadnessTickets: [],
  Data: {}
};

// Async thunk to handle the API call

export const getData = createAsyncThunk('cart/getData', async (_, thunkAPI) => {
  let getDta = localStorage.getItem("jwt");
  let parseIt = JSON.parse(getDta);

  try {
    const response = await axios.post("/api/Wallet_Balance_Data", {
      _id: parseIt.data._id
    });

    return response.data;
  } catch (error) {
    
    return thunkAPI.rejectWithValue({ message: "It Not Coming" });
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSpinnerPopup: (state, action) => {
      state.spinnerPopup = action.payload;
    },
    setTicketPopup: (state, action) => {
      state.ticketPopup = action.payload;
    },
    setSocialPopup: (state, action) => {
      state.socialPopup = action.payload;
    },
    setSelectedSocial: (state, action) => {
      state.socialSelected = action.payload;
    },
    setProfileUserData: (state, action) => {
      if (!state.profileUserData) {
        state.profileUserData = {};
      }
      state.profileUserData.Fname = action.payload.Fname;
      state.profileUserData.Lname = action.payload.Lname;
    },
    setWalletPopup: (state, action) => {
      state.walletPopup = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.SelectedCountry = action.payload;
    },
    setDepositHash: (state, action) => {
      state.DepositHash = action.payload;
    },
    add: (state, action) => {
      state.JackPotMadnessTickets.push(action.payload);
    },
    remove: (state, action) => {
      state.JackPotMadnessTickets = state.JackPotMadnessTickets.filter((item) => item.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.Data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.Data = action.payload;
      });
  }
});

export const {
  setSpinnerPopup,
  setTicketPopup,
  setSocialPopup,
  setSelectedSocial,
  setProfileUserData,
  setWalletPopup,
  setSelectedCountry,
  setDepositHash,
  add,
  remove
} = cartSlice.actions;

export default cartSlice.reducer;
