import { configureStore } from "@reduxjs/toolkit";

import AccountState from "./Account";
import AuthState from "./Auth";

export default configureStore({
  reducer: {
    Auth: AuthState,
    Account: AccountState,
  },
});
