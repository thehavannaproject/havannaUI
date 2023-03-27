import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Icon from "@components/atoms/Icons";
import { setProfile } from "@components/store/Account";

import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";

const PersonalInformation = ({ setActiveTab }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.Account);
  console.log(profile);
  const handleSubmit = (values) => {
    setLoading(true);
    setActiveTab(1);
    dispatch(setProfile(values));
    console.log(values);
  };
  return (
    <section className="font-mulish bg-HavannaGreen-light px-6 h-full ">
      <div className="smallLaptop:w-[840px]  bg-white py-6 rounded-xl shadow-xl">
        <div className="flex justify-center items-center flex-col">
          <Icon name="userProfile" />
          <p className="font-bold text-16 leading-[22px] mt-[10px]">Upload your profile picture</p>
        </div>
        <h1 className="font-bold text-20 leading-[26px] mt-10 smallLaptop:pl-11">Personal Information</h1>

        <Formik
          initialValues={{
            firstName: profile.firstName || "",
            lastName: profile.lastName || "",
            email: profile.email || "",
            phoneNumber: profile.phoneNumber || "",
            gender: profile.gender || "",
            occupation: profile.occupation || "",
            date: profile.date || "",
            address: profile.address || "",
          }}
          onSubmit={handleSubmit}
        >
          {(values) => (
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
                    required
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
                    required
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
                    required
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
                    required
                    type="number"
                  />
                </div>

                <div className="mt-4 ">
                  <label className="font-bold text-base" htmlFor="">
                    Occupation
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
                        border-2  `}
                    id="occupation"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                    name="occupation"
                    placeholder="Lawyer"
                    required
                    type="text"
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
                    required
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
                    name="address"
                    placeholder="25,Idowu Street,Yaba,Lagos"
                    required
                    type="text"
                  />
                </div>
                <div className=" mt-8">
                  <h1>Gender</h1>
                  <div className="flex">
                    <div>
                      <label className="">Male</label>
                      <FormikCustomInput name="gender" required type="radio" value={values.gender} />
                    </div>
                    <div>
                      <label className="">Female</label>
                      <FormikCustomInput name="gender" required type="radio" value={values.gender} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-[52px]">Need to change any information?Contact us</p>
              <div className="mt-10 mb-24">
                <Button customClass="rounded-[8px] smallLaptop:w-[360px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary " isLoading={loading} title=" Next" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default PersonalInformation;
