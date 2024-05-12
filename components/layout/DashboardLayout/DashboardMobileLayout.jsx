import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthService } from "@components/shared/api/auth";
import { setWalletBalance } from "@components/store/Wallet";
import { getCustomerPortfolio, getCustomerProfile, getCustomerWallet } from "@components/shared/api";
import { setPortfolio } from "@components/store/Customer";
import { setProfile } from "@components/store/Account";
import MobileNavBar from "./MobileNavBar";

const DashboardMobileLayout = ({ children, title, className }) => {
  const dispatch = useDispatch();
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
 

  const _getCustomerWallet = () => {
    getCustomerWallet(userDetails?.customerId).then((res) => { dispatch(setWalletBalance(res))})
  }
  const _getCustomerPortfolio = () => {
    getCustomerPortfolio(userDetails?.customerId).then((res) => { dispatch(setPortfolio(res))})
  }

  const _getCustomerProfile = () => {
    getCustomerProfile(userDetails?.customerId)
      .then((response) => {
        dispatch(setProfile(response));
      })
  }


  useEffect(() => {
    _getCustomerWallet();
    _getCustomerPortfolio();
    _getCustomerProfile();
  }, []);
  return (
    <>
      <div>
        <div className="sticky w-full top-0 z-50">
          <MobileNavBar title={title} />
        </div>
        <main className={`px-6 ${className}`}>{children}</main>
      </div>
    </>
  );
};

export default DashboardMobileLayout;
