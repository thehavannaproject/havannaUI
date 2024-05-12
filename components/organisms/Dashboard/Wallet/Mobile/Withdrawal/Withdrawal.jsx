import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import { AuthService } from "@components/shared/api/auth";
import { getCustomerProfile } from "@components/shared/api";
import { setProfile } from "@components/store/Account";
import TransactionProcessingModal from "@components/atoms/TransactionProcessingModal";
import PopUpModalTemplate from "@components/atoms/PopUpModalTemplate";
import ConfirmAmount from "../FundWallet/ConfirmAmount";

const Withdrawal = () => {
  const [showConfirmAmount, setShowConfirmAmount] = useState(false);
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [gotoAccountModal, setGotoAccountModal] = useState(false);

  const { profile } = useSelector((state) => state.Account);

  const withdrawalSchema = Yup.object().shape({
    amount: Yup.number().min(2000, "Minimum amount to withdraw is 2000")
  });

  useEffect(() => {
    getCustomerProfile(userDetails?.customerId)
      .then((response) => {
        dispatch(setProfile(response));
      })
      .catch((error) => console.log(error));
  }, []);



  const handleWithdrawal = (values) => {
    if(profile?.bankDetails?.accountNumber) {
      setShowConfirmAmount(true);
      const data = {
        customerId: profile.customerId,
        amount: values.amount,
        transactionPin: values.password,
        email: profile.emailAddress,
        reason: "",
        accountNumber: profile?.bankDetails?.accountNumber,
        accountName: profile?.bankDetails?.accountName
      };
      setData(data) 
    } else {
      toast.error("You have not set up your bank profile")
    }
  };

  useEffect(() => {
    if (!profile?.phoneNumber) {
      setGotoAccountModal(true);
    } else {
      setGotoAccountModal(false);
    }
  }, [profile?.phoneNumber])

  return (
    <div className="font-mulish text-[#4F5457] px-6 pt-8">
      <Formik initialValues={{ amount: "", password: "" }} onSubmit={handleWithdrawal} validationSchema={withdrawalSchema}>
        {() => (
          <Form>
            <div>
              <label className="text-14 font-bold">Enter Amount</label>
              <FormikCustomInput
                className={`rounded-[4px] smallLaptop:w-[100%] h-[48px] mt-2 
                        border-2  `}
                id="amount"
                inputClassName="placeholder:text-14 outline-none
                         placeholder:text-[#ADADAD] "
                name="amount"
                placeholder="Enter amount e.g 5000"
                required
                type="number"
              />
            </div>
            <div className="mt-6">
              <label className="text-14 font-bold">Transaction Pin</label>
              <FormikCustomInput
                className={`rounded-[4px] smallLaptop:w-[100%] h-[48px] mt-2 
                        border-2  `}
                id="password"
                inputClassName="placeholder:text-14 outline-none
                         placeholder:text-[#ADADAD] "
                name="password"
                placeholder="Enter pin"
                required
                type="number"
              />
            </div>
            <div className="mt-6 relative">
              <label className="font-bold text-base" htmlFor="accountNumber">
                Account Number
              </label>
              <FormikCustomInput
                className={`rounded-[4px] relative w-full h-[60px] mt-2 border-2 outline-none `}
                name="accountNumber"
                required
                type="text"
                value={profile?.bankDetails?.accountNumber}
              />
              <p className="text-14 mt-2 absolute top-1/2 right-4 text-HavannaBlack-neutral20 font-medium capitalize">{profile?.bankDetails?.bankName?.toLowerCase()}</p>
            </div>
            <p className="text-14 mt-2 text-HavannaGreen-secondary font-bold capitalize">{profile?.bankDetails?.accountName?.toLowerCase()}</p>
            <div className="pb-5">
              {/* <p className="mt-8 text-14 font-bold text-[#4F5457]">Use Payment Gateway</p>
              <div className="h-[60px] border-2 w-full rounded-md mt-4 flex justify-center items-center">
                <Icon className="h-[18px]" name="paystack" />
              </div> */}
              <CustomButton customClass=" h-[60px] w-full mt-[58px] rounded-lg bg-HavannaGreen-primary text-white mb-5 " title="Withdraw" type="submit" />
            </div>
          </Form>
        )}
      </Formik>

      <CustomModal cardClassName="h-screen w-full" visibility={showConfirmAmount}>
        <MenuHeader onClose={() => setShowConfirmAmount(false)} title="Confirm Amount">
          <div className="bg-white h-[100vh] overflow-y-auto ">
            <ConfirmAmount closeModal={setShowConfirmAmount} setShowSuccessModal={setShowSuccessModal} transactionName="withdraw" withdrawalData={data} />
          </div>
        </MenuHeader>
      </CustomModal>

      {showSuccessModal && <TransactionProcessingModal setShowSuccessModal={setShowSuccessModal}  />}
      <CustomModal cardClassName="w-[348px]" toggleVisibility={() => setGotoAccountModal(true)} visibility={gotoAccountModal}>
          <div className="bg-white text-black px-6 pt-4 flex justify-center items-center font-mulish h-[250px] rounded-lg  ">
            <PopUpModalTemplate description="Kindly complete your account information to proceed. " destination="/account" linkTitle="Go to Account" title="Notice" />
          </div>
        </CustomModal>
    </div>
  );
};

export default Withdrawal;
