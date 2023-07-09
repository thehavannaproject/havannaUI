import axios from "axios";
import { Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import Icon from "@components/atoms/Icons";
import { REGEX } from "@components/shared/libs/helpers.js";

import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";
import CustomLink from "@atoms/CustomLink/CustomLink";

import Logo from "@images/svg/Logo.svg";

import { baseUrl } from "../../../../config";

import "react-toastify/dist/ReactToastify.css";

const signInSchema = Yup.object().shape({
  newPassword: Yup.string().min(5).max(50, "Too Long!").matches(REGEX.password, { message: "please create a stronger password" }).required("This field is compulsory"),
  confirmPassword: Yup.string().min(5).max(50, "Too Long!").matches(REGEX.password, { message: "please create a stronger password" }).required("This field is compulsory"),
});

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    setToken(localStorage.getItem("token"));
  }, []);

  const handleSubmit = (values) => {
    setLoading(true);

    axios({
      method: "POST",
      url: `${baseUrl}/account/reset-password`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        emailAddress: email,
        token: token,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      },
    })
      .then((response) => {
        response;
        setLoading(false);
        router.push("/auth/reset-comfirmation");
      })
      .catch((error) => {
        setLoading(false);
        error;
        toast(`oops something went wrong `);
      });
  };

  return (
    <section
      className={` smallLaptop:pt-28 min-h-screen  pt-[31px] smallLaptop:pb-32 tablet:px-0
       font-mulish
     smallLaptop:bg-HavannaGreen-primary bg-HavannaGreen-light`}
    >
      <div className=" ">
        <div className="pl-[30px] smallLaptop:hidden">
          <CustomLink destination="/auth/login">
            {" "}
            <Icon name="vectorStroke" />{" "}
          </CustomLink>
        </div>
        <div className="smallLaptop:flex hidden justify-center">
          <Link href="/">
            <a>
              <span className="sr-only">Havanna</span>
              <Image alt="Havanna" className="h-7 md:w-auto tablet:h-8 lg:h-9 ml-30  " src={Logo} />
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div
            className=" smallLaptop:bg-white tablet:mt-[154px] py-[60px] mt-8 
            rounded-[20px] tablet:rounded-[32px] h-[600px]
             w-full tablet:w-[800px] bigLaptop:px-[120px] px-6 smallLaptop:px-[5%] tablet:px-[10%]"
          >
            <ToastContainer />
            <Formik
              initialValues={{
                newPassword: "",
                confirmPassword: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={signInSchema}
            >
              {() => (
                <Form>
                  <div className="font-mulish   ">
                    <div className=" ">
                      <div>
                        <h1 className="font-bold text-20 smallLaptop:text-36 text-center leading-[26px] smallLaptop:leading-10 ">Reset your password</h1>
                        <p className="font-normal smallLaptop:font-medium text-base pt-3 pb-8 smallLaptop:pb-16 leading-4 smallLaptop:leading-6 text-center ">
                          Enter your email address and we will send you a link to reset your password.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 ">
                      <FormikCustomInput
                        className={`rounded-md w-full h-[46px] mt-2 border-2 font-medium font-mulish text-16 leading-6 `}
                        id="newPassword"
                        inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                        name="newPassword"
                        placeholder="New Password"
                        type="password"
                      />
                    </div>
                    <div className="mt-4 ">
                      <FormikCustomInput
                        className={`rounded-md w-full h-[46px] mt-2 border-2 font-medium font-mulish text-16 leading-6 `}
                        id="confirmpassword"
                        inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </div>
                  </div>

                  <div className="mt-10 ">
                    <Button
                      customClass=" text-4 h-[46px] text-white bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md"
                      isLoading={loading}
                      title="Submit "
                      type="submit"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
