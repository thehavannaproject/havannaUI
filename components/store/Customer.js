import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolio: {},
};

const CustomerState = createSlice({
  name: "Wallet",
  initialState,
  reducers: {
    setInitialState: () => ({ ...initialState }),
    setPortfolio: (state, action) => {
      state.portfolio = action.payload;
    },
  },
});
export const { setPortfolio, setInitialState } = CustomerState.actions;
export default CustomerState.reducer;
