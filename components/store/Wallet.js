import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletBalance: {},
};

const WalletState = createSlice({
  name: "Wallet",
  initialState,
  reducers: {
    setInitialState: () => ({ ...initialState }),
    setWalletBalance: (state, action) => {
      state.walletBalance = action.payload;
    },
  },
});
export const { setWalletBalance, setInitialState } = WalletState.actions;
export default WalletState.reducer;
