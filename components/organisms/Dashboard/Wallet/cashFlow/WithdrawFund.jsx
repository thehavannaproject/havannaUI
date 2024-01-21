import { Form, Formik } from "formik";
import React, { useState } from "react";

import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import ConfirmAmount from "../Mobile/FundWallet/ConfirmAmount";

const WithdrawFund = ({ setIsModalOpen }) => {
  const [amount, setAmount] = useState(0);
  const [showConfirmAmount, setShowConfirmAmount] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="">
        <div className="bg-white w-[532px]  rounded-xl shadow-md">
          <Icon className="flex cursor-pointer justify-end pr-[19px] pt-[21px]" name="closeModal" onClick={handleCloseModal} />
          <div className="modal-content px-11 w-[532px]">
            <div>
              <h2 className="font-bold text-18 leading-[24px] text-[#3B3F42] ">Withdraw Money</h2>
              <p className="mt-3 font-medium text-16 leading-[22px] ">Enter an amount to withdraw from your wallet to your account.</p>
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
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount e.g 5,000"
                        required
                        type="number"
                        value={amount}
                      />
                    </div>
                    <div className="mt-8">
                      <label htmlFor="">Enter Transaction Pin</label>
                      <FormikCustomInput
                        className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                        id="password"
                        inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                        name="password"
                        placeholder="Transaction pin"
                        required
                        type="text"
                      />
                    </div>

                    <div className="mt-8 ">
                      <label htmlFor="">Bank Account Details</label>
                      <div className="mt-2 w-full border-2 px-5 h-[60px] flex justify-between items-center rounded-md">
                        <p>01234567890</p>
                        <p>Guranty Trust Bank</p>
                      </div>
                      <p className="text-HavannaGreen-primary font-bold mt-2">Ashonibare Abimbola Nafisah</p>
                    </div>
                  </Form>
                </Formik>
                <div className="pb-10">
                  <CustomButton
                    customClass=" h-[60px] w-full mt-[52px] rounded-lg bg-HavannaGreen-primary text-white mb-5 "
                    onClick={() => {
                      setShowConfirmAmount(true);
                    }}
                    title="Withdraw Money"
                    type="submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomModal cardClassName="h-screen" visibility={showConfirmAmount}>
        <MenuHeader onClose={() => setShowConfirmAmount(false)} title="Confirm Amount">
          <div className="bg-white h-screen">
            <ConfirmAmount amount={amount} setIsModalOpen={setIsModalOpen} showModal={setShowConfirmAmount} transactionName="withdraw" />
          </div>
        </MenuHeader>
      </CustomModal>
    </div>
  );
};

export default WithdrawFund;
