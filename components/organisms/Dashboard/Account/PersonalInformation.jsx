import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
// import { useRouter } from "next/router";
import { UserIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import { ImSpinner3 } from "react-icons/im";
import Icon from "@components/atoms/Icons";
import { customerCompleteProfile, getCustomerProfile, sendPhoneOtp, verifyPhoneOtp } from "@components/api";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import { AuthService } from "@components/api/auth";
import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";
import CustomButton from "@atoms/CustomButton/CustomButton";

const PersonalInformation = () => {
  const [loading, setLoading] = useState(false);
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [profilePicture, setProfilePicture] = useState(null);
  const [customerProfile, setCustomerProfile] = useState(null);
  const [reference, setReference] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = Array(6)
    .fill()
    .map(() => useRef());
  const [phoneNumber, setPhoneNumber] = useState("234");
  const fileInputRef = useRef(null);

  const mergeOtp = otp.join("");

  console.log(isPhoneVerified);

  useEffect(() => {
    getCustomerProfile(userDetails?.customerId)
      .then((response) => {
        setCustomerProfile(response);
      })
      .catch((error) => console.log(error));
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

  const sendOtp = () => {
    setLoading(true);
    if (phoneNumber.length === 13) {
      const data = {
        customer_mobile_number: phoneNumber,
        customer_email_address: customerProfile.emailAddress,
        first_name: customerProfile?.firstName,
      };
      sendPhoneOtp(data)
        .then((response) => {
          console.log(response);
          if (response.responseCode === 200) {
            toast.success("OTP sent successfully", { theme: "colored" });
            setReference(response.data.reference);
            setLoading(false);
            setOpen(true);
          } else {
            setLoading(false);
            toast.error("Something went wrong, Try again", { theme: "colored" });
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  const handleOtp = () => {
    setLoading(true);
    const data = {
      verification_code: mergeOtp,
      verification_reference: reference,
    };
    verifyPhoneOtp(data)
      .then((response) => {
        console.log(response);
        if (response.responseCode === 200) {
          toast.success("OTP verification is successful", { theme: "colored" });
          setIsPhoneVerified(true);
          setOpen(false);
        } else {
          toast.error("Sorry, couldn't verify OTP, Please try again later", { theme: "colored" });
        }
        setLoading(false);
      })
      .catch(() => {
        setOpen(false);
        toast.error("Something went wrong, Try again later");
      });
  };
  console.log(isPhoneVerified);

  const handleSubmit = (values) => {
    let data = new FormData()

    data.append('CustomerId', userDetails?.customerId);
    data.append('PhoneNumber', values.phoneNumber); 
    data.append('DateOfBirth', values.date); 
    data.append('PhoneNumberVerified', true); 
    data.append('Address', values.address); 
    data.append('Occupation', values.occupation); 
    data.append('Gender', values.gender); 
    data.append('ProfilePicture', profilePicture); 
    if ((isPhoneVerified || customerProfile?.phoneNumberVerified) && profilePicture) {
      setIsLoading(true);
      customerCompleteProfile(data)
        .then((res) => {
          if(res.ResponseCode === true) {

            toast.success("Profile completed successfully", { theme: "colored" });
            setIsLoading(false);
          } 
        })
        .catch((error) => console.log(error));
      console.log(values);
    } else {
      if(!profilePicture) {
        toast.error("Please upload a profile picture", {theme: "colored"})
      } else {

        toast.error("Please verify phone number to proceed.", { theme: "colored" });
      }
    }
  };

  return (
    <section className="font-mulish bg-HavannaGreen-light px-6 h-full flex justify-center items-center ">
      <div className="smallLaptop:w-[840px]  bg-white py-6 rounded-xl shadow-xl">
        <div className="flex justify-center items-center">
          <div>
            <div className="w-fit m-auto">
              {profilePicture ? (
                <img alt="Profile Picture" className="rounded-full border w-24 h-24" onClick={handleIconClick} src={URL.createObjectURL(profilePicture)} />
              ) : (
                <div className="rounded-full border w-24 h-24 bg-[#DFE1E2] text-HavannaBlack-neutral50 flex justify-center items-center" onClick={handleIconClick}>
                  <UserIcon width={72} />
                </div>
              )}
            </div>
            <input accept=".png, .jpeg, .jpg" className="mt-10 hidden" onChange={handleProfilePictureUpload} ref={fileInputRef} type="file" />
            <p className="font-bold text-16 leading-[22px] mt-[10px] text-center">Upload your profile picture</p>
          </div>
        </div>

        <h1 className="font-bold text-20 leading-[26px] mt-10 smallLaptop:pl-11">Personal Information</h1>

        <Formik
          enableReinitialize
          initialValues={{
            firstName: customerProfile?.firstName || "",
            lastName: customerProfile?.lastName || "",
            email: customerProfile?.emailAddress || "",
            phoneNumber: customerProfile?.phoneNumberVerified === false ? phoneNumber : customerProfile?.phoneNumber,
            gender: customerProfile?.gender || "",
            occupation: customerProfile?.occupation || "",
            date: moment(customerProfile?.dateOfBirth).format("yyyy-MM-DD") || "",
            address: customerProfile?.address || "",
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
                    maxLength={13}
                    name="phoneNumber"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    placeholder="234**********"
                    required
                    type="number"
                  />
                  {isPhoneVerified || customerProfile?.phoneNumberVerified ? (
                    <div className="absolute right-2 top-1/2 bg-HavannaGreen-primary text-white px-4 py-1 rounded-md">Verified</div>
                  ) : (
                    <p className="absolute right-2 top-1/2 bg-HavannaGreen-primary text-white px-4 py-1 rounded-md" onClick={sendOtp}>
                      {loading ? <ImSpinner3 className="animate-spin flex justify-center items-center " /> : "Verify"}
                    </p>
                  )}
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
                    required
                    type="text"
                  />
                </div>
                <div className=" mt-8">
                  <h1 className="font-bold text-16 leading-[22px] ">Gender</h1>
                  <div className="flex">
                    <div>
                      <label>Male</label>
                      <FormikCustomInput className="accent-HavannaGreen-secondary" name="gender" required type="radio" value="male" />
                    </div>
                    <div>
                      <label>Female</label>
                      <FormikCustomInput className="accent-HavannaGreen-secondary" name="gender" required type="radio" value="female" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mb-24">
                <Button customClass="rounded-[8px] smallLaptop:w-[240px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary " isLoading={isLoading} title=" Save information" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <CustomModal toggleVisibility={sendOtp} visibility={open}>
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
