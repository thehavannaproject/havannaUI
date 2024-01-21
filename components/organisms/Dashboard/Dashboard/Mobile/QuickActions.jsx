import { useState } from "react";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import FundWallet from "../../Wallet/Mobile/FundWallet/FundWallet";

const QuickActions = () => {
  const [showConfirmAmount, setShowConfirmAmount] = useState(false);
  return (
    <div className="mt-6 font-mulish">
      <p className="text-[#3B3F42] text-14 font-bold">Quick Actions</p>
      <div className="flex mt-3 gap-6">
        <div className="bg-white card-shadow w-[178px] flex gap-3 p-4 rounded-lg">
          <Icon name="walletPlus" />
          <p className="text-14 text-[#6B7276]" onClick={() => setShowConfirmAmount(true)}>
            Fund Wallet
          </p>
        </div>
        <div className="bg-white card-shadow w-[178px] flex justify-between p-4 rounded-lg">
          <Icon name="buildingYellow" />
          <CustomLink className="!text-14 text-[#6B7276]" destination="/listing">
            See Listings
          </CustomLink>
        </div>
      </div>
      <CustomModal cardClassName="h-screen" visibility={showConfirmAmount}>
        <MenuHeader onClose={() => setShowConfirmAmount(false)} title="Fund Wallet">
          <div className="bg-white h-screen">
            <FundWallet />
          </div>
        </MenuHeader>
      </CustomModal>
    </div>
  );
};

export default QuickActions;
