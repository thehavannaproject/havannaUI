import { useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast } from "react-toastify";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import { getAllTransactionHistory, getCustomerWallet } from "@components/shared/api";
import { AuthService } from "@components/shared/api/auth";
import Skeleton from "@components/atoms/Skeleton";
import RecentInvestment from "./RecentInvestment";
import FundWallet from "../Mobile/FundWallet/FundWallet";
import Withdrawal from "./Withdrawal/Withdrawal";

const MobileWallet = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(true);
  const [wallet, setWallet] = useState([]);
  const [, setTranHistory] = useState([]);
  const [showFundWallet, setShowFundWallet] = useState(false);
  const [showWithdrawal, setShowWithdrawal] = useState(false);

  const getTransactionHistory = () => {
    getAllTransactionHistory(userDetails?.customerId).then((data) => {
      if (data.responseCode == 200) {
        setLoading(false);
        setTranHistory(data.data);
      } else {
        toast.error("Error fetching transaction history", { theme: "colored" });
      }
    });
  };

  const getCustomerWallets = () => {
    setLoading(true);
    getCustomerWallet(userDetails?.customerId).then((data) => {
      if (data) {
        setLoading(false);
        setWallet(data);
      }
    });
  };

  useEffect(() => {
    getCustomerWallets();
    getTransactionHistory();
  }, []);

  return (
    <div className="font-mulish">
      <div className="mt-[60px]">
        {/* <div className="flex justify-center">
          <h1 className="font-bold text-14 flex gap-1 text-[#3B3F42]">
            Wallet Balance <EyeIcon color="#39876B" width={18} />
          </h1>
        </div>
        <p className="text-24 font-bold text-center mt-3 text-[#3B3F42]">
          <span className="text-[28px]">₦ </span>100,000.00
        </p> */}
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-3">

            <h1 className="font-bold text-14 text-[#3B3F42]">Wallet Balance</h1>
            <div>{hide ? <EyeIcon color="#39876B" onClick={() => setHide(false)} width={18} /> : <EyeSlashIcon color="#39876B" onClick={() => setHide(true)} width={18} />}</div>
            </div>
            {loading ? (
              <Skeleton className="w-[227px] h-9 m-auto animate-pulse" />
            ) : (
              <div>
                {hide ? (
                  <h1 className=" mt-3 font-bold text-24 text-[#3B3F42]  "><span className="text-[28px]">₦ </span> {wallet?.availableBalance?.toLocaleString()}</h1>
                ) : (
                  <p className=" mt-3 font-bold text-24 text-[#3B3F42]  ">******</p>
                )}
              </div>
            )}
          </div>

          <hr className="w-[25%]  border-HavannaGreen-secondary m-auto border" />
        </div>
        <div className="flex justify-between gap-3 mt-[60px]">
          <div className="w-1/2">
            <CustomButton
              customClass="text-white h-[42px] w-full rounded-[4px] text-12 font-bold bg-HavannaGreen-primary"
              onClick={() => setShowFundWallet(true)}
              title="Fund Wallet"
            />
          </div>
          <div className="w-1/2">
            <CustomButton
              customClass="text-HavannaGreen-primary whitespace-nowrap w-full rounded-[4px] h-[42px] text-12 font-bold border-2 border-HavannaGreen-primary"
              onClick={() => setShowWithdrawal(true)}
              title="Withdraw Money"
            />
          </div>
        </div>
      </div>
      <div className="mt-[60px]">
        <RecentInvestment />
      </div>

      <CustomModal cardClassName="h-screen" visibility={showFundWallet}>
        <MenuHeader onClose={() => setShowFundWallet(false)} title="Fund Wallet">
          <div className="bg-white h-screen">
            <FundWallet />
          </div>
        </MenuHeader>
      </CustomModal>

      <CustomModal cardClassName="h-screen" visibility={showWithdrawal}>
        <MenuHeader onClose={() => setShowWithdrawal(false)} title="Withdraw Money">
          <div className="bg-white h-screen">
            <Withdrawal />
          </div>
        </MenuHeader>
      </CustomModal>
    </div>
  );
};

export default MobileWallet;
