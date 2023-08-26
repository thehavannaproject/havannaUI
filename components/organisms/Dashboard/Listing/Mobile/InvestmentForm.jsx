import { useState } from "react";
import { Form, Formik } from "formik";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import InvestmentSummary from "./InvestmentSummary";

const InvestmentForm = () => {
  const [showSummary, setShowSummary] = useState(false);
  return (
    <>
      <div className="px-6 font-mulish">
        <div className="wallet-bg text-white  bg-HavannaGreen-secondary h-[142px] rounded-lg mt-5">
          <div className="flex gap-3 items-center pt-5 ml-3">
            <Icon name="mobileWallet" />
            <div>
              <h1 className="text-14 font-bold">Wallet Balance</h1>
              <p className="text-12 font-normal mt-1">Total money in your wallet</p>
              <p className="mt-2 text-20 font-bold">₦ 100,000.00</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Formik
            initialValues={{ propertyName: "", slotPrice: "₦", slotNo: "" }}
            onSubmit={(values) => {
              console.log(values);
              setShowSummary(true);
            }}
          >
            {({ values }) => (
              <Form>
                <div>
                  <label className="font-bold text-14 text-[#3B3F42]">Property Name</label>
                  <FormikCustomInput
                    className={`rounded-md w-full h-[48px] mt-1 border-2 font-medium font-mulish text-16 leading-6 `}
                    id="propertyName"
                    inputClassName="placeholder:text-14 outline-none "
                    name="propertyName"
                    type="text"
                  />
                </div>
                <div className="mt-5">
                  <label className="font-bold text-14 text-[#3B3F42]">Slot Price</label>
                  <FormikCustomInput
                    className={`rounded-md w-full h-[48px] mt-1 border-2 font-medium font-mulish text-16 leading-6 `}
                    id="slotPrice"
                    inputClassName="placeholder:text-14 outline-none "
                    name="slotPrice"
                    type="text"
                    value={values.slotPrice}
                  />
                </div>
                <div className="mt-5">
                  <label className="font-bold text-14 text-[#3B3F42]">Number of Slot</label>
                  <FormikCustomInput
                    className={`rounded-md w-full h-[48px] mt-1 border-2 font-medium font-mulish text-16 leading-6 `}
                    id="slotNo"
                    inputClassName="placeholder:text-14 outline-none "
                    name="slotNo"
                    type="text"
                  />
                </div>
                <div className="mt-5">
                  <label className="font-bold text-14 text-[#3B3F42]">Amount</label>
                  <FormikCustomInput
                    className={`rounded-md w-full h-[48px] mt-1 border-2 font-medium font-mulish text-16 leading-6 `}
                    id="slotNo"
                    inputClassName="placeholder:text-14 outline-none "
                    name="slotNo"
                    type="text"
                  />
                </div>
                <div className="mt-16">
                  <CustomButton customClass="bg-HavannaGreen-primary text-white w-full rounded-[4px]" title="Continue" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <CustomModal visibility={showSummary}>
        <MenuHeader onClose={() => setShowSummary(false)} title="Summary">
          <div className="bg-white text-black px-6 pt-4 font-mulish !w-full h-screen">
            <InvestmentSummary />
          </div>
        </MenuHeader>
      </CustomModal>
    </>
  );
};

export default InvestmentForm;
