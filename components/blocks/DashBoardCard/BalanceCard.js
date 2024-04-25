import React from "react";

const BalanceCard = ({ balance, title, description, icon, className }) => {
  return (
    <div className="bg-HavannaGreen-secondary wallet-bg px-5 py-[54px] rounded-xl shadow-md">
      <div>
        <p className="font-bold text-24 leading-8 mb-5">{balance}</p>
        <div className={className}>
          <p className="font-semibold text-20 leading-[26px] ">{title}</p>
          <div className=" flex justify-between">
            <p className="font-normal text-16 leading-6 pt-2">{description}</p>
             {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
