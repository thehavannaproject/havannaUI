import { Form, Formik } from "formik";
import React from "react";

import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";

const WithdrawFund = ({ setWithdraw }) => {
  const handleCloseModal = () => {
    setWithdraw(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="">
        <div className="bg-white w-[532px]  rounded-xl shadow-md">
          <Icon className="flex cursor-pointer justify-end pr-[19px] pt-[21px]" name="closeModal" onClick={handleCloseModal} />
          <div className="modal-content px-11 w-[532px]">
            <div>
              <h2 className="font-bold text-18 leading-[24px] text-[#3B3F42] ">Withdraw Money</h2>
              <p className="mt-3 font-medium text-16 leading-[22px] ">Enter an amount to fund your wallet with.</p>
              <div className="mt-8 ">
                <Formik initialValues={{ amount: "" }}>
                  <Form>
                    <div>
                      <label htmlFor="">Amount to Withdraw</label>
                      <FormikCustomInput
                        className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                        id="amount"
                        inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                        name="amount"
                        placeholder="Enter amount e.g 5,000"
                        required
                        type="number"
                      />
                    </div>
                    <div className="mt-8">
                      <label htmlFor="">Enter Password</label>
                      <FormikCustomInput
                        className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                        id="password"
                        inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                        name="password"
                        placeholder="Havanna password"
                        required
                        type="text"
                      />
                    </div>
                  </Form>
                </Formik>
                <div>
                  <p className="mt-8 font-bold text-18 leading-[24px]">Use Payment Gateway</p>
                  <button className="h-[60px] border-2 w-full rounded-md mt-4 flex justify-center items-center m-auto ">
                    <Icon name="paystack" />
                  </button>
                  <button className="h-[60px] w-full mt-[52px] rounded-lg bg-HavannaGreen-primary text-white mb-10 ">Withdraw Money</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawFund;
