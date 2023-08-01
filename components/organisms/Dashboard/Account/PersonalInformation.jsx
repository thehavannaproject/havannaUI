import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
// import { useRouter } from "next/router";
import moment from "moment";
import Icon from "@components/atoms/Icons";
import { sendPhoneOtp, verifyPhoneOtp } from "@components/Api";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";
import CustomButton from "@atoms/CustomButton/CustomButton";

const PersonalInformation = () => {
  const [loading, setLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  // const router = useRouter();
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = Array(6)
    .fill()
    .map(() => useRef());
  const [phoneNumber, setPhoneNumber] = useState("234");

  const mergeOtp = otp.join("");

  useEffect(() => {
    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    setUserDetails(userDetails);
  }, []);

  const validateDateOfBirth = (value) => {
    const dateOfBirth = new Date(value);
    const ageDiffMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (age < 18) {
      return "You must be at least 18 years old";
    }
  };

  const handleOtpChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);
    if (event.target.value !== "" && index < newOtp.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const sendOtp = () => {
    if (phoneNumber.length === 13) {
      const data = {
        customer_mobile_number: phoneNumber,
        customer_email_address: userDetails.emailAddress,
        first_name: userDetails.firstName,
      };
      setOpen(true);
      sendPhoneOtp(data).then((response) => {
        toast.success("OTP sent successfully");
        localStorage.setItem("reference", response.reference);
      });
    }
  };

  const handleOtp = () => {
    setLoading(true);
    const data = {
      verification_code: mergeOtp,
      verification_reference: localStorage.getItem("reference"),
    };
    verifyPhoneOtp(data)
      .then((response) => {
        response === "invalid token" ? toast.error("Sorry, couldn't verify OTP at the moment, Please try again later") : toast.success("OTP verification is successful");
        setLoading(false);
      })
      .finally(() => setOpen(false));
  };

  const handleSubmit = (values) => {
    if (userDetails.phoneNumberVerificationStatus === false) {
      toast.error("Please verify phone number to proceed.");
    } else {
      console.log(values);
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
              <Icon className="w-24 h-24 mb-4" name="userProfile" />
            )}
            <input accept=".png, .jpeg, .jpg" className="mt-10"  onChange={handleProfilePictureUpload} type="file" />
            <p className="font-bold text-16 leading-[22px] mt-[10px]">Upload your profile picture</p>
          </div>
        </div>

        <h1 className="font-bold text-20 leading-[26px] mt-10 smallLaptop:pl-11">Personal Information</h1>

        <Formik
          enableReinitialize
          initialValues={{
            firstName: userDetails?.firstName || "",
            lastName: userDetails?.lastName || "",
            email: userDetails?.emailAddress || "",
            phoneNumber: userDetails.phoneNumberVerificationStatus === false ? phoneNumber : userDetails.phoneNumber,
            gender: userDetails?.gender || "",
            occupation: userDetails?.occupation || "",
            date: moment(userDetails?.dateOfBirth).format("yyyy-MM-DD") || "",
            address: userDetails?.address || "",
          }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors = {};
            // validate date of birth
            if (values.date && validateDateOfBirth(values.date)) {
              errors.date = validateDateOfBirth(values.date);
            }
            if (values.phoneNumber.length > 13 || values.phoneNumber.length < 13) {
              errors.phoneNumber = "Phone number is invalid";
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
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 border-2  `}
                    id="firstName"
                    inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
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
                <div className="mt-4 relative z-[1]">
                  <label className="font-bold text-base">Phone Number</label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 border-2 `}
                    id="phoneNumber"
                    inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                    maxLength={13}
                    name="phoneNumber"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    placeholder="234**********"
                    required
                    type="number"
                  />
                  <p className="absolute right-2 top-1/2 bg-HavannaGreen-primary text-white px-4 py-1 rounded-md" onClick={sendOtp}>
                    Verify
                  </p>
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
                      <FormikCustomInput checked={userDetails.gender === "Male" ? true : false} name="gender" required type="radio" value={values.gender} />
                    </div>
                    <div>
                      <label className="">Female</label>
                      <FormikCustomInput checked={userDetails.gender === "Female" ? true : false} name="gender" required type="radio" value={values.gender} />
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
        <CustomModal visibility={open}>
          <div>
            <div className="bg-white text-HavannaBlack-primary px-11 py-10  rounded-xl font-mulish shadow-xl ">
              <Icon className="flex cursor-pointer justify-end" name="otpCancel" onClick={() => setOpen(false)} />
              <h1 className=" ">Enter OTP Code</h1>
              <p className="mt-3 mb-[30px]">Enter the OTP code sent to your number.</p>
              <Formik
                initialValues={{
                  otp: "",
                }}
                onSubmit={handleOtp}
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
              <CustomButton
                customClass="!text-white bg-HavannaGreen-primary text-white w-full h-[58px] rounded-lg mt-10 mb-[72px] "
                isLoading={loading}
                onClick={handleOtp}
                title="Verify Otp"
              />
            </div>
          </div>
        </CustomModal>
    </section>
  );
};

export default PersonalInformation;
