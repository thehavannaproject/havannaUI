import React from "react";

import Icon from "@components/atoms/Icons";

const CashFlow1 = () => {
  return (
    <section>
      <div className="bg-white w-full shadow-xl rounded-xl  ">
        <div className="text-center">
          <div className="flex gap-[25.64px] justify-center pt-6">
            <h1 className="text-[#4F5457] font-bold text-24 leading-8 ">Cash Flow </h1>
            <Icon className="" name="eyeIconSolid" />
          </div>
          <div className="flex justify-center gap-[9.34px] border-b-2 border-HavannaGreen-secondary w-[33%] m-auto">
            <Icon className="mt-8 " name="naira" />
            <h1 className=" mt-6 font-bold text-center text-[#4F5457] text-36 leading-[44px]  ">30,000.00</h1>
          </div>
        </div>
        <h1 className="font-bold text-20 leading-[26px] pl-6 mt-[60px]">Recent Transactions</h1>
        {recentTransactions.map((transact, index) => (
          <div className="flex justify-between font-mulish mt-8 px-6" key={index}>
            <div>
              <h1 className="font-medium">{transact.title}</h1>
              <p className="font-normal">{transact.date}</p>
            </div>
            <div>
              <p className="font-medium">{transact.Amount}</p>
            </div>
          </div>
        ))}
        <div className="pb-10 text-center pt-14 font-mulish">
          <h1 className="font-bold text-16 leading-[22px] text-HavannaGreen-primary ">View all Transactions</h1>
        </div>
      </div>
    </section>
  );
};

export default CashFlow1;
const recentTransactions = [
  {
    color: ".",
    title: "Withdrawer to bank Account",
    date: "Fri, 06 Jan 2023 20.09.20 GMT",
    Amount: "N-1,000",
  },
  {
    color: ".",
    title: "Returns Deposit",
    date: "Thur, 05 Jan 2023, 16:32:28 GMT",
    Amount: "N 2,000",
  },
  {
    color: ".",
    title: "Returns Deposit",
    date: "Wed, 04 Jan 2023, 9:12:20 GMT",
    Amount: "N5,000",
  },
  {
    color: ".",
    title: "Withdrawal to Wallet",
    date: "Tue, 03 Jan 2023, 10:20:09 GMT",
    Amount: "N3,000",
  },
  {
    color: ".",
    title: "Withdrawal to Bank Account",
    date: "Mon, 02 Jan 2023, 11:05:09 GMT",
    Amount: "N2,000",
  },
  {
    color: ".",
    title: "Returns Deposit",
    date: "Tue, 03 Jan 2023, 10:20:09 GMT",
    Amount: "N4,000",
  },
];
