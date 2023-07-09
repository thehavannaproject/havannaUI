import { Formik, Form } from "formik";

import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
// import { useState } from 'react';

const Ptp = ({ handleClose }) => {
  // const [otpCode, setOtpCode] = useState('');

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("backend/api/otp", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white w-[532px] px-11 py-10 h-[326px] rounded-xl font-mulish shadow-xl">
      <div className=" ">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h1 className=" ">Enter OTP Code</h1>
        <p className="mt-3 mb-[30px]">Enter the OTP code sent to your number.</p>

        <Formik initialValues={{ otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", otp6: "" }} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="flex ">
                <FormikCustomInput className=" border-2 rounded-lg text-5xl" name="otp1" type="number" />
                <FormikCustomInput className=" border-2 rounded-lg text-5xl" name="otp2" type="number" />
                <FormikCustomInput className=" border-2 rounded-lg text-5xl" name="otp3" type="number" />
                <FormikCustomInput className=" border-2 rounded-lg text-5xl" name="otp4" type="number" />
                <FormikCustomInput className=" border-2 rounded-lg text-5xl" name="otp5" type="number" />
                <FormikCustomInput className=" border-2 rounded-lg text-5xl" name="otp6" type="number" />
              </div>
              <button className=" w-[444px] h-[58px] rounded-lg bg-HavannaGreen-primary mt-10 text-white" disabled={isSubmitting} type="submit">
                Verify
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Ptp;
