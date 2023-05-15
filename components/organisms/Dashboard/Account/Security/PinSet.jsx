import { Form, Formik } from "formik";
import React from "react";

import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";

const PinSet = ({ setShow }) => {
  const handleSubmit = () => {};

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
                  setpin: "",
                  confirmpin: "",
                }}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      Set Pin
                    </label>
                    <FormikCustomInput
                      className={`rounded-[4px] w-full h-[60px] mt-2 
                        border-2  `}
                      icon="eyeIconSolid"
                      id="setpin"
                      inputClassName="placeholder:text-32 outline-none
                         placeholder:text-citiGray-300 font-bold "
                      name="setpin"
                      required
                      type="number"
                    />
                  </div>
                  <div className="mt-5  ">
                    <label className="font-bold text-base" htmlFor="">
                      Confirm Pin
                    </label>
                    <FormikCustomInput
                      className={`rounded-[4px] w-full h-[60px] mt-2 
                        border-2  `}
                      icon="eyeIconSolid"
                      id="confirmpin"
                      inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 font-bold "
                      name="confirmpin"
                      required
                      type="number"
                    />
                  </div>
                  <div className="mt-10 mb-24">
                    <button className="rounded-[8px] text-white w-full h-[58px] bg-HavannaGreen-primary ">Set transaction PIN </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinSet;
