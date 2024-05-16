import React from "react";
import CustomLink from "./CustomLink/CustomLink";

const TransactionProcessingModal = ({setShowSuccessModal}) => {
  return (
    <div className="flex justify-center items-center  ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-24 tablet:text-[36px] text-HavannaBlack-neutral20 font-bold">Transaction Processing</h1>
        <p className="mt-6 tablet:text-[22px] text-HavannaBlack-neutral50 font-medium w-4/5 text-center">
          Your transaction is being processed and you will be notified via email or sms once your wallet is credited.
        </p>
        <div onClick={() => setShowSuccessModal(false)}>

          <CustomLink customClass="bg-HavannaGreen-primary mt-24 flex font-bold text-16 justify-center items-center px-8 text-white w-full tablet:w-[684px] h-[58px] rounded-lg " destination="/dashboard" >
          Return to Dashboard
          </CustomLink>
        </div>
        {/* <CustomButton
          customClass="bg-HavannaGreen-primary mt-24 flex font-bold text-16 justify-center items-center text-white w-full tablet:w-[684px] h-[58px] rounded-lg "
          onClick={() => setShowSuccessModal(false)}
          title="Return to Dashboard"
        /> */}
      </div>
    </div>
  );
};

export default TransactionProcessingModal;
