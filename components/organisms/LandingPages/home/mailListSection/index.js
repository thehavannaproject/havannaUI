import React, { useState } from "react";
import * as Animate from "react-reveal";
import SlantBox from "../../../../blocks/slantBox";
import { Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import FormikCustomInput from "../../../../atoms/CustomInput/FormikCustomInput";
import { baseUrl } from "../../../../../config";
import Button from "../../../../atoms/CustomButton/Button";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is compulsory"),
  email: Yup.string()
    .email("Invalid email")
    .required("This field is compulsory"),
  phoneNumber: Yup.string()
    .min(11)
    .max(50, "Too Long!")
    .required("This field is compulsory"),
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
        toast(
          `Hi ${response.data.data[0].name}, Your request has been submitted successfully`
        );
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
                    <div className="tablet:w-[50%] tablet:m-auto">
                      <div className="tablet:mt-8 rounded-md">
                        <div>
                          <FormikCustomInput
                            className={`rounded-md h-[46px] mt-2 w-full border `}
                            id="name"
                            inputClassName={`placeholder:text-14 outline-none placeholder:text-citiGray-300`}
                            name="name"
                            placeholder="Full Name"
                            type="text"
                          />
                        </div>
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
                            id="phoneNumber"
                            inputClassName="placeholder:text-14 outline-none  placeholder:text-citiGray-300 "
                            name="phoneNumber"
                            placeholder="Phone Number"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mt-8 tablet:mt-8 tablet:w-1/2 tablet:m-auto">
                        <Button
                          customClass="text-12 text-white border h-[46px] bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md"
                          title=" Get Easy Access"
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
    </>
  );
};

export default MailListSection;
