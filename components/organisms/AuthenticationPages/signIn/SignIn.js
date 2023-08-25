import { Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { REGEX } from "@components/shared/libs/helpers.js";
import { SignInUser } from "@components/Api";
import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";
import CustomLink from "@atoms/CustomLink/CustomLink";
import Logo from "@images/svg/Logo.svg";

const signInSchema = Yup.object().shape({
  emailAddress: Yup.string().email("Invalid email").required("This field is compulsory"),
  password: Yup.string().min(5).max(50, "Too Long!").matches(REGEX.password, { message: "please create a stronger password" }).required("This field is compulsory"),
});

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (values) => {
    setLoading(true);
    SignInUser(values)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("userEmail", response.data.data.emailAddress);
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
    <section
      className={`smallLaptop:pt-28 min-h-screen  pt-20 smallLaptop:pb-32 px-4 tablet:px-0
       font-mulish
     smallLaptop:bg-HavannaGreen-primary  bg-HavannaGreen-light`}
    >
      <div className="  ">
        <div className="smallLaptop:flex hidden justify-center">
          <Link href="/">
            <a>
              <span className="sr-only">Havanna</span>
              <Image alt="Havanna" className="h-7 md:w-auto tablet:h-8 lg:h-9 ml-30  " src={Logo} />
            </a>
          </Link>
        </div>

        <div
          className=" smallLaptop:bg-white tablet:mt-[154px] mt-8 
            rounded-[20px] tablet:m-auto tablet:rounded-[32px]
             w-full tablet:w-[60%] smallLaptop:px-[120px]   "
        >
          <Formik
            initialValues={{
              emailAddress: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={signInSchema}
          >
            {() => (
              <Form>
                <div>
                  <div className="flex justify-center">
                    <div>
                      <h1
                        className=" text-center font-bold text-[28px] leading-9 
                        pt-10 text-[#3B3F42] "
                      >
                        Welcome back
                      </h1>

                      <p className="font-medium text-base pt-3 pb-16 hidden smallLaptop:block leading-5   ">Log in to your account and start investing.</p>
                      <p className="smallLaptop:hidden font-mulish font-medium pt-3 leading-5 items-center text-center ">
                        Log in to your account and start investing with <span className="text-HavannaGreen-tertiaryMain">Havanna</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      Email Address
                    </label>
                    <FormikCustomInput
                      className={`rounded-md w-full h-[46px] mt-2 border-2  `}
                      id="email"
                      inputClassName="placeholder:text-14 outline-none"
                      name="emailAddress"
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
                      inputClassName="placeholder:text-14 outline-none"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <div className="mt-3 text-HavannaGreen-primary font-mulish font-medium text-14 leading-[18px] flex justify-end cursor-pointer ">
                    <CustomLink destination="/auth/forgot-password">Forgot Password?</CustomLink>
                  </div>
                </div>
                <div className="mt-10 ">
                  <Button customClass=" text-4 h-[46px] text-white bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md" isLoading={loading} title=" Log In" />
                </div>
                <div className="pt-[26px] flex justify-center ">
                  <div className=" pb-20 flex">
                    Don’t have an account?&nbsp;
                    <span className="font-bold text-base text-HavannaGreen-primary">
                      <CustomLink destination="/auth/sign-up">Create an account</CustomLink>
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
