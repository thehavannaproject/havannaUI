import React, { useRef, useState } from "react";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { UserIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { customerCompleteProfile, getCustomerProfile, sendPhoneOtp, verifyPhoneNumber } from "@components/shared/api";
import { AuthService } from "@components/shared/api/auth";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import { setProfile } from "@components/store/Account";
import { replaceFirstZero } from "@components/shared/libs/helpers";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";
import CustomButton from "@atoms/CustomButton/CustomButton";

const PersonalInformation = () => {
  const { profile } = useSelector((state) => state.Account);
  const [loading, setLoading] = useState(false);
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [profilePicture, setProfilePicture] = useState(null);
  const [otp, setOtp] = useState("");
  const [showPhoneModal, setShowPhoneNumber] = useState(false);
  const dispatch = useDispatch();

  const fileInputRef = useRef(null);

  const validateDateOfBirth = (value) => {
    const dateOfBirth = new Date(value);
    const ageDiffMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (age < 18) {
      return "You must be at least 18 years old";
    }
  };

  const handleProfilePictureUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const allowedExtensions = ["image/jpg", "image/jpeg", "image/png"];
      const maxSizeInBytes = 1 * 1024 * 1024; // 5MB
      const fileExtension = selectedFile.type;
      if (allowedExtensions.includes(fileExtension.toLowerCase()) && selectedFile.size < maxSizeInBytes) {
        setProfilePicture(selectedFile);
      }
      if (selectedFile.size > maxSizeInBytes) {
        toast.warn("File size exceeds the maximum limit (5MB). Please select a smaller file.", { theme: "colored" });
      }
      if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
        toast.warn("Unsupported file type. Please select a JPG, JPEG, or PNG file.", { theme: "colored" });
        return;
      }
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (values) => {
    if (!profilePicture) {
      toast.error("Please upload a profile picture");
    } else {
      setLoading(true);
      const data = new FormData();
      data.append("CustomerId", userDetails?.customerId);
      data.append("PhoneNumber", values?.phoneNumber);
      data.append("DateOfBirth", values?.date);
      data.append("PhoneNumberVerified", false);
      data.append("Address", values?.address);
      data.append("Occupation", values?.occupation);
      data.append("Gender", values?.gender);
      data.append("ProfilePicture", profilePicture);

      customerCompleteProfile(data)
        .then((res) => {
          toast.success(res.data, { theme: "colored" });
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  const _getCustomerProfile = () => {
    getCustomerProfile(userDetails?.customerId).then((response) => {
      dispatch(setProfile(response));
    });
  };

  const sendOtp = () => {
    if (profile.phoneNumber) {
      setShowPhoneNumber(true);
      if (localStorage.getItem("codeSent")) {
        toast.success("OTP has been sent ");
        setTimeout(() => {
          localStorage.removeItem("codeSent");
        }, 30000);
      } else {
        const number = replaceFirstZero(profile?.phoneNumber);
        const data = {
          customer_mobile_number: number,
          customer_email_address: profile.emailAddress,
          first_name: profile.firstName,
        };
        if (!localStorage.getItem("codeSent")) {
          sendPhoneOtp(data)
            .then((response) => {
              toast.success("OTP sent successfully");
              localStorage.setItem("reference", response.data.reference);
              localStorage.setItem("codeSent", true);
            })
            .catch(() => {
              toast.error("Something went wrong");
            });
        }
      }
    }
  };

  const handleOtp = () => {
    if (otp >= 6) {
      setLoading(true);
      const data = {
        customerId: profile.customerId,
        verification_code: otp,
        verification_reference: localStorage.getItem("reference"),
      };
      verifyPhoneNumber(data)
        .then((response) => {
          console.log(response);
          response.responseCode === 200 ? toast.success("OTP verification is successful") : toast.error("Sorry, couldn't verify OTP, Please try again");
          setLoading(false);
          localStorage.removeItem("reference");
        })
        .finally(() => {
          setShowPhoneNumber(false);
          _getCustomerProfile();
        });
    } else {
      toast.error("Otp field is complusory");
    }
  };

  return (
    <section className="font-mulish bg-HavannaGreen-light px-6 h-full flex justify-center items-center ">
      <div className="w-full smallLaptop:w-[840px]  bg-white py-6 rounded-xl shadow-xl">
        <div className="flex justify-center items-center">
          <div>
            <div className="w-fit m-auto">
              {profilePicture || profile.profilePictureUrl ? (
                <img
                  alt="Profile Picture"
                  className="rounded-full border w-24 h-24"
                  onClick={handleIconClick}
                  src={profile?.profilePictureUrl || URL.createObjectURL(profilePicture)}
                />
              ) : (
                <div className="rounded-full border w-24 h-24 bg-[#DFE1E2] text-HavannaBlack-neutral50 flex justify-center items-center" onClick={handleIconClick}>
                  <UserIcon width={72} />
                </div>
              )}
            </div>
            <input accept=".png, .jpeg, .jpg" className="mt-10 hidden" onChange={handleProfilePictureUpload} ref={fileInputRef} type="file" />
            <p className="font-bold text-16 leading-[22px] mt-[10px] text-center cursor-pointer" onClick={handleIconClick}>
              Upload your profile picture
            </p>
          </div>
        </div>

        {/* <h1 className="font-bold text-20 leading-[26px] mt-10 smallLaptop:pl-11">Personal Information</h1> */}

        <Formik
          enableReinitialize
          initialValues={{
            firstName: profile?.firstName || "",
            lastName: profile?.lastName || "",
            email: profile?.emailAddress || "",
            phoneNumber: profile?.phoneNumber || "",
            gender: profile?.gender || "",
            occupation: profile?.occupation || "",
            date: moment(profile?.dateOfBirth).format("yyyy-MM-DD") || "",
            address: profile?.address || "",
          }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors = {};

            // validate date of birth
            if (values.date && validateDateOfBirth(values.date)) {
              errors.date = validateDateOfBirth(values.date);
            }
            if (!/^\d+$/.test(values.phoneNumber) || values.phoneNumber.length !== 11) {
              errors.phoneNumber = "Phone number is invalid";
            }
            return errors;
          }}
        >
          {() => (
            <Form className="smallLaptop:flex flex-wrap smallLaptop:pl-11 px-3 mt-6 gap-8">
              <div className="smallLaptop:grid items-center grid-cols-2 gap-8">
                <div className="mt-4 ">
                  <label className="font-bold text-base" htmlFor="">
                    First Name
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 border-2  `}
                    id="firstName"
                    inputClassName="placeholder:text-14 outline-none"
                    name="firstName"
                    placeholder="First Name"
                    readonly={profile?.firstName}
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
                        "
                    name="lastName"
                    placeholder="Last Name"
                    readonly={profile?.lastName}
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
                        "
                    name="email"
                    placeholder="Your Email"
                    readonly={profile?.emailAddress}
                    required
                    type="email"
                  />
                </div>
                <div className="mt-4 relative z-[1]">
                  <label className="font-bold text-base">Phone Number</label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[360px] h-[60px] mt-2 border-2 `}
                    id="phoneNumber"
                    inputClassName="placeholder:text-14 outline-none"
                    maxLength={11}
                    name="phoneNumber"
                    // onKeyDown={(e) => {
                    //   if (e.key === "e" || e.key === "E") {
                    //     e.preventDefault();
                    //   }
                    // }}
                    placeholder="0**********"
                    readonly={profile?.phoneNumberVerified ? true : false}
                    required
                    type="text"
                  />

                  <div className="absolute right-2 top-1/2 text-HavannaGreen-primary font-semibold px-4 py-1 rounded-md">
                    {profile?.phoneNumber && profile?.phoneNumberVerified ? (
                      "Verified"
                    ) : profile?.phoneNumber && !profile.phoneNumberVerified ? (
                      <span className="cursor-pointer" onClick={sendOtp}>
                        Verify
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
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
                        "
                    name="occupation"
                    placeholder="Lawyer"
                    readonly={profile?.occupation}
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
                    "
                    name="date"
                    placeholder="Date of Birth"
                    // readonly={profile?.dateOfBirth}
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
                        "
                    name="address"
                    placeholder="25,Idowu Street,Yaba,Lagos"
                    readonly={profile?.address}
                    required
                    type="text"
                  />
                </div>
                <div className=" mt-8">
                  <h1 className="font-bold text-16 leading-[22px] ">Gender</h1>
                  <div className="flex gap-5">
                    <div>
                      <Field className="w-4 accent-HavannaGreen-secondary" name="gender" required type="radio" value="Male" />
                      <label className=" ml-1 text-[#3B3F42]">Male</label>

                    </div>
                      <div >
                        <Field className="w-4  accent-HavannaGreen-secondary" name="gender" required type="radio" value="Female" />
                        <label className=" ml-1 text-[#3B3F42]">Female</label>
                      </div>
                  </div>
                </div>
              </div>
              {(!profile?.address || !profile.dateOfBirth || !profile.gender || !profile.occupation || !profile.phoneNumber) && (
                <div className="mt-10">
                  <Button customClass="rounded-[8px] smallLaptop:w-[240px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary " isLoading={loading} title=" Save information" />
                </div>
              )}
            </Form>
          )}
        </Formik>

        <CustomModal cardClassName=" w-[600px]" toggleVisibility={setShowPhoneNumber} visibility={showPhoneModal}>
          <div>
            <div className="w-full pt-8 bg-white text-black font-mulish h-[70vh] rounded-t-xl px-5">
              <Icon className="flex cursor-pointer justify-end" name="otpCancel" onClick={() => setShowPhoneNumber(false)} />
              <h1 className=" ">Enter OTP Code</h1>
              <p className="mt-3 mb-[30px]">Enter the OTP code sent to your number {profile?.phoneNumber}</p>

              <OTPInput
                inputStyle={{ width: "60px", height: "60px", background: "transparent", outline: "none", borderRadius: "8px", border: "1px solid black", color: "black" }}
                numInputs={6}
                onChange={setOtp}
                renderInput={(props) => <input type="number" {...props} />}
                renderSeparator={<span className="text-gray px-2">-</span>}
                value={otp}
              />

              <CustomButton
                customClass="!text-white cursor-pointer bg-HavannaGreen-primary text-white w-full h-[58px] rounded-lg mt-10 mb-[72px] "
                isLoading={loading}
                onClick={handleOtp}
                title="Verify Otp"
              />
            </div>
          </div>
        </CustomModal>
        {profile?.customerId && profile?.phoneNumber && (
          <p className="font-bold pl-10 mt-7">
            Need to change any information?{" "}
            <span className="text-HavannaGreen-primary">
              &nbsp;<CustomLink destination="/contact-us">Contact Us</CustomLink>
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default PersonalInformation;
