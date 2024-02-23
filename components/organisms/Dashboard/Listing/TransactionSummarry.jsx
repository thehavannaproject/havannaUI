import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Icon from "@components/atoms/Icons";
import TransactionSuccessfulModal from "@components/atoms/TransactionSuccessfulModal";
import { AuthService } from "@components/api/auth";
import { ListingInvestment } from "@components/api";
import CustomButton from "@components/atoms/CustomButton/CustomButton";

const TransactionSummary = () => {
  const router = useRouter();
  const authService = new AuthService();
  const customerDetails = authService.getDetails("cd");
  const [summaryData, setSummaryData] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { propertyId, data } = router.query;
  console.log(customerDetails);
  useEffect(() => {
    if ((propertyId, data)) {
      setSummaryData(JSON.parse(data));
    }
  }, [propertyId, data]);
  console.log(summaryData);

  const makeInvestment = () => {
    setLoading(true);
    const data = {
      listingId: propertyId,
      portfolioId: customerDetails?.portfolio?.id,
      customerId: customerDetails?.customerId,
      amount: summaryData.amount,
      unit: summaryData.slotCount,
    };
    ListingInvestment(data)
      .then((res) => {
        setLoading(false)
        console.log(res);
        setShowSuccessModal(true);
      })
      .catch((error) => {console.log(error); setLoading(false)});
  };

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
            <p className="font-bold text-36 leading-[44px]  ">{summaryData?.amount?.toLocaleString()}</p>
          </div>

          <div className="flex justify-between  border-b-[0.6px] py-5 mt-10">
            <p>Amount to pay</p>
            <div>
              <Icon />
              <p>{summaryData?.amount?.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex justify-between  border-b-[0.6px] py-5 mt-10">
            <p>Havanna processing fee</p>
            <div>
              <Icon />
              <p>0</p>
            </div>
          </div>
          <div className="flex justify-between  border-b-[0.6px] py-5 mt-10">
            <p>Property </p>
            <p>{summaryData?.propertyName}</p>
          </div>
          <div className="flex justify-between border-b-[0.6px] py-5  mt-10">
            <p>Slots bought</p>
            <p>{summaryData?.slotCount}</p>
          </div>
          <div className="">
            <CustomButton customClass="mt-20 h-[54px] rounded-[4px] bg-HavannaGreen-primary text-white w-full" isLoading={loading} onClick={makeInvestment} title={`Pay ${summaryData?.amount?.toLocaleString()}`}/>
              
          </div>
        </div>
      </div>
      {showSuccessModal && <TransactionSuccessfulModal route="/listing" />}
    </section>
  );
};

export default TransactionSummary;
