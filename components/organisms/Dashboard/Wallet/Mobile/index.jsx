import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import RecentInvestment from "./RecentInvestment";
import FundWallet from "../Mobile/FundWallet/FundWallet";
import Withdrawal from "./Withdrawal/Withdrawal";

const MobileWallet = () => {
  const [showFundWallet, setShowFundWallet] = useState(false);
  const [showWithdrawal, setShowWithdrawal] = useState(false);
  return (
    <div className="font-mulish">
      <div className="mt-[60px]">
        <div className="flex justify-center">
          <h1 className="font-bold text-14 flex gap-1 text-[#3B3F42]">
            Wallet Balance <EyeIcon color="#39876B" width={18} />
          </h1>
        </div>
        <p className="text-24 font-bold text-center mt-3 text-[#3B3F42]">
          <span className="text-[28px]">₦ </span>100,000.00
        </p>
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
