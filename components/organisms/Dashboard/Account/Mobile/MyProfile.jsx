import React, { useRef, useState } from "react";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import moment from "moment";
import { UserIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { customerCompleteProfile, getCustomerProfile, sendPhoneOtp, verifyPhoneNumber } from "@components/shared/api";
import { AuthService } from "@components/shared/api/auth";
import { setProfile } from "@components/store/Account";
import { replaceFirstZero } from "@components/shared/libs/helpers";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";
import Button from "@atoms/CustomButton/CustomButton";
import CustomButton from "@atoms/CustomButton/CustomButton";

const MyProfile = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [showPhoneModal, setShowPhoneNumber] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const { profile } = useSelector((state) => state.Account);

  const validateDateOfBirth = (value) => {
    const dateOfBirth = new Date(value);
    const ageDiffMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (age < 18) {
      return "You must be at least 18 years old";
    }
  };

  const _getCustomerProfile = () => {
    getCustomerProfile(userDetails?.customerId).then((response) => {
      dispatch(setProfile(response));
    });
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
    console.log(values);
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
          _getCustomerProfile();
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  const sendOtp = () => {  
    if (profile.phoneNumber) {
      setShowPhoneNumber(true);
      if(localStorage.getItem("codeSent")) {
        toast.success("OTP has been sent ")
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
        if(!localStorage.getItem("codeSent")) {
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
          response === "invalid token" ? toast.error("Sorry, couldn't verify OTP at the moment, Please try again later") : toast.success("OTP verification is successful");
          setLoading(false);
          localStorage.removeItem("reference");
        })
        .finally(() => {setShowPhoneNumber(false); _getCustomerProfile();});
    } else {
      toast.error("Otp field is complusory");
    }
  };


  return (
    <div className="font-mulish smallLaptop:hidden">
      <div>
        <div className="flex justify-center items-center mt-8">
          <div className="">
            <div className="flex justify-center items-center">
              {profilePicture || profile?.profilePictureUrl ? (
                <img
                  alt="Profile Picture"
                  className="rounded-full w-[60px] h-[60px]"
                  onClick={handleIconClick}
                  src={profile?.profilePictureUrl || URL.createObjectURL(profilePicture)}
                />
              ) : (
                <UserIcon className="p-[10px] rounded-full flex bg-[#F5F5F5]" color="#8F8F8F" onClick={handleIconClick} width={40} />
              )}
            </div>
            <input accept=".png, .jpeg, .jpg" className="mt-10 hidden" onChange={handleProfilePictureUpload} ref={fileInputRef} type="file" />
            <p className="font-bold text-14  text-[#0B4340] mt-[10px]" onClick={handleIconClick}>
              Upload your profile picture
            </p>
          </div>
        </div>

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
            <Form className="smallLaptop:flex flex-wrap smallLaptop:pl-11 mt-6 gap-8">
              <div className="smallLaptop:grid items-center grid-cols-2 gap-8">
                <div className="mt-4 ">
                  <label className="font-bold text-14 text-[#3B3F42]">First Name</label>
                  <FormikCustomInput
                    className={`rounded-[4px] h-[48px] mt-1 border border-HavannaGreen-secondary  `}
                    id="firstName"
                    inputClassName="placeholder:text-14 outline-none placeholder:text-gray-300"
                    maxLength={20}
                    name="firstName"
                    placeholder="First Name"
                    readOnly={profile?.firstName}
                    required
                    type="text"
                  />
                </div>
                <div className="mt-4 ">
                  <label className="font-bold text-14 text-[#3B3F42]">Last Name</label>
                  <FormikCustomInput
                    className={`rounded-[4px] h-[48px] mt-1 
                        border border-HavannaGreen-secondary `}
                    id="lastName"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-gray-300 "
                    maxLength={20}
                    name="lastName"
                    placeholder="Last Name"
                    readOnly={profile?.lastName}
                    required
                    type="text"
                  />
                </div>
                <div className="mt-4 ">
                  <label className="font-bold text-14 text-[#3B3F42]">Email Address</label>
                  <FormikCustomInput
                    className={`rounded-[4px] h-[48px] mt-2 
                        border border-HavannaGreen-secondary  `}
                    id="email"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-gray-300 "
                    maxLength={40}
                    name="email"
                    placeholder="Your Email"
                    readOnly={profile?.emailAddress}
                    required
                    type="email"
                  />
                </div>
                <div className="mt-4 relative z-[1]">
                  <label className="font-bold text-14 text-[#3B3F42]">Phone Number</label>
                  <FormikCustomInput
                    className={`rounded-[4px] h-[48px] mt-2 border border-HavannaGreen-secondary  `}
                    id="phoneNumber"
                    inputClassName="placeholder:text-14 outline-none placeholder:text-gray-300 "
                    maxLength={11}
                    name="phoneNumber"
                    // onKeyDown={(e) => {
                    //   if (e.key === "e" || e.key === "E") {
                    //     e.preventDefault();
                    //   }
                    // }}
                    placeholder="0**********"
                    readOnly={profile.phoneNumber || profile?.phoneNumberVerified ? true : false}
                    required
                    type="text"
                    // value={values.phoneNumber}
                  />
                  <div className="absolute right-2 top-1/2 text-HavannaGreen-primary font-semibold px-4 py-1 rounded-md">
                    {profile?.phoneNumber && profile?.phoneNumberVerified ? "Verified" : profile?.phoneNumber && !profile.phoneNumberVerified ? (<span className="cursor-pointer" onClick={sendOtp}>Verify</span>) : ""}
                  </div>
                </div>

                <div className="mt-4 ">
                  <label className="font-bold text-14 text-[#3B3F42]">Occupation</label>
                  <FormikCustomInput
                    className={`rounded-[4px] h-[48px] mt-2 
                        border  border-HavannaGreen-secondary `}
                    id="occupation"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-gray-300 "
                    maxLength={30}
                    name="occupation"
                    placeholder="Lawyer"
                    readOnly={profile?.occupation}
                    required
                    type="text"
                  />
                </div>

                <div className="mt-4 ">
                  <label className="font-bold text-14 text-[#3B3F42]">Date of Birth</label>
                  <FormikCustomInput
                    className={`rounded-[4px] h-[48px] mt-2 
                        border border-HavannaGreen-secondary  `}
                    id="date"
                    inputClassName="placeholder:text-14 outline-none
                     placeholder:text-gray-300 "
                    name="date"
                    placeholder="Date of Birth"
                    // readonly={profile?.dateOfBirth}
                    required
                    type="date"
                  />
                  {/* <Field name="date">{({ field, form }) => <DatePicker {...field} onChange={(date) => form.setFieldValue(field.name, date)}  />}</Field> */}
                </div>
                <div className="mt-4 ">
                  <label className="font-bold text-14 text-[#3B3F42]">Address</label>
                  <FormikCustomInput
                    className={`rounded-[4px] h-[48px] mt-2 
                        border border-HavannaGreen-secondary`}
                    id="address"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-gray-300 "
                    maxLength={70}
                    name="address"
                    placeholder="25,Idowu Street,Yaba,Lagos"
                    readOnly={profile?.address}
                    required
                    type="text"
                  />
                </div>
                <div className=" mt-4">
                  <label className="font-bold text-14 text-[#3B3F42]">Gender</label>
                  <div className="flex gap-6 mt-[10px]">
                    <div className="flex gap-1">
                      <Field className="w-4 accent-HavannaGreen-secondary" name="gender" required type="radio" value="Male" />
                      <label className="text-14 text-[#3B3F42] pl-1">Male</label>
                    </div>
                    <div className="flex gap-1">
                      <Field className="w-4 accent-HavannaGreen-secondary" name="gender" required type="radio" value="Female" />
                      <label className="text-14 text-[#3B3F42]">Female</label>
                    </div>
                  </div>
                </div>
              </div>
              {(!profile?.address || !profile.dateOfBirth || !profile.gender || !profile.occupation || !profile.phoneNumber) && (
                <div className="mt-10 ">
                  <Button customClass="rounded-[8px] smallLaptop:w-[240px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary " isLoading={loading} title=" Save information" />
                </div>
              )}
            </Form>
          )}
        </Formik>
        <CustomModal cardClassName="absolute bottom-0 w-full" toggleVisibility={setShowPhoneNumber} visibility={showPhoneModal}>
        <div>
          <div className="w-full pt-8 bg-white text-black font-mulish h-[70vh] rounded-t-xl px-5">
            <Icon className="flex cursor-pointer justify-end" name="otpCancel" onClick={() => setShowPhoneNumber(false)} />
            <h1 className=" ">Enter OTP Code</h1>
            <p className="mt-3 mb-[30px]">Enter the OTP code sent to your number {profile?.phoneNumber}</p>

            <OTPInput
              inputStyle={{ width: "40px", height: "40px", background: "transparent", outline: "none", borderRadius: "8px", border: "1px solid black", color: "black" }}
              numInputs={6}
              onChange={setOtp}
              renderInput={(props) => <input type="number"  {...props} />}
              renderSeparator={<span className="text-gray px-0.5">-</span>}
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
          <p className="mb-24 mt-16 text-14 font-bold text-center">
            Need to change any information?{" "}
            <a href="mailto:info@havanna.com">
              <span className="text-HavannaGreen-primary">&nbsp;<CustomLink destination="/contact-us">Contact Us</CustomLink></span>
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
