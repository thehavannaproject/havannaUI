import axios from "axios";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as Animate from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";

import { baseUrl } from "../../../../../config";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("This field is compulsory"),
  email: Yup.string().email("Invalid email").required("This field is compulsory"),
  phoneNumber: Yup.string().min(11).max(50, "Too Long!").required("This field is compulsory"),
});

const MailListSection = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (values) => {
    setLoading(true);
    axios({
      method: "POST",
      url: `${baseUrl}/lead/create`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
      },
    })
      .then((response) => {
        setLoading(false);
        toast(`Hi ${response.data.data[0].name}, Your request has been submitted successfully`);
        router.push("/");
        values.name = "";
        values.email = "";
        values.phoneNumber = "";
      })
      .catch((error) => {
        setLoading(false);
        toast(`${error.message} `);
      });
  };

  return (
    <>
      <section className="bg-HavannaGreen-primary text-white font-mulish py-[60px] px-5">
        <div className="">
          <div className="mt-8">
            <ToastContainer />
            <Formik
              initialValues={{
                name: "",
                email: "",
                phoneNumber: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={SignupSchema}
            >
              {() => (
                <Form>
                  <div>
                    <div className="tablet:w-[40%] tablet:m-auto">
                      <Animate.Fade bottom>
                        <h2 className=" leading-8 font-bold text-24">Get Priority access when we launch</h2>
                      </Animate.Fade>
                      <div className="tablet:mt-8 rounded-md">
                        <div>
                          <label className="text-12" htmlFor="fullname">
                            Full Name
                          </label>
                          <FormikCustomInput
                            className={`rounded-md h-[46px] mt-1 w-full border `}
                            id="name"
                            inputClassName={`placeholder:text-14 outline-none placeholder:text-citiGray-300`}
                            name="name"
                            placeholder="Full Name"
                            type="text"
                          />
                        </div>
                        <div className="mt-4 tablet:mt-6">
                          <label className="text-12" htmlFor="email">
                            Email Address
                          </label>
                          <FormikCustomInput
                            className={`rounded-md w-full h-[46px] mt-2 border  `}
                            id="email"
                            inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                            name="email"
                            placeholder="Your Email"
                            type="email"
                          />
                        </div>
                        <div className="mt-4 tablet:mt-6">
                          <label className="text-12" htmlFor="phone">
                            Phone Number
                          </label>
                          <FormikCustomInput
                            className={`rounded-md w-full h-[46px] tablet:mt-6 border`}
                            id="phoneNumber"
                            inputClassName="placeholder:text-14 outline-none  placeholder:text-citiGray-300 "
                            name="phoneNumber"
                            placeholder="Phone Number"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mt-8 tablet:mt-8 tablet:w-full tablet:m-auto">
                        <Button
                          customClass="text-12 text-white border h-[46px] bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md"
                          isLoading={loading}
                          title=" Get Easy Access"
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default MailListSection;
