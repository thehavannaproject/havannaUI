import { useRouter } from "next/router";
import React from "react";

import Icon from "@components/atoms/Icons";

const TransactionSummary = () => {
  const router = useRouter();

  return (
    <section>
      <div className="bg-[#F3FCFB] font-mulish">
        <div className="flex pt-8 gap-[28.38px] ml-[44.38px] ">
          <Icon
            className="mt-1 cursor-pointer"
            name="investArrow"
            onClick={() => {
              router.back();
            }}
          />
          <div>
            <h1 className="font-bold text-[28px] leading-9 "> Transaction Summary</h1>
          </div>
        </div>
        <div className="bg-white w-[800px] ml-20 shadow-xl mt-[60px] py-10 px-10 rounded-xl">
          <div className="flex justify-center border-b-2 border-HavannaGreen-secondary py-5 gap-[9.33px] mt-6 ">
            <Icon className="mt-[11px] " name="naira" />
            <p className="font-bold text-36 leading-[44px]  ">60,000.00</p>
          </div>

          <div className="flex justify-between  border-b-[0.6px] py-5 mt-10">
            <p>Amount to pay</p>
            <div>
              <Icon />
              <p>60,000.00</p>
            </div>
          </div>
          <div className="flex justify-between  border-b-[0.6px] py-5 mt-10">
            <p>Havanna processing fee</p>
            <div>
              <Icon />
              <p>0.00</p>
            </div>
          </div>
          <div className="flex justify-between  border-b-[0.6px] py-5 mt-10">
            <p>Property </p>
            <p>Edala Homes</p>
          </div>
          <div className="flex justify-between border-b-[0.6px] py-5  mt-10">
            <p>Slots bought</p>
            <p>2</p>
          </div>
          <div className="">
            <button className="mt-20 h-[54px] rounded-[4px] bg-HavannaGreen-primary text-white w-full">Pay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionSummary;
