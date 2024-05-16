// import { toast } from "react-toastify";
// import { useRouter } from "next/router";
import { usePaystackPayment } from "react-paystack";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { AuthService } from "@components/shared/api/auth";
import { CustomerWithdrawal, createTransaction, getCustomerWallet } from "@components/shared/api";
import { setWalletBalance } from "@components/store/Wallet";

// import { AuthService } from "@components/api/auth";

const ConfirmAmount = ({ transactionName, amount, closeModal, setShowSuccessModal, withdrawalData }) => {
  const dispatch = useDispatch();
  const authService = new AuthService();
  const customerId = authService.getDetails("ud").customerId;
  const emailAddress = authService.getDetails("ud").emailAddress;
  const [loading, setLoading] = useState(false);

  const handleCloseModal = () => {
    closeModal(false);
    getCustomerWallet(customerId).then((res) => {
      dispatch(setWalletBalance(res));
    });
  };

  console.log(withdrawalData);
  const config = {
    reference: new Date().getTime().toString(),
    email: emailAddress,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_1d9326aed821f7d3fade951742ab65b0070de23d",
    metadata: {
      customerId,
    },
    channels: ["bank", "ussd", "bank_transfer"],
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
    handleCloseModal();
    createTransaction(data)
      .then((res) => {
        console.log(res);
        if (res.responseCode === 200) {
          setShowSuccessModal(true);
        }
      })
      .catch((error) => {
        console.log(error);
        handleCloseModal();
      });
  };

  const handleWithdrawal = () => {
    setLoading(true);
    const data = {
      customerId: withdrawalData?.customerId,
      amount: withdrawalData?.amount,
      transactionPin: withdrawalData?.transactionPin?.toString(),
      email: withdrawalData?.email,
      reason: "withdrawal",
    };
    CustomerWithdrawal(data).then((res) => {
      console.log(res)
      if(res.responseCode === 200) {
        setLoading(false);
        handleCloseModal();
        setShowSuccessModal(true);
      } else  {
        setLoading(false);
        toast.error(res.errorMessage)
      }
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
        <p className="text-center text-[18px] font-bold text-HavannaBlack-neutral mt-2">₦ {withdrawalData?.amount?.toLocaleString() || amount?.toLocaleString()}</p>
        <div className="mt-10 text-[#ADADAD] text-14">
          <div className="flex justify-between py-4 border-b">
            <p className="text-14 text-[#ADADAD]">Amount to {transactionName} </p>
            <p className="text-HavannaBlack-neutral text-14">₦ {withdrawalData?.amount?.toLocaleString() || amount?.toLocaleString()}</p>
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
                <p className="text-[#4F5457] text-14 font-medium">{withdrawalData?.accountNumber}</p>
              </div>
              <div className="flex justify-between align-middle py-4 border-b">
                <p className="text-14 text-[#ADADAD]">Bank Account Name </p>
                <p className="text-HavannaBlack-neutral text-14 text-left lowercase">{withdrawalData?.accountName}</p>
              </div>
            </div>
          )}
        </div>
        <div>
          <CustomButton
            customClass=" h-[60px] w-full mt-[74px] rounded-lg bg-HavannaGreen-primary text-white mb-5 "
            isLoading={loading}
            onClick={() => {
              // toast.success("Your transaction is being processed and you will be notified via email or sms once your wallet is credited.", { theme: "colored" });
              // showModal(false);
              withdrawalData?.amount ? handleWithdrawal() : initializePayment(onSuccess, onClose);
            }}
            title={`${transactionName === "withdraw" ? "Withdraw" : `Pay ₦ ${amount?.toLocaleString()}`} `}
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmAmount;
