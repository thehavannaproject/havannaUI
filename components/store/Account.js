import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
  nextOfKin: {},
  accountTier: {},
  security: {},
};

const AccountState = createSlice({
  name: "Account",
  initialState,
  reducers: {
    setInitialState: () => ({ ...initialState }),
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setNextOfKin: (state, action) => {
      state.nextOfKin = action.payload;
    },
    setAccountTier: (state, action) => {
      state.accountTier = action.payload;
    },
    setSecurity: (state, action) => {
      state.security = action.payload;
    },
  },
});
export const { setAccountTier, setProfile, setNextOfKin, setSecurity, setInitialState } = AccountState.actions;
export default AccountState.reducer;
