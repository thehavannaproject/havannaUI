import { Form, Formik } from "formik";
import React, { useState } from "react";
import { usePaystackPayment } from 'react-paystack';

import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import CustomButton from "@components/atoms/CustomButton/CustomButton";

const FundWallet = ({ setIsModalOpen }) => {
  const [amount, setAmount] = useState(null)
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const config = {
    reference: (new Date()).getTime().toString(),
    email: localStorage.getItem("userEmail"),
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_1d9326aed821f7d3fade951742ab65b0070de23d',
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="">
          <div className="bg-white w-[532px] rounded-xl shadow-md">
            <Icon className="flex cursor-pointer justify-end pr-[21px] pt-[21px]" name="closeModal" onClick={handleCloseModal} />
            <div className="modal-content px-11 w-[532px]">
              <div>
                <h2 className="font-bold text-18 leading-[24px] text-[#3B3F42] ">Fund Your Wallet</h2>
                <p className="mt-3 font-medium text-16 leading-[22px] ">Enter an amount to fund your wallet with.</p>
                <div className="mt-8 ">
                  <Formik initialValues={{ amount: "" }}>
                    <Form>
                      <FormikCustomInput
                        className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                        id="amount"
                        inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                        name="amount"
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount e.g 5000"
                        required
                        type="number"
                        value={amount}
                      />
                    </Form>
                  </Formik>
                  <div className="pb-5">
                    <p className="mt-8 font-medium text-16 leading-[22px]">Use Payment Gateway</p>
                    <div className="h-[60px] border-2 w-full rounded-md mt-4 flex justify-center items-center m-auto ">
                      <Icon name="paystack" />
                    </div>
                    <CustomButton customClass=" h-[60px] w-full mt-[52px] rounded-lg bg-HavannaGreen-primary text-white mb-5 " onClick={() => {
                      initializePayment(onSuccess, onClose)
                    }} title="Pay" type="submit"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundWallet;
