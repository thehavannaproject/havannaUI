import { useState } from "react";
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

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("This field is compulsory"),
  password: Yup.string()
    .min(5)
    .max(50, "Too Long!")
    .matches(REGEX.password, { message: "please create a stronger password" })
    .required("This field is compulsory"),
});

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    axios({
      method: "POST",
      url: `${baseUrl}/account/login`,
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
        values.email = "";
        values.password = "";
      })
      .catch((error) => {
        setLoading(false);
        toast(`${error.message} `);
      });
  };

  return (
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

        <div className=" bg-white tablet:mt-[154px] mt-8 rounded-[20px] tablet:m-auto tablet:rounded-[32px] tablet:px-[120px] w-full px-5 bigLaptop:w-[800px]">
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
                      <h1 className="font-bold text-[32px] pt-10 text-center   ">
                        Welcome back
                      </h1>
                      <p className="font-medium text-base pt-3 pb-16  ">
                        Log in to your account and start investing.
                      </p>
                    </div>
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
                </div>
                <div className="mt-10 ">
                  <Button
                    customClass="text-4 h-[46px] text-white bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md"
                    title=" Log In"
                    isLoading={loading}
                  />
                </div>
                <div className="pt-[26px] flex justify-center ">
                  <p className=" pb-20">
                    Don’t have an account?&nbsp;
                    <span className="font-bold text-base text-HavannaGreen-primary   ">
                      Create an account
                    </span>
                  </p>
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
