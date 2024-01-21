// import { toast } from "react-toastify";
// import { useRouter } from "next/router";
import { toast } from "react-toastify";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
// import { AuthService } from "@components/api/auth";

const ConfirmAmount = ({ transactionName, amount, showModal, setIsModalOpen }) => {
  // const router = useRouter();
  // const authService = new AuthService();
  // const customerId = authService.getDetails("ud").customerId;
  // const emailAddress = authService.getDetails("ud").emailAddress;

  return (
    <div className="font-mulish pt-7 px-6">
      <div>
        <p className="text-center text-[18px] font-bold text-HavannaBlack-neutral mt-2">₦ {amount?.toLocaleString()}</p>
        <div className="mt-10 text-[#ADADAD] text-14">
          <div className="flex justify-between py-4 border-b">
            <p className="text-14 text-[#ADADAD]">Amount to {transactionName} </p>
            <p className="text-HavannaBlack-neutral text-14">₦ {amount?.toLocaleString()}</p>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p className="text-14 text-[#ADADAD]">Havanna processing fee</p>
            <p className="text-HavannaBlack-neutral text-14">₦ 0.00</p>
          </div>
          {transactionName !== "withdraw" && (
            <div className="flex justify-between align-middle py-4 border-b">
              <p className="text-14 text-[#ADADAD]">Payment gateway </p>
              <p className="text-HavannaBlack-neutral text-14">Paystack</p>
            </div>
          )}
          {transactionName == "withdraw" && (
            <div>
              <div className="flex justify-between py-4 border-b">
                <p className="text-14 text-[#ADADAD]">Bank Account Number</p>
                <p className="text-[#4F5457] text-14 font-medium">1234567890</p>
              </div>
              <div className="flex justify-between align-middle py-4 border-b">
                <p className="text-14 text-[#ADADAD]">Bank Account Name </p>
                <p className="text-HavannaBlack-neutral text-14 text-left">Ashonibare Abimbola Nafisah</p>
              </div>
            </div>
          )}
        </div>
        <div>
          <CustomButton
            customClass=" h-[60px] w-full mt-[52px] rounded-lg bg-HavannaGreen-primary text-white mb-5 "
            onClick={() => {
              toast.success("Your transaction is being processed and you will be notified via email or sms once your wallet is credited.", { theme: "colored" });
              showModal(false);
              setIsModalOpen(false);
            }}
            title={`${transactionName === "withdraw" ? "Withdraw" : "Pay"} ₦ ${amount.toLocaleString()}`}
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmAmount;
