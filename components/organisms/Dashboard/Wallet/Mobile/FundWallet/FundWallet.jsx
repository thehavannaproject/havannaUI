import { Form, Formik } from "formik";
import { useState } from "react";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import ConfirmAmount from "./ConfirmAmount";

const FundWallet = () => {
  const [showConfirmAmount, setShowConfirmAmount] = useState(false);

  return (
    <div className="font-mulish text-[#4F5457] px-6 pt-8">
      <Formik initialValues={{ amount: "" }}>
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

      <CustomModal cardClassName="h-screen" visibility={showConfirmAmount}>
        <MenuHeader onClose={() => setShowConfirmAmount(false)} title="Confirm Amount">
          <div className="bg-white h-screen">
            <ConfirmAmount transactionName="pay" />
          </div>
        </MenuHeader>
      </CustomModal>
    </div>
  );
};

export default FundWallet;
