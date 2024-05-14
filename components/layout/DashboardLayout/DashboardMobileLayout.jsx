import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
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
  const [inactiveTime, setInactiveTime] = useState(0);
  const router = useRouter();
 

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

  const handleUserActivity = () => {
    setInactiveTime(0);
  };

  const handleLogOut = () => {
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setInactiveTime((prevInactiveTime) => prevInactiveTime + 1);
    }, 60000); // 1 minute interval

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
    };
  }, []);

  useEffect(() => {
    if (inactiveTime === 2) {
      toast.warn(
        "Hello, Are you still there?. You would be logged out in 2 mins due to inactivity",
        { theme: "colored" }
      );
    } else if (inactiveTime === 3) {
      toast.warn("Your session has timed out", { theme: "colored" });
      setTimeout(() => {
        handleLogOut();
      }, 4000);
    }
  }, [inactiveTime]);

  useEffect(() => {
    if(!localStorage.getItem("ud")) {
      router.push('/')
    }
  }, [])

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
