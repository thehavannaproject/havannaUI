import { Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { forgotPassword } from "@components/api";

import Icon from "@components/atoms/Icons";

import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";

import CustomLink from "@atoms/CustomLink/CustomLink";

import Logo from "@images/svg/Logo.svg";

import "react-toastify/dist/ReactToastify.css";
const signInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This field is compulsory"),
});

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (values) => {
    setLoading(true);
    forgotPassword(values.email)
      .then((res) => {
        setLoading(false);
        if (res.success == true) {
          router.push({ pathname: "/auth/pin-verify-email", query: { email: values.email } });
        } else {
          toast.error(res.errorMessage, { theme: "colored" });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <section
      className={` smallLaptop:pt-28 min-h-screen   pt-[31px] smallLaptop:pb-32 tablet:px-0
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
             w-full tablet:w-[800px] smallLaptop:px-[120px] px-6  tablet:px-[10%]"
          >
            <ToastContainer />
            <Formik
              initialValues={{
                email: "",
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
                        id="email"
                        inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                        name="email"
                        placeholder="Email address"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="mt-10 ">
                    <Button
                      customClass=" text-4 h-[46px] text-white bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md"
                      isLoading={loading}
                      title="Submit email "
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

export default ForgotPassword;
