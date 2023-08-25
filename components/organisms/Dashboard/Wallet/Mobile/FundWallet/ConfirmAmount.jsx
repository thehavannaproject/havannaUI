import { usePaystackPayment } from "react-paystack";
import CustomButton from "@components/atoms/CustomButton/CustomButton";

const ConfirmAmount = ({ transactionName }) => {
  const config = {
    reference: new Date().getTime().toString(),
    email: localStorage.getItem("userEmail"),
    amount: 5000 * 100,
    publicKey: "pk_test_1d9326aed821f7d3fade951742ab65b0070de23d",
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="font-mulish pt-7 px-6">
      <div>
        <p className="text-center text-[18px] font-bold text-[#3B3F42] mt-2">₦ 5,000</p>
        <div className="mt-10 text-[#ADADAD] text-14">
          <div className="flex justify-between py-4 border-b">
            <p className="text-14 text-[#ADADAD]">Amount to {transactionName} </p>
            <p className="text-[#3B3F42] text-14">₦ 5,000.00</p>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p className="text-14 text-[#ADADAD]">Havanna processing fee</p>
            <p className="text-[#3B3F42] text-14">₦ 0.00</p>
          </div>
          <div className="flex justify-between align-middle py-4 border-b">
            <p className="text-14 text-[#ADADAD]">Payment gateway </p>
            <p className="text-[#3B3F42] text-14">Paystack</p>
          </div>
        </div>
        <div>
          <CustomButton
            customClass=" h-[60px] w-full mt-[52px] rounded-lg bg-HavannaGreen-primary text-white mb-5 "
            onClick={() => {
              initializePayment(onSuccess, onClose);
            }}
            title="Pay"
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmAmount;
