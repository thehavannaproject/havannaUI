import React, { useEffect, useState } from "react";

import Icon from "@components/atoms/Icons";
import { getCustomerWallet } from "@components/api";
import TransactionHistory from "../TransactionHistory";

const CashFlow1 = () => {
  const [wallet, setWallet] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    setUserDetails(userDetails);
  }, []);

  useEffect(() => {
    getCustomerWallet(userDetails.id).then((data) => setWallet(data));
  }, []);
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
            <h1 className=" mt-6 font-bold text-center text-[#4F5457] text-36 leading-[44px]  ">{wallet[0]?.availableBalance.toLocaleString()}</h1>
          </div>
        </div>
        <TransactionHistory />
      </div>
    </section>
  );
};

export default CashFlow1;
