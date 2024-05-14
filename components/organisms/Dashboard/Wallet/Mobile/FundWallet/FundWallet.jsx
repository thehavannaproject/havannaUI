import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import PopUpModalTemplate from "@components/atoms/PopUpModalTemplate";
import ConfirmAmount from "./ConfirmAmount";

const FundWallet = ({closeModal, setShowSuccessModal}) => {
  const [showConfirmAmount, setShowConfirmAmount ] = useState(false);
  const [amount_, setAmount_] = useState("");
  const [gotoAccountModal, setGotoAccountModal] = useState(false);

  const depositSchema = Yup.object().shape({
    amount: Yup.number().min(2000, "Minimum amount to deposit is 2000").max(300000, "Maximum amount to deposit is 300000")
  });

  const { profile } = useSelector((state) => state.Account);

  useEffect(() => {
    if (!profile?.phoneNumber) {
      setGotoAccountModal(true);
    } else {
      setGotoAccountModal(false);
    }
  }, [profile?.phoneNumber])

  return (
    <div className="font-mulish text-[#4F5457] px-6 pt-8">
      <Formik initialValues={{ amount: "" }} onSubmit={(values) => setAmount_(values.amount)} validationSchema={depositSchema}>
        {() => (
          <Form>
            <div>
              <label className="text-14 font-bold">Enter Amount</label>
              <FormikCustomInput
                className={`rounded-[4px] w-full h-[48px] mt-2 
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
            <div className="pb-5">
              <p className="mt-8 text-14 font-bold text-[#4F5457]">Use Payment Gateway</p>
              <div className="h-[60px] border-2 w-full rounded-md mt-4 flex justify-center items-center">
                <Icon className="h-[18px]" name="paystack" />
              </div>
              <CustomButton
                customClass=" h-[60px] w-full mt-[52px] rounded-lg bg-HavannaGreen-primary text-white mb-5 "
                onClick={() => setShowConfirmAmount(true)}
                title="Pay"
                type="submit"
              />
            </div>
          </Form>
        )}
      </Formik>

      <CustomModal cardClassName="h-screen w-full" visibility={showConfirmAmount}>
        <MenuHeader onClose={() => setShowConfirmAmount(false)} title="Confirm Amount">
          <div className="bg-white h-screen">
            <ConfirmAmount amount={amount_} closeModal={closeModal} setShowSuccessModal={setShowSuccessModal} transactionName="pay" />
          </div>
        </MenuHeader>
      </CustomModal>
      <CustomModal cardClassName="w-[348px]" toggleVisibility={() => setGotoAccountModal(true)} visibility={gotoAccountModal}>
          <div className="bg-white text-black px-6 pt-4 flex justify-center items-center font-mulish h-[250px] rounded-lg  ">
            <PopUpModalTemplate description="Kindly complete your account information to proceed. " destination="/account" linkTitle="Go to Account" title="Notice" />
          </div>
        </CustomModal>
    </div>
  );
};

export default FundWallet;
