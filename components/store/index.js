import { configureStore } from "@reduxjs/toolkit";

import AccountState from "./Account";
import AuthState from "./Auth";
import WalletState from "./Wallet";
import CustomerState from "./Customer";

export default configureStore({
  reducer: {
    Auth: AuthState,
    Account: AccountState,
    Wallet: WalletState,
    Customer: CustomerState,
  },
});
