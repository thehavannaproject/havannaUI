import { Form, Formik } from "formik";
import React, { useState } from "react";

import * as Yup from "yup";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import { SetTransactionPin, UpdateTransactionPin } from "@components/api";
import { AuthService } from "@components/api/auth";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import CustomButton from "@components/atoms/CustomButton/CustomButton";

const PinSet = ({ setShow }) => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { profile } = useSelector((state) => state.Account);

  const pinSchema = Yup.object().shape({
    pin: Yup.string().min(4, "Pin must be 4 digits").max(4, "Pin cannot exceed 4 digits").required("This field is compulsory"),
    confirmPin: Yup.string()
      .required("This field is compulsory")
      .test("match", "Pins do not match", function (value) {
        return value === this.parent.pin;
      }),
  });
  const handleSubmit = (values) => {
    setLoading(true);

    if (profile.transactionPinCreated) {
      const data = {
        oldPin: String(values?.pin),
        newPin: String(values?.newPin),
        confirmPin: String(values?.confirmPin),
        email: userDetails?.emailAddress,
      };
      UpdateTransactionPin(data)
        .then((res) => {
          if (res.responseCode === 200) {
            setShowSuccessModal(true);
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      const payload = {
        transactionPin: String(values?.pin),
        email: userDetails?.emailAddress,
      };
      SetTransactionPin(payload)
        .then((res) => {
          setLoading(false);
          if (res.responseCode === 200) {
            setShowSuccessModal(true);
          }
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  const handleSetclose = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="bg-white rounded-xl w-[532px]">
          <Icon className="flex cursor-pointer justify-end pr-[21px] pt-[21px]" name="closeModal" onClick={handleSetclose} />
          <div className=" px-11  ">
            <h2 className="text-18 font-bold leading-6 ">Set Your Transaction PIN</h2>
            <div>
              <Formik
                initialValues={{
                  pin: "",
                  confirmPin: "",
                  newPin: "",
                }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={pinSchema}
              >
                <Form>
                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      {profile.transactionPinCreated ? "Old Pin" : "Set Pin"}
                    </label>
                    <FormikCustomInput
                      className={`rounded-[4px] w-full h-[60px] mt-2 
                        border-2  `}
                      icon="eyeIconSolid"
                      id="pin"
                      inputClassName="placeholder:text-32 outline-none
                         placeholder:text-citiGray-300 font-bold "
                      name="pin"
                      required
                      type="number"
                    />
                  </div>
                  {profile.transactionPinCreated && (
                    <div className="mt-4 ">
                      <label className="font-bold text-base" htmlFor="">
                        New Pin
                      </label>
                      <FormikCustomInput
                        className={`rounded-[4px] w-full h-[60px] mt-2 
                        border-2  `}
                        icon="eyeIconSolid"
                        id="newPin"
                        inputClassName="placeholder:text-32 outline-none
                         placeholder:text-citiGray-300 font-bold "
                        name="newPin"
                        required
                        type="number"
                      />
                    </div>
                  )}
                  <div className="mt-5  ">
                    <label className="font-bold text-base" htmlFor="">
                      Confirm Pin
                    </label>
                    <FormikCustomInput
                      className={`rounded-[4px] w-full h-[60px] mt-2 
                        border-2  `}
                      icon="eyeIconSolid"
                      id="confirmPin"
                      inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 font-bold "
                      name="confirmPin"
                      required
                      type="number"
                    />
                  </div>
                  <div className="mt-10 mb-24">
                    <CustomButton
                      customClass="rounded-[8px] text-white w-full h-[58px] bg-HavannaGreen-primary "
                      isLoading={loading}
                      title={profile.transactionPinCreated ? "Update Pin" : "Set Pin"}
                    />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <CustomModal cardClassName="w-1/2" toggleVisibility={setShowSuccessModal} visibility={showSuccessModal}>
        <div className="bg-white h-[240px] mx-6 rounded-xl font-mulish">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-[#3B3F42] text-18 font-bold mb-6">Transaction PIN Set</h1>
            <CheckCircleIcon color="#39876B" width={40} />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default PinSet;
