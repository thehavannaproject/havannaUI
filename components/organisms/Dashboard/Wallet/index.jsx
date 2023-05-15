import React, { useState } from "react";

import CashFlow from "./cashFlow/CashFlow";
import Wallet from "./Wallet";

const index = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className=" ">
        <div className={`  flex  justify-around pt-10  `}>
          {walletOption.map((wallet, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveTab(wallet.id);
              }}
            >
              <div
                className={` ${wallet.id === activeTab ? "border-b-HavannaGreen-secondary text-HavannaGreen-secondary border-b-4 " : ""}  pb-6 border-b-HavannaGreen-secondary 
                                cursor-pointer
                                 text-HavannaGreen-secondary`}
              >
                <h1 className=" font-bold text-22 leading-[28px]">{wallet.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="" />
      <div>{walletOption[activeTab].component}</div>
    </div>
  );
};

export default index;

const walletOption = [
  {
    id: 0,
    name: "Wallet",
    component: <Wallet />,
  },
  {
    id: 1,
    name: "Cashflow",
    component: <CashFlow />,
  },
];
