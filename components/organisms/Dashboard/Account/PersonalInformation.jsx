import axios from "axios";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import Icon from "@components/atoms/Icons";
// import { REGEX } from "@components/shared/libs/helpers.js";

import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";
// import CustomLink from "@atoms/CustomLink/CustomLink";

import { baseUrl } from "../../../../config";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is compulsory"),
  lastName: Yup.string().required("This field is compulsory"),
  email: Yup.string().email("Invalid email").required("This field is compulsory"),
  phoneNumber: Yup.number().min(11).required("This field is compulsory"),
});
const PersonalInformation = () => {
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("");

  const router = useRouter();

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  const handleSubmit = (values) => {
    setLoading(true);
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
        phoneNumber: values.phoneNumber.toString(),
        password: values.password,
      },
    })
      .then((response) => {
        setLoading(false);
        toast(`${response.data.message}. Please verify your email via link sent to your email.`);
        router.push("/auth/login");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast(`${error.response.data.message} `);
      });
  };
  return (
    <section className="font-mulish bg-HavannaGreen-light px-6 ">
      <h1 className=" font-bold text-24 leading-8 text-[#3B3F42] items-center pt-8 mb-10 ">My Account</h1>
      <div className="smallLaptop:w-[840px]  bg-white py-6 rounded-xl shadow-xl">
        <div className="flex justify-center items-center flex-col">
          <Icon name="userProfile" />
          <p className="font-bold text-16 leading-[22px] mt-[10px]">Upload your profile picture</p>
        </div>
        <h1 className="font-bold text-20 leading-[26px] mt-10 smallLaptop:pl-11">Personal Information</h1>

        <ToastContainer />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
          {() => (
            <Form className="smallLaptop:flex flex-wrap smallLaptop:pl-11 px-3 mt-6 gap-8">
              <div className="smallLaptop:grid items-center grid-cols-2 gap-8">
                <div className="mt-4 ">
                  <label className="font-bold text-base" htmlFor="">
                    First Name
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
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
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
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
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
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
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
                        border-2 `}
                    id="phoneNumber"
                    inputClassName="placeholder:text-14 outline-none 
                         placeholder:text-citiGray-300 "
                    name="phoneNumber"
                    placeholder="+234**********"
                    type="number"
                  />
                </div>

                <div className="mt-4 ">
                  <label className="font-bold text-base" htmlFor="">
                    Date of Birth
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
                        border-2  `}
                    id="date"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                    name="date"
                    placeholder="date"
                    type="date"
                  />
                </div>
                <div className="mt-4 ">
                  <label className="font-bold text-base" htmlFor="">
                    Address
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
                        border-2  `}
                    id="address"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                    name="Address"
                    placeholder="25,Idowu Street,Yaba,Lagos"
                    type="text"
                  />
                </div>
                <div className=" mt-8">
                  <h1>Gender</h1>
                  <label className="">
                    <input checked={gender === "male"} className="text-HavannaGreen-primary" onChange={handleGenderChange} type="radio" value="male" />
                    Male
                  </label>
                  <label className="pl-[26px]">
                    <input checked={gender === "female"} className="text-HavannaGreen-primary" onChange={handleGenderChange} type="radio" value="female" />
                    Female
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="mt-4 ">
                  <label className="font-bold text-base" htmlFor="">
                    First Name
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
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
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
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
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
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
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
                        border-2 `}
                    id="phoneNumber"
                    inputClassName="placeholder:text-14 outline-none 
                         placeholder:text-citiGray-300 "
                    name="phoneNumber"
                    placeholder="Phone Number"
                    type="number"
                  />
                </div>
                <div className=" mt-8">
                  <h1>Gender</h1>
                  <label className="">
                    <input checked={gender === "male"} className="text-HavannaGreen-primary" onChange={handleGenderChange} type="radio" value="male" />
                    Male
                  </label>
                  <label className="pl-[26px]">
                    <input checked={gender === "female"} className="text-HavannaGreen-primary" onChange={handleGenderChange} type="radio" value="female" />
                    Female
                  </label>
                </div>
              </div>

              <div className="mt-10 mb-24">
                <Button customClass="rounded-[8px] smallLaptop:w-[360px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary " isLoading={loading} title=" Save changes" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default PersonalInformation;
