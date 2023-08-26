import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import TransactionDetails from "./TransactionDetails";

const InvestmentSummary = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (otp && otp.length == 4) {
      setShowTransactionDetails(true);
    }
  }, [otp]);

  return (
    <div className="font-mulish mt-7">
      <div>
        <p className="text-center text-[18px] font-bold text-[#3B3F42]">₦ 60, 000</p>
        <div className="mt-10 text-[#ADADAD] text-14">
          <div className="flex justify-between py-4 border-b">
            <p>Amount to pay</p>
            <p className="font-bold text-[#3B3F42]">₦ 60, 000</p>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p>Havanna processing fee</p>
            <p className="font-bold text-[#3B3F42]">₦ 0.00</p>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p>Property </p>
            <p className="font-bold text-[#3B3F42]">Edala Homes</p>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p>Slots bought</p>
            <p className="font-bold text-[#3B3F42]">2</p>
          </div>
        </div>

        <div className="mt-16">
          <CustomButton customClass="bg-HavannaGreen-primary text-white w-full text-14 rounded-[4px]" onClick={() => setShowModal(true)} title="Pay ₦ 60, 000" />
        </div>
      </div>
      <CustomModal cardClassName="absolute bottom-0" toggleVisibility={setShowModal} visibility={showModal}>
        <div className="w-full pt-8 bg-white text-black font-mulish h-[70vh] rounded-t-xl">
          <p className="text-center text-18 font-bold text-[#3B3F42]">Enter your PIN code</p>
          <OtpInput
            containerStyle="px-6 text-20 mt-[48px] flex justify-between"
            numInputs={4}
            onChange={setOtp}
            renderInput={(props) => (
              <input {...props} style={{ width: "42px", height: "42px", border: "1.3px solid #ADADAD", outline: "none", textAlign: "center", borderRadius: "4px" }} width={42} />
            )}
            renderSeparator={<span />}
            value={otp}
          />
        </div>
      </CustomModal>

      <CustomModal visibility={showTransactionDetails}>
        <MenuHeader onClose={() => setShowTransactionDetails(false)} title="Transaction Details">
          <div className="bg-white text-black px-6 pt-4 font-mulish !w-full h-screen">
            <TransactionDetails />
          </div>
        </MenuHeader>
      </CustomModal>
    </div>
  );
};

export default InvestmentSummary;
