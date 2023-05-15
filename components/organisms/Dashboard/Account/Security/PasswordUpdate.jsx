import { Form, Formik } from "formik";
import React from "react";

import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";

const PasswordUpdate = ({ SetPasswordUpdates }) => {
  const handleSubmit = () => {};

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
                setpin: "",
                confirmpin: "",
              }}
              onSubmit={handleSubmit}
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
                    id="currentpassword"
                    inputClassName="placeholder:text-32 outline-none
                         placeholder:text-citiGray-300 font-bold "
                    name="currentpassword"
                    required
                    type="text"
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
                    id="Newpassword"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 font-bold "
                    name="Newpassword"
                    required
                    type="text"
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
                    id="confirmpassword"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 font-bold "
                    name="confirmpassword"
                    required
                    type="text"
                  />
                </div>
                <div className="mt-8 mb-[60px]">
                  <button className="rounded-[8px] text-white w-full h-[58px] bg-HavannaGreen-primary ">Update password </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdate;
