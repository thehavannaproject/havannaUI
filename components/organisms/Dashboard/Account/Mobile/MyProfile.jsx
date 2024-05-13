import React, { useRef, useState } from "react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import moment from "moment";
import { UserIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { customerCompleteProfile } from "@components/shared/api";
import { AuthService } from "@components/shared/api/auth";
import Button from "@atoms/CustomButton/CustomButton";
import FormikCustomInput from "@atoms/CustomInput/FormikCustomInput";

const MyProfile = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [loading, setLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

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
          {({ values }) => (
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
                    readonly={profile?.firstName}
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
                    readonly={profile?.lastName}
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
                    readonly={profile?.emailAddress}
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
                    readonly={profile?.phoneNumberVerified ? true : false}
                    required
                    type="text"
                    // value={values.phoneNumber}
                  />
                  <div className="absolute right-2 top-1/2 text-HavannaGreen-primary font-semibold px-4 py-1 rounded-md">
                    {profile?.phoneNumberVerified ? "Verified" : "Unverified"}
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
                    readonly={profile?.occupation}
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
                    readonly={profile?.dateOfBirth}
                    required
                    type="date"
                  />
                  {/* <Field name="date">{({ field, form }) => <DatePicker {...field} onChange={(date) => form.setFieldValue(field.name, date)} selected={values.date} />}</Field> */}
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
                    readonly={profile?.address}
                    required
                    type="text"
                  />
                </div>
                <div className=" mt-4">
                  <label className="font-bold text-14 text-[#3B3F42]">Gender</label>
                  <div className="flex gap-6 mt-[10px]">
                    <div className="flex gap-1">
                      <FormikCustomInput
                        checked={values.gender === profile.gender}
                        className="!h-5 accent-HavannaGreen-secondary"
                        container="!px-0"
                        name="gender"
                        required
                        type="radio"
                        value="Male"
                      />
                      <label className="text-14 text-[#3B3F42]">Male</label>
                    </div>
                    <div className="flex gap-1">
                      <FormikCustomInput
                        checked={values.gender === profile.gender}
                        className="!h-5 accent-HavannaGreen-secondary"
                        container="!px-0"
                        name="gender"
                        required
                        type="radio"
                        value="Female"
                      />
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
        <p className="mb-24 mt-16 text-14 font-bold text-center">
          Need to change any information?{" "}
          <a href="mailto:info@havanna.com">
            <span className="text-HavannaGreen-primary">&nbsp;Contact Us</span>
          </a>
        </p>
      </div>
      {/* <CustomModal visibility={open}>
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
              customClass="!text-white cursor-pointer bg-HavannaGreen-primary text-white w-full h-[58px] rounded-lg mt-10 mb-[72px] "
              isLoading={loading}
              onClick={handleOtp}
              title="Verify Otp"
            />
          </div>
        </div>
      </CustomModal> */}
    </div>
  );
};

export default MyProfile;
