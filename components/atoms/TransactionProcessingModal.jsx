import React from "react";
import CustomButton from "./CustomButton/CustomButton";

const TransactionProcessingModal = ({ setShowSuccessModal }) => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-white z-50">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[36px] text-HavannaBlack-neutral20 font-bold">Transaction Processing</h1>
        <p className="mt-6 text-[22px] text-HavannaBlack-neutral50 font-medium w-4/5 text-center">
          Your transaction is being processed and you will be notified via email or sms once your wallet is credited.
        </p>
        <CustomButton
          customClass="bg-HavannaGreen-primary mt-24 flex font-bold text-16 justify-center items-center text-white w-full tablet:w-[684px] h-[58px] rounded-lg "
          onClick={() => setShowSuccessModal(false)}
          title="Go Back"
        />
      </div>
    </div>
  );
};

export default TransactionProcessingModal;
