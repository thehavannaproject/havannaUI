import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletBalance: {},
  tranHistory: []
};

const WalletState = createSlice({
  name: "Wallet",
  initialState,
  reducers: {
    setInitialState: () => ({ ...initialState }),
    setWalletBalance: (state, action) => {
      state.walletBalance = action.payload;
    },
    setTransactionHistory: (state, action) => {
      state.walletBalance = action.payload;
    },
  },
});
export const { setWalletBalance, setInitialState , setTransactionHistory} = WalletState.actions;
export default WalletState.reducer;
