import { Form, Formik } from "formik";
import React from "react";

import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";

const Otp = () => {
  return (
    <div className="bg-white w-[532px] px-11 py-10 h-[326px] rounded-xl font-mulish shadow-xl ">
      <h1 className=" ">Enter OTP Code</h1>
      <p className="mt-3 mb-[30px]">Enter the OTP code sent to your number.</p>

      <Formik
        initialValues={{
          code1: "",
          code2: "",
          code3: "",
          code4: "",
          code5: "",
          code6: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validate={(values) => {
          const errors = {};
          const codeRegex = /^\d{1}$/;
          if (!codeRegex.test(values.code1)) {
            errors.code1 = "Invalid code";
          }
          if (!codeRegex.test(values.code2)) {
            errors.code2 = "Invalid code";
          }
          if (!codeRegex.test(values.code3)) {
            errors.code3 = "Invalid code";
          }
          if (!codeRegex.test(values.code4)) {
            errors.code4 = "Invalid code";
          }
          if (!codeRegex.test(values.code5)) {
            errors.code5 = "Invalid code";
          }
          if (!codeRegex.test(values.code6)) {
            errors.code6 = "Invalid code";
          }
          return errors;
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <div className="flex gap-[20px]">
              <FormikCustomInput className="border-2 w-[60px] h-[60px] " maxLength="1" name="code1" size="1" type="text" />
              <FormikCustomInput className="border-2 w-[60px] h-[60px] " maxLength="1" name="code2" size="1" type="text" />
              <FormikCustomInput className="border-2 w-[60px] h-[60px] " maxLength="1" name="code3" size="1" type="text" />
              <FormikCustomInput className="border-2 w-[60px] h-[60px] " maxLength="1" name="code4" size="1" type="text" />
              <FormikCustomInput className="border-2 w-[60px] h-[60px] " maxLength="1" name="code5" size="1" type="text" />
              <FormikCustomInput className="border-2 w-[60px] h-[60px] " maxLength="1" name="code6" size="1" type="text" />
            </div>
            <br />
            <button className="w-[444px] h-[58px] rounded-lg bg-HavannaGreen-primary mt-10 text-white" disabled={isSubmitting} type="submit">
              Verify OTP
            </button>
            {Object.keys(errors).length > 0 && (
              <div>
                {Object.keys(errors).map((field) => (
                  <div key={field} style={{ color: "red" }}>
                    {errors[field]}
                  </div>
                ))}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Otp;
