import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setNextOfKin } from "@components/store/Account";

import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";

const NextOfKin = ({ setActiveTab }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { nextOfKin } = useSelector((state) => state.Account);
  console.log(nextOfKin);
  const handleSubmit = (values) => {
    setLoading(true);
    setActiveTab(2);
    dispatch(setNextOfKin(values));
    console.log(values);
  };

  return (
    <section className="font-mulish bg-HavannaGreen-light px-6 h-full ">
      {/* <h1 className=" font-bold text-24 leading-8 text-[#3B3F42] items-center pt-8 mb-10 ">My Account</h1> */}
      <div className="smallLaptop:w-[840px]  bg-white py-6 rounded-xl shadow-xl">
        <Formik
          initialValues={{
            firstName: nextOfKin.firstName || "",
            lastName: nextOfKin.lastName || "",
            email: nextOfKin.email || "",
            phoneNumber: nextOfKin.phoneNumber || "",
            relationship: nextOfKin.relationship || "",
            gender: nextOfKin.gender || "",
          }}
          onSubmit={handleSubmit}
        >
          {(values) => (
            <Form className="smallLaptop:flex flex-wrap smallLaptop:pl-11 px-3 gap-8">
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
                    Relationship
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 
                        border-2  `}
                    id="relationship"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                    name="relationship"
                    placeholder="Sister"
                    required
                    type="text"
                  />
                </div>
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
              <p className="mt-[52px]">Need to change any information?Contact us</p>
              <div className="mt-10 mb-10">
                <Button customClass="rounded-[8px] smallLaptop:w-[360px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary " isLoading={loading} title=" Next" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
export default NextOfKin;
