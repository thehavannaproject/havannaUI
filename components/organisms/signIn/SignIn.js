import { useState } from "react";
import * as Animate from "react-reveal";
import axios from "axios";
import {REGEX} from "../../shared/libs/helpers.ts"
import * as Yup from "yup";
import FormikCustomInput from "../../atoms/CustomInput/FormikCustomInput";
import { baseUrl } from "../../../config";
import Button from "../../atoms/CustomButton/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SlantBox from "../../blocks/slantBox";
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
    <div>
      <section
        className={`pt-24 lg:pt-28 pb-28 lg:pb-32 relative bg-[#EDFFFE]`}
      >
        <div className="container px-4 mx-auto">
          <Animate.Fade bottom>
            <div className="flex justify-center w-full">
              <div className="relative">
                <div className="absolute -top-1 -right-1">
                  <SlantBox />
                </div>
                <div className="z-10 relative">
                  <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                    Get Priority access when we launch
                  </h2>
                </div>
              </div>
            </div>
          </Animate.Fade>

          <div>
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
                  <div>
                    <div className="tablet:w-[50%] tablet:m-auto">
                      <div className="tablet:mt-8 rounded-md">
                        <div className="mt-4 tablet:mt-6">
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
                          <FormikCustomInput
                            className={`rounded-md w-full h-[46px] tablet:mt-6 border`}
                            id="password"
                            inputClassName="placeholder:text-14 outline-none  placeholder:text-citiGray-300 "
                            name="password"
                            placeholder="Password"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mt-8 tablet:mt-8 tablet:w-1/2 tablet:m-auto">
                        <Button
                          customClass="text-12 text-white border h-[46px] bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md"
                          title=" Login"
                          isLoading={loading}
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
    </div>
  );
};

export default SignIn;
