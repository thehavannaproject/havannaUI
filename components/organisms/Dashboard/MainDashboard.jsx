import BalanceCard from "@blocks/DashBoardCard/BalanceCard";
import React from "react";
// import icon from "@atoms/icons"

const MainDashboard = () => {
  return (
    <section className="font-mulish pt-[38px] pl-8 pr-[46px] bg-HavannaGreen-light h-[1037px]  ">
      <div className="flex justify-between pb-[46px]">
        <div>
          <h1 className="font-bold text-24 leading-8">Hello Bimbo!</h1>
          <p className="font-normal text-16 leading-6 ">Maintain and grow your investments here.</p>
        </div>

        <div>
          <button className="bg-HavannaGreen-primary text-white w-[200px] h-[52px] rounded-lg ">Add money +</button>
        </div>
      </div>
      <div className="text-white font-mulish bigLaptop:flex smallLaptop:flex gap-[35px] pb-[60px]    ">
        {BalanceCardData.map((data, index) => (
          <div key={index}>
            <BalanceCard description={data.description} icon={data.icon} price={data.balance} title={data.name} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-10">
        <p className="font-bold text-[22px] leading-7 ">Properties</p>
        <p className="font-bold text-16 leading-[22px] ">See all</p>
      </div>
      <div className="bg-white text-center h-[400px] rounded-xl shadow-lg pt-[150px] ">
        <p className="font-bold text-20 leading-[26px]  ">You dont own any properties yet.</p>
        <button className="bg-HavannaGreen-primary text-white rounded-lg smallLaptop:w-[328px] w-[60%]   h-[54px] mt-6 ">Explore properties</button>
      </div>
    </section>
  );
};

export default MainDashboard;

const BalanceCardData = [
  {
    balance: "0.00",
    name: "Wallet Balance",
    description: "Total money in your wallet",
    icon: "wallet2",
  },
  {
    balance: "0.00",
    name: "Properties Value",
    description: "Total worth of your properties",
    icon: "propertiesWallet",
  },
  {
    balance: "0.00",
    name: "Cash Flow",
    description: "Accumulated income",
    icon: "cashFlowWallet",
  },
];
