import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import axios from "axios";
import { baseUrl } from "config";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import Icon from "@components/atoms/Icons";
import { setProfile } from "@components/store/Account";
import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";


const PersonalInformation = () => {
  const [loading, setLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);


  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = (values) => {
    setOpen(true);
    dispatch(setProfile({ ...values, profilePicture }));
    console.log(values);
  };


  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.Account);
  const { user } = useSelector((state) => state.Auth);

  const firstName = user?.customerName?.split(" ")[0];



  const router = useRouter();

  const [reference, setRefernce] = useState("");
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = Array(6)
    .fill()
    .map(() => useRef());
  const [phoneNumber, setPhoneNumber] = useState("234");

  const mergeOtp = otp.join("");

  const handleOtpChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    if (event.target.value !== "" && index < newOtp.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  useEffect(() => {
    setRefernce(localStorage.getItem("reference"));
  }, []);

  const handleVerify = () => {
    setLoading(true);
    axios({
      method: "POST",
      url: `${baseUrl}/account/verify-otp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        verification_code: mergeOtp,
        verification_reference: reference,
      },
    })
      .then((response) => {
        response;
        setLoading(false);
        router.push("/dashboard");
      })
      .catch(() => {
        toast.error(`OTP is incorrect`);
        setLoading(false);
      });
  };

  const handleSend = () => {
    axios({
      method: "POST",
      url: `${baseUrl}/account/send-otp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        customer_mobile_number: phoneNumber,
        customer_email_address: user.emailAddress,
        first_name: firstName,
      },
    })
      .then((response) => {
        localStorage.setItem("reference", response.data.data.reference);
        router.push("");
      })
      .catch(() => {
        toast.error("OTP could not be sent");
      });
  };

  useEffect(() => {
    if (phoneNumber.length > 12) {
      handleSend();
    }
  }, [phoneNumber]);

  const handleClose = () => {
    setOpen(false);
  };

  const validateDateOfBirth = (value) => {
    const dateOfBirth = new Date(value);
    const ageDiffMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (age < 18) {
      return "You must be at least 18 years old";
    }
  };

  return (
    <section className="font-mulish bg-HavannaGreen-light px-6 h-full ">
      <div className="smallLaptop:w-[840px]  bg-white py-6 rounded-xl shadow-xl">
        <div className="flex justify-center items-center">
          <div className="items-center grid place-items-center">
            {profilePicture ? (
              <img alt="Profile Picture" className="rounded-full w-24 h-24" src={URL.createObjectURL(profilePicture)} />
            ) : (
              <Icon className="w-24 h-24" name="userProfile" />
            )}
            <input accept=".png, .jpeg, .jpg" className="mt-10" onChange={handleProfilePictureUpload} type="file" />
            <p className="font-bold text-16 leading-[22px] mt-[10px]">Upload your profile picture</p>
          </div>
        </div>




        <h1 className="font-bold text-20 leading-[26px] mt-10 smallLaptop:pl-11">Personal Information</h1>

        <Formik
          initialValues={{
            firstName: profile.firstName || "",
            lastName: profile.lastName || "",
            email: profile.email || "",
            phoneNumber: profile.phoneNumber || phoneNumber,
            gender: profile.gender || "",
            occupation: profile.occupation || "",
            date: profile.date || "",
            address: profile.address || "",
          }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors = {};

            // validate date of birth
            if (values.date && validateDateOfBirth(values.date)) {
              errors.date = validateDateOfBirth(values.date);
            }

            return errors;
          }}
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
                    maxLength={13}
                    name="phoneNumber"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    placeholder="234**********"
                    required
                    type="number"
                    value={phoneNumber}
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
                    placeholder="Date of Birth"
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
                  <h1 className="font-bold text-16 leading-[22px] ">Gender</h1>
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
              <div className="mt-10 mb-24">
                <Button customClass="rounded-[8px] smallLaptop:w-[240px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary " isLoading={loading} title=" Save information" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="bg-slate-400 ">
            <div className="bg-white w-[532px] px-11 py-10  rounded-xl font-mulish shadow-xl ">
              <Icon className="flex cursor-pointer justify-end" name="otpCancel" onClick={handleClose} />
              <h1 className=" ">Enter OTP Code</h1>
              <p className="mt-3 mb-[30px]">Enter the OTP code sent to your number.</p>
              <Formik
                initialValues={{
                  otp: "",
                }}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form>
                    <div className="flex gap-4 text-[40px] justify-center  ">
                      <input
                        className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                        maxLength={1}
                        name="otp"
                        onChange={(e) => handleOtpChange(0, e)}
                        ref={refs[0]}
                        type="number"
                      />
                      <input
                        className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                        maxLength={1}
                        name="otp1"
                        onChange={(e) => handleOtpChange(1, e)}
                        ref={refs[1]}
                        type="number"
                      />
                      <input
                        className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                        maxLength={1}
                        name="otp2"
                        onChange={(e) => handleOtpChange(2, e)}
                        ref={refs[2]}
                        type="number"
                      />
                      <input
                        className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                        maxLength={1}
                        name="otp3"
                        onChange={(e) => handleOtpChange(3, e)}
                        ref={refs[3]}
                        type="number"
                      />
                      <input
                        className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                        maxLength={1}
                        name="otp4"
                        onChange={(e) => handleOtpChange(4, e)}
                        ref={refs[4]}
                        type="number"
                      />
                      <input
                        className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                        maxLength={1}
                        name="otp5"
                        onChange={(e) => handleOtpChange(5, e)}
                        ref={refs[5]}
                        type="number"
                      />
                    </div>
                  </Form>
                )}
              </Formik>
              <Button className="bg-HavannaGreen-primary text-white w-full h-[58px] rounded-lg mt-10 mb-[72px] " isLoading={loading} onClick={handleVerify}>
                Verify Otp
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PersonalInformation;
