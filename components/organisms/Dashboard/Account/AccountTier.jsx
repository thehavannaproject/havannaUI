import React from "react";

const AccountTier = () => {
  return (
    <section className="font-mulish">
      <div className="bg-white font-mulish rounded-xl pt-10 m-auto w-[880px] shadow-lg px-10 ">
        <div className="border-HavannaGreen-primary border-[4px] flex  justify-center m-auto rounded-[50px] h-[100px] w-[100px]  ">
          <h1 className="text-HavannaGreen-primary text-center m-auto font-bold text-[44px] leading-[52px] ">1</h1>
        </div>
        <p className="text-white bg-HavannaGreen-primary rounded-[60px] mt-4 w-32 h-8 text-center m-auto">Your tier</p>
        <p className="mt-16 font-bold text-24 leading-8 ">Available</p>
        <div className="flex justify-between font-medium text-18 leading-6 mt-4 ">
          <p>Tier 1 transaction limit</p>
          <p>N 100,000.00</p>
        </div>
        <div className="flex justify-between mt-[52px] pb-[60px] ">
          <div>
            <h1 className="font-bold text-24 leading-8">Tier 1 Requierments</h1>
            <h4 className="font-medium text-18 leading-6 mt-4 ">BVN</h4>
            <p>Verification not yet completed</p>
          </div>
          <h1 className="font-bold text-18 leading-6">Verify</h1>
        </div>
      </div>
    </section>
  );
};

export default AccountTier;
