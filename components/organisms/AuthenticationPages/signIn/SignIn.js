import axios from "axios";
import { Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import { REGEX } from "@components/shared/libs/helpers.js";

import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";
import CustomLink from "@atoms/CustomLink/CustomLink";

import Logo from "@images/svg/Logo.svg";

import { baseUrl } from "../../../../config";

import "react-toastify/dist/ReactToastify.css";

const signInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This field is compulsory"),
  password: Yup.string().min(5).max(50, "Too Long!").matches(REGEX.password, { message: "please create a stronger password" }).required("This field is compulsory"),
});

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (values) => {
    setLoading(true);

    axios({
      method: "POST",
      url: `${baseUrl}/account/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        emailAddress: values.email,
        password: values.password,
      },
    })
      .then((response) => {
        response;
        setLoading(false);
        router.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        error;
        toast(`Email or password is incorrect `);
      });
  };

  return (
    <section className={`pt-14 smallLaptop:pt-28  pb-28 smallLaptop:pb-32 px-4 tablet:px-0 font-mulish bg-HavannaGreen-primary`}>
      <div className="  ">
        <div className="flex justify-center">
          <Link href="/">
            <a>
              <span className="sr-only">Havanna</span>
              <Image alt="Havanna" className="h-7 md:w-auto tablet:h-8 lg:h-9 ml-30  " src={Logo} />
            </a>
          </Link>
        </div>

        <div
          className=" bg-white tablet:mt-[154px] mt-8 
            rounded-[20px] tablet:m-auto tablet:rounded-[32px]
             w-full tablet:w-[60%] px-[120px]  "
        >
          <ToastContainer />
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={signInSchema}
          >
            {() => (
              <Form>
                <div className="m-auto justify-center items-center  ">
                  <div className="flex justify-center">
                    <div>
                      <h1 className="font-bold text-[32px] pt-10 text-center   ">Welcome back</h1>
                      <p className="font-medium text-base pt-3 pb-16  ">Log in to your account and start investing.</p>
                    </div>
                  </div>

                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
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
                    <label className="font-bold text-base" htmlFor="">
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
                </div>
                <div className="mt-10 ">
                  <Button customClass=" text-4 h-[46px] text-white bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md" isLoading={loading} title=" Log In" />
                </div>
                <div className="pt-[26px] flex justify-center ">
                  <div className=" pb-20 flex">
                    Don’t have an account?&nbsp;
                    <span className="font-bold text-base text-HavannaGreen-primary">
                      <CustomLink destination="sign-up">Create an account</CustomLink>
                    </span>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
