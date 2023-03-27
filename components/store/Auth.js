import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const AuthState = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setToInitialState: () => ({ ...initialState }),
    setCurrentUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});
export const { setToInitialState, setCurrentUser } = AuthState.actions;
export default AuthState.reducer;
