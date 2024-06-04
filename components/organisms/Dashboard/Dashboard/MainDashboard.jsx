import BalanceCard from "@blocks/DashBoardCard/BalanceCard";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import PropertyStatCard from "@components/blocks/DashBoardCard/PropertyStatCard";
import { AuthService } from "@components/shared/api/auth";
import EmptyState from "@components/atoms/EmptyState/EmptyState";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import TransactionProcessingModal from "@components/atoms/TransactionProcessingModal";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import FundWallet from "../Wallet/FundWallet";

const MainDashboard = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [showFundModal, setShowFundModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { walletBalance } = useSelector((state) => state.Wallet);
  const { portfolio } = useSelector((state) => state.Customer);

  const BalanceCardData = [
    {
      balance: walletBalance?.availableBalance ? `₦ ${parseFloat(walletBalance?.availableBalance)?.toLocaleString()}` : "₦ 0",
      name: "Wallet Balance",
      description: "Total money in your wallet",
      icon: "wallet2",
    },
    {
      balance: walletBalance?.availableBalance ? `₦ ${portfolio?.balance?.toLocaleString()}` : "₦ 0",
      name: "Properties Value",
      description: "Total worth of your properties",
      icon: "propertiesWallet",
    },
    // {
    //   balance: wallet?.availableBalance ? `₦ ${parseFloat(wallet?.availableBalance)?.toLocaleString()}` : "₦ ",
    //   name: "Cash Flow",
    //   description: "Accumulated income",
    //   icon: "cashFlowWallet",
    // },
  ];
  
  return (
    <section className="font-mulish pt-[38px] pl-8 pr-[46px] ">
      <div className="smallLaptop:flex  justify-between pb-[46px]">
        <div>
          <h1 className="font-bold text-24 text-HavannaBlack-neutral20">Hello {userDetails?.customerName?.split(" ")[0]} !</h1>
          <p className="text-16 font-medium mt-2 mb-4 text-HavannaBlack-neutral50">Maintain and grow your investments here.</p>
        </div>
        <div>
          <button
            className="bg-HavannaGreen-primary flex font-bold text-16 justify-center items-center text-white w-[200px] h-[52px] rounded-lg "
            onClick={() => setShowFundModal(true)}
          >
            Add money <PlusIcon className="ml-3" width={24} />
          </button>
          <div>{showFundModal && <FundWallet isModalOpen={showFundModal} setIsModalOpen={setShowFundModal} setShowSuccessModal={setShowSuccessModal} />}</div>
        </div>
      </div>
      <div className="text-white font-mulish grid tablet:grid-cols-2 desktop:grid-cols-3 gap-5 pb-[60px]">
        {BalanceCardData.map((data, index) => (
          <div className="" key={index}>
            <BalanceCard balance={data.balance} description={data.description} icon={<Icon name={data.icon} />} title={data.name} />
          </div>
        ))}
      </div>
      <div>
        <div>
          <div className="flex justify-between mb-10">
            <p className="font-bold text-[22px] text-HavannaBlack-neutral20 ">Properties</p>
            <CustomLink customClass="font-bold text-16 text-HavannaGreen-primary cursor-pointer" destination="/portfolio">
              See all
            </CustomLink>
          </div>
          <div className="bg-white hidden text-center h-[400px] rounded-xl shadow-lg pt-[150px] mb-[149px] ">
            <p className="font-bold text-20 leading-[26px] text-HavannaBlack-neutral20 ">You dont own any properties yet.</p>
            <button className="bg-HavannaGreen-primary text-white rounded-lg smallLaptop:w-[328px] w-[60%] font-bold  h-[54px] mt-6 ">Explore properties</button>
          </div>
        </div>
        {portfolio?.properties?.length > 0 ? (
          <div>
            <div className="font-mulish grid gap-5 tablet:grid-cols-2 desktop:grid-cols-3 pb-[60px]">
              <PropertyStatCard balance={portfolio?.totalInvestments} description="Total properties invested in" icon="homeFilled" title="Properties" />
              <PropertyStatCard balance={portfolio?.totalSlotsOwned} description="Total number of slots bought" icon="keyFilled" title="Slot Bought" />
              {/* <PropertyStatCard balance="0" description="Total number of slots sold" icon="keyFilled" title="Slot Sold" /> */}
            </div>
          </div>
        ) : (
          <EmptyState buttonText="Explore Properties" description="You don’t own any properties yet." route="/" />
        )}
      </div>

      <CustomModal cardClassName="w-screen" toggleVisibility={setShowSuccessModal} visibility={showSuccessModal}>
          <div className=" bg-white py-10 px-11 h-screen w-full flex justify-center items-center font-mulish rounded-xl shadow-md">
          <TransactionProcessingModal setShowSuccessModal={setShowSuccessModal} />
          </div>
        </CustomModal>

    </section>
  );
};

export default MainDashboard;
