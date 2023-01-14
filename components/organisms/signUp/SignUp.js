import axios from "axios";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import { REGEX } from "@components/shared/libs/helpers.js";

import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";

import Logo from "@images/SignInimages/Logo.svg";

import { baseUrl } from "../../../config";

import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is compulsory"),
  lastName: Yup.string().required("This field is compulsory"),
  email: Yup.string().email("Invalid email").required("This field is compulsory"),
  phoneNumber: Yup.string().min(11).max(50, "Too Long!").required("This field is compulsory"),
  password: Yup.string().min(5).max(50, "Too Long!").matches(REGEX.password, { message: "Please create a stronger password" }).required("Please Input a password"),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (values) => {
    setLoading(true);
    console.log(values);
    axios({
      method: "POST",
      url: `${baseUrl}/account/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
      },
    })
      .then((response) => {
        setLoading(false);
        toast(response.message);
        router.push("/");
      })
      .catch((error) => {
        setLoading(false);
        toast(`${error.message} `);
      });
  };

  return (
    <>
      <section
        className={`pt-14 lg:pt-28  pb-28 lg:pb-32 px-5 
      tablet:px-20 smallLaptop:px-[200px] font-mulish
      bg-HavannaGreen-primary`}
      >
        <div className="  ">
          <div className="flex justify-center">
            <Link href="/">
              <a>
                <span className="sr-only">Havanna</span>
                <Image
                  alt="Havanna"
                  className="h-7 md:w-auto tablet:h-8 lg:h-9 
                ml-30  "
                  src={Logo}
                />
              </a>
            </Link>
          </div>

          <div
            className=" bg-white tablet:mt-[154px] mt-8 
            rounded-[20px] tablet:m-auto tablet:rounded-[32px]
            tablet:px-[120px] w-full  px-5 bigLaptop:w-[800px]"
          >
            <div className="flex justify-center">
              <div className="">
                <h1
                  className="font-bold text-[32px] 
                        pt-10   "
                >
                  Get Started
                </h1>
                <p
                  className="font-medium text-base pt-3 
                        pb-16  "
                >
                  Create free account and start investing.
                </p>
              </div>
            </div>
            <ToastContainer />
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={SignupSchema}
            >
              {() => (
                <Form>
                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      First Name
                    </label>
                    <FormikCustomInput
                      className={`rounded-md w-full h-[46px] mt-2 
                        border-2  `}
                      id="firstName"
                      inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>

                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      Last Name
                    </label>
                    <FormikCustomInput
                      className={`rounded-md w-full h-[46px] mt-2 
                        border-2  `}
                      id="lastName"
                      inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      Email Address
                    </label>
                    <FormikCustomInput
                      className={`rounded-md w-full h-[46px] mt-2 
                        border-2  `}
                      id="email"
                      inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                      name="email"
                      placeholder="Your Email"
                      type="email"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-base" htmlFor="">
                      Phone Number
                    </label>
                    <FormikCustomInput
                      className={`rounded-md w-full h-[46px] mt-2 
                        border-2 `}
                      id="phoneNumber"
                      inputClassName="placeholder:text-14 outline-none 
                         placeholder:text-citiGray-300 "
                      name="phoneNumber"
                      placeholder="Phone Number"
                      type="text"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-base" htmlFor="">
                      password
                    </label>
                    <FormikCustomInput
                      className={`rounded-md w-full h-[46px] mt-2 
                        border-2 `}
                      id="password"
                      inputClassName="placeholder:text-14 outline-none
                          placeholder:text-citiGray-300 "
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <div className="mt-10 ">
                    <Button
                      customClass="text-4 h-[46px] text-white 
                      bg-[#0B4340] text-center tablet:text-16 font-bold 
                      !w-full rounded-md"
                      isLoading={loading}
                      title=" Create account"
                    />
                  </div>
                  <div className="pt-[26px] flex justify-center ">
                    <p className=" pb-20">
                      Don’t have an account?&nbsp;
                      <span
                        className="font-bold text-base 
                      text-HavannaGreen-primary   "
                      >
                        Log in
                      </span>
                    </p>
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

export default SignUp;