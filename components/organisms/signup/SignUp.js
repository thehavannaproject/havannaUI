import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { REGEX } from "../../shared/libs/helpers.ts";
import * as Yup from "yup";
import FormikCustomInput from "../../atoms/CustomInput/FormikCustomInput";
import { baseUrl } from "../../../config";
import Image from "next/image";
import Button from "../../atoms/CustomButton/Button";
import Logo from "../../../public/images/Sign In images/Logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";

const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is compulsory"),
  lastName: Yup.string().required("This field is compulsory"),
  email: Yup.string()
    .email("Invalid email")
    .required("This field is compulsory"),
  password: Yup.string()
    .min(5)
    .max(50, "Too Long!")
    .matches(REGEX.password, { message: "Please create a stronger password" })
    .required("Please Input a password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    axios({
      method: "POST",
      url: `${baseUrl}/account/Signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: values.email,
        password: values.password,
      },
    })
      .then((response) => {
        setLoading(false);
        toast(
          `Hi ${response.data.data[0].name}, Your request has been submitted successfully`
        );
        router.push("/");
        values.firstName = "";
        values.lastName = "";
        values.email = "";
        values.password = "";
      })
      .catch((error) => {
        setLoading(false);
        toast(`${error.message} `);
      });
  };

  return (
    <div>
      <section
        className={`pt-14 lg:pt-28  pb-28 lg:pb-32 px-5 tablet:px-20 smallLaptop:px-[200px] font-mulish bg-HavannaGreen-primary`}
      >
        <div className="  ">
          <div className="flex justify-center">
            <Link href="/">
              <a>
                <span className="sr-only">Havanna</span>
                <Image
                  className="h-7 md:w-auto tablet:h-8 lg:h-9 ml-30  "
                  src={Logo}
                  alt="Havanna"
                />
              </a>
            </Link>
          </div>
          <div className=" bg-white tablet:mt-[154px] mt-8 rounded-[20px] tablet:m-auto tablet:rounded-[32px] tablet:px-[120px] w-full  px-5 bigLaptop:w-[800px]">
            <ToastContainer />
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={signUpSchema}
            >
              {() => (
                <Form>
                  <div className="m-auto justify-center items-center  ">
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className="font-bold text-[32px] pt-10   ">
                          Get Started
                        </h1>
                        <p className="font-medium text-base pt-3 pb-16  ">
                          Create free account and start investing.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 ">
                      <label htmlFor="" className="font-bold text-base">
                        First Name
                      </label>
                      <FormikCustomInput
                        className={`rounded-md w-full h-[46px] mt-2 border-2  `}
                        id="firstName"
                        inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                        name="firstName"
                        placeholder="First Name"
                        type="name"
                      />
                    </div>
                    <div className="mt-4 ">
                      <label htmlFor="" className="font-bold text-base">
                        Last Name
                      </label>
                      <FormikCustomInput
                        className={`rounded-md w-full h-[46px] mt-2 border-2  `}
                        id="lastName"
                        inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                        name="lastName"
                        placeholder="Last Name"
                        type="name"
                      />
                    </div>
                    <div className="mt-4 ">
                      <label htmlFor="" className="font-bold text-base">
                        Email Address
                      </label>
                      <FormikCustomInput
                        className={`rounded-md w-full h-[46px] mt-2 border-2  `}
                        id="email"
                        inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                        name="email"
                        placeholder="Your Email"
                        type="email"
                      />
                    </div>

                    <div className="mt-4">
                      <label htmlFor="" className="font-bold text-base">
                        Password
                      </label>
                      <FormikCustomInput
                        className={`rounded-md w-full h-[46px] mt-2 border-2 `}
                        id="password"
                        inputClassName="placeholder:text-14 outline-none  placeholder:text-citiGray-300 "
                        name="password"
                        placeholder="Password"
                        type="text"
                      />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="" className="font-bold text-base">
                        Comfirm password
                      </label>
                      <FormikCustomInput
                        className={`rounded-md w-full h-[46px] mt-2 border-2 `}
                        id="confirmpassword"
                        inputClassName="placeholder:text-14 outline-none  placeholder:text-citiGray-300 "
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="mt-10 ">
                    <Button
                      customClass="text-4 h-[46px] text-white bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md"
                      title=" Create account"
                      isLoading={loading}
                    />
                  </div>
                  <div className="pt-[26px] flex justify-center ">
                    <p className=" pb-20">
                      Don’t have an account?&nbsp;
                      <span className="font-bold text-base text-HavannaGreen-primary   ">
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
    </div>
  );
};

export default SignUp;
