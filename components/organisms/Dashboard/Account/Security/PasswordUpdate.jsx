import { Form, Formik } from "formik";
import React, { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import { AuthService } from "@components/shared/api/auth";
import { UpdateUserPassword } from "@components/shared/api";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import { REGEX } from "@components/shared/libs/helpers";

const PasswordUpdate = ({ SetPasswordUpdates }) => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    const payload = {
      emailAddress: userDetails.emailAddress,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    };
    UpdateUserPassword(payload)
      .then((res) => {
        if(res.responseCode === 200) {
          setShowSuccessModal(true);
        }
        setLoading(false);
      })
      .catch(() => {
        toast.error("Error updating password")
        setLoading(false);
      });
  };

  const handlePasswordClose = () => {
    SetPasswordUpdates(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="bg-white rounded-xl w-[532px]">
        <Icon className="flex cursor-pointer justify-end pr-[21px] pt-[21px]" name="closeModal" onClick={handlePasswordClose} />
        <div className=" px-11  ">
          <h1 className="text-18 font-bold leading-6 ">Update Password</h1>
          <p className="mt-3">Update your password by creating a new one.</p>
          <div>
            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => handleSubmit(values)}
              validate={(values) => {
                const errors = {};
                if (!REGEX.password.test(values.newPassword)) {
                  errors.newPassword = "Password must be greater than 8 and must contain at least 1 uppercase, number and special character";
                }
                if(values.newPassword !== values.confirmPassword) {
                  errors.confirmPassword = "Password does not match";
                }
                return errors;
              }}
            >
              <Form>
                <div className="mt-4 ">
                  <label className="font-bold text-base" htmlFor="">
                    Current Password
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] w-full mt-1 
                        border-2  `}
                    icon="eyeIconSolid"
                    id="oldPassword"
                    inputClassName="placeholder:text-32 outline-none
                         placeholder:text-citiGray-300 font-bold "
                    name="oldPassword"
                    required
                    type="password"
                  />
                </div>
                <div className="mt-4  ">
                  <label className="font-bold text-base" htmlFor="">
                    New Password
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] w-full h-[60px] mt-1 
                        border-2  `}
                    icon="eyeIconSolid"
                    id="newPassword"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 font-bold "
                    name="newPassword"
                    required
                    type="password"
                  />
                </div>
                <div className="mt-4  ">
                  <label className="font-bold text-base" htmlFor="">
                    Confirm New Password
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] w-full h-[60px] mt-1 
                        border-2  `}
                    icon="eyeIconSolid"
                    id="confirmPassword"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 font-bold "
                    name="confirmPassword"
                    required
                    type="password"
                  />
                </div>
                <div className="mt-8 mb-[60px]">
                  <CustomButton customClass="rounded-[8px] text-white w-full h-[58px] bg-HavannaGreen-primary " isLoading={loading} title="Update Password" />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <CustomModal cardClassName="w-1/2" toggleVisibility={() => setShowSuccessModal(false)} visibility={showSuccessModal}>
        <div className="bg-white h-[240px] mx-6 rounded-xl font-mulish">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-[#3B3F42] text-18 font-bold mb-6">Password Updated</h1>
            <CheckCircleIcon color="#39876B" width={40} />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default PasswordUpdate;
