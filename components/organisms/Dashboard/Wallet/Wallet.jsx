import React from "react";

import Icon from "@components/atoms/Icons";

const Wallet = () => {
  return (
    <div className="bg-HavannaGreen-light h-full">
      <section className=" font-mulish">
        <div className="flex justify-around pt-10  text-[#3B3F42]  font-bold text-[22px] leading-7  cursor-pointer ">
          <div className="border-b-4 hover:border-b-HavannaGreen-secondary">
            <p className="pb">Wallet</p>
          </div>
          <div className="border-b-4 pb-6 hover:border-b-HavannaGreen-secondary ">
            <p className="">Cashflow</p>
          </div>
        </div>
        <hr className="" />
        <div className="bg-white h-[551px] mx-[4%] shadow-xl rounded-xl mt-[52px] mb-[342px] text-center">
          <div className="">
            <div className="flex gap-[25.64px] justify-center pt-6">
              <h1 className="text-[#4F5457] font-bold text-24 leading-8 ">Wallet Balance</h1>
              <Icon className="" name="eyeIconSolid" />
            </div>

            <h1 className=" mt-6 font-bold text-36 leading-[44px]  ">N 0.00</h1>
            <hr className="w-[25%]  border-HavannaGreen-secondary m-auto border" />
          </div>
          <p className="font-medium mt-[120px] text-20 leading-[26px] text-[#3B3F42]">You don’t have any recent transaction</p>
          <div className="flex justify-center items-center mt-10">
            <button className="text-16  items-center h-14 rounded-lg gap-3 flex justify-center w-[300px] font-bold leading-6 font-mulish text-white bg-HavannaGreen-primary">
              <p>Fund wallet</p>
              <Icon name="walletWhite" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet;
