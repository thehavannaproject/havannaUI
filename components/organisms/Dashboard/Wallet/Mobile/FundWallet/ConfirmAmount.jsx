// import { toast } from "react-toastify";
// import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { usePaystackPayment } from "react-paystack";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { AuthService } from "@components/api/auth";
import { createTransaction } from "@components/api";

// import { AuthService } from "@components/api/auth";

const ConfirmAmount = ({ transactionName, amount, setIsModalOpen }) => {
  // const router = useRouter();
  // const authService = new AuthService();
  // const customerId = authService.getDetails("ud").customerId;
  // const emailAddress = authService.getDetails("ud").emailAddress;
  // const [showConfirmModal, setConfirmModal] = useState(false);
  const authService = new AuthService();
  const customerId = authService.getDetails("ud").customerId;
  const emailAddress = authService.getDetails("ud").emailAddress;

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: emailAddress,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_1d9326aed821f7d3fade951742ab65b0070de23d",
    metadata: {
      customerId,
    },
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    const data = {
      customerId: customerId,
      transactionReference: reference.reference,
      type: 0,
      amount: amount,
      charge: 0,
    };
    createTransaction(data)
      .then(() => {
          // toast.success("Wallet credited successfully", { theme: "colored" });
          // setShowSuccessModal(true)
          handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
        handleCloseModal();
        toast.error("Transaction cannot be processed at the moment, Try again later.", { theme: "colored" });
      });
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);



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
              // toast.success("Your transaction is being processed and you will be notified via email or sms once your wallet is credited.", { theme: "colored" });
              // showModal(false);
              initializePayment(onSuccess, onClose)
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
