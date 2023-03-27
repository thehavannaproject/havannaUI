import React from "react";

import Icon from "@components/atoms/Icons";

const KycVerification = () => {
  return (
    <section className="font-mulish">
      <h1 className="pt-8 text-[#3B3F42] text-24 font-bold leading-8  pl-8">KYC Verification</h1>
      <div className="flex flex-wrap">
        <div className="bg-white w-[420px] h-[244px] rounded-xl pt-10 px-5 shadow-lg mt-10 ml-8 ">
          <h1 className="font-bold text-18 leading-6">KYC Verification</h1>
          <p className="mt-3 font-medium text-16 leading-[22px]  ">Verify your identity with your BVN</p>
          <button className="bg-HavannaGreen-primary text-white rounded-lg w-[380px] h-[54px] mt-8 text-16 font-bold leading-[22px] ">Verify your BVN</button>
        </div>
        <div className="bg-white w-[420px] h-[244px] rounded-xl pt-10 px-5 shadow-lg mt-10 ml-8 ">
          <h1 className="font-bold text-18 leading-6">Phone Number Verification</h1>
          <p className="mt-3 font-medium text-16 leading-[22px]  ">Verify your phone number and generate your OTP Code.</p>
          <button className="bg-HavannaGreen-primary text-white rounded-lg w-[380px] h-[54px] mt-8 text-16 font-bold leading-[22px] ">Verify your phone number</button>
        </div>
        <div className="bg-white w-[420px] h-[244px] rounded-xl pt-10 px-5 shadow-lg mt-10 ml-8 ">
          <h1 className="font-bold text-18 leading-6">Email Address Verification</h1>
          <p className="mt-3 font-medium text-16 leading-[22px]  ">Your email address has been verified.</p>
          <button className="bg-[#B7E1D2] text-[#8F8F8F] flex justify-center gap-[14.25px] items-center rounded-lg w-[380px] h-[54px] mt-8 text-16 font-bold leading-[22px] ">
            <p>Email address verified</p>
            <Icon name="verifiedTick" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KycVerification;
