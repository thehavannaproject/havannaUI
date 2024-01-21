import BalanceCard from "@blocks/DashBoardCard/BalanceCard";
import React, { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { getCustomerPortfolio, getCustomerWallet } from "@components/api";
import PropertyStatCard from "@components/blocks/DashBoardCard/PropertyStatCard";
import { AuthService } from "@components/api/auth";
import EmptyState from "@components/atoms/EmptyState/EmptyState";
import FundWallet from "../Wallet/FundWallet";

const MainDashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [wallet, setWallet] = useState({});
  const [portfolio, setPorfolio] = useState({});
  const [showFundModal, setShowFundModal] = useState(false);
  const authService = new AuthService();

  useEffect(() => {
    const userDetails = authService.getDetails("ud");
    setUserDetails(userDetails);
  }, []);

  useEffect(() => {
    getCustomerWallet(userDetails?.customerId)
      .then((data) => {
        if (data) {
          setWallet(data);
        }
      })
      .catch((error) => console.log(error));

    getCustomerPortfolio(userDetails?.customerId)
      .then((data) => {
        if (data) {
          setPorfolio(data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const BalanceCardData = [
    {
      balance: wallet?.availableBalance ? `₦ ${wallet?.availableBalance?.toLocaleString()}` : "₦ ",
      name: "Wallet Balance",
      description: "Total money in your wallet",
      icon: "wallet2",
    },
    {
      balance: "₦ 0",
      name: "Properties Value",
      description: "Total worth of your properties",
      icon: "propertiesWallet",
    },
    {
      balance: wallet?.availableBalance ? `₦ ${wallet?.availableBalance?.toLocaleString()}` : "₦ ",
      name: "Cash Flow",
      description: "Accumulated income",
      icon: "cashFlowWallet",
    },
  ];
  return (
    <section className="font-mulish pt-[38px] pl-8 pr-[46px] bg-HavannaGreen-light h-screen  ">
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
          <div>{showFundModal && <FundWallet isModalOpen={showFundModal} setIsModalOpen={setShowFundModal} />}</div>
        </div>
      </div>
      <div className="text-white font-mulish grid tablet:grid-cols-2 desktop:grid-cols-3 gap-5 pb-[60px]">
        {BalanceCardData.map((data, index) => (
          <div className="" key={index}>
            <BalanceCard balance={data.balance} description={data.description} icon={data.icon} title={data.name} />
          </div>
        ))}
      </div>
      <div>
        <div>
          <div className="flex justify-between mb-10">
            <p className="font-bold text-[22px] text-HavannaBlack-neutral20 ">Properties</p>
            <p className="font-bold text-16 text-HavannaGreen-primary cursor-pointer">See all</p>
          </div>
          <div className="bg-white hidden text-center h-[400px] rounded-xl shadow-lg pt-[150px] mb-[149px] ">
            <p className="font-bold text-20 leading-[26px] text-HavannaBlack-neutral20 ">You dont own any properties yet.</p>
            <button className="bg-HavannaGreen-primary text-white rounded-lg smallLaptop:w-[328px] w-[60%] font-bold  h-[54px] mt-6 ">Explore properties</button>
          </div>
        </div>
        {portfolio?.properties?.length > 0 ? (
          <div className="">
            <div className="font-mulish grid gap-5 tablet:grid-cols-2 desktop:grid-cols-3 pb-[60px]">
              <PropertyStatCard balance="2" description="Total properties invested in" icon="homeFilled" title="Properties" />
              <PropertyStatCard balance="5" description="Total number of slots bought" icon="keyFilled" title="Slot Bought" />
              <PropertyStatCard balance="0" description="Total number of slots sold" icon="keyFilled" title="Slot Sold" />
            </div>
          </div>
        ) : (
          <EmptyState buttonText="Explore Properties" description="You don’t own any properties yet." route="/" />
        )}
      </div>
    </section>
  );
};

export default MainDashboard;
