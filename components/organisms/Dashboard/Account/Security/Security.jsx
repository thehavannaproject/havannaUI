import React, { useState } from "react";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import OTPInput from "react-otp-input";
import { sendPhoneOtp, verifyPhoneNumber } from "@components/shared/api";
import { replaceFirstZero } from "@components/shared/libs/helpers";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomToggle from "@components/atoms/CustomToggle/CustomToggle";
import PinSet from "./PinSet";
import PasswordUpdate from "./PasswordUpdate";

const Security = () => {
  const [show, setShow] = useState(false);
  const [passwordUpdates, SetPasswordUpdates] = useState(false);
  const [otp, setOtp] = useState("");
  const [showPhoneModal, setShowPhoneNumber] = useState(false);
  const [loading, setLoading] = useState(false);
  const { profile } = useSelector((state) => state.Account);

  const handleSetClick = () => {
    setShow(true);
  };

  const handlePassword = () => {
    SetPasswordUpdates(true);
  };

  const sendOtp = () => {
    if (profile.phoneNumber) {
      setShowPhoneNumber(true);
      const number = replaceFirstZero("07031490388");
      const data = {
        customer_mobile_number: number,
        customer_email_address: profile.emailAddress,
        first_name: profile.firstName,
      };
      sendPhoneOtp(data)
        .then((response) => {
          toast.success("OTP sent successfully");
          localStorage.setItem("reference", response.data.reference);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
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
        .finally(() => setShowPhoneNumber(false));
    } else {
      toast.error("Otp field is complusory");
    }
  };

  return (
    <section>
      <div className="pl-10 font-mulish ">
        <div className="bg-white w-[880px] px-10 pt-10 shadow-lg rounded-xl  ">
          <h1 className="font-bold text-20 leading-[26px]">Verified Information</h1>

          <div className="flex justify-between pt-4">
            <p>Email address</p>
            <p>{profile.emailAddress}</p>
          </div>
          {profile?.phoneNumberVerified && (
            <div className="mt-3 text-[#4F5457] flex justify-between">
              <p>Phone Number</p>
              <p>{profile?.phoneNumber}</p>
            </div>
          )}
          {!profile.phoneNumberVerified && (
          <div className="mt-8">
            <h1 className="text-20 text-[#3B3F42] font-bold">Phone Number</h1>
            <div className="mt-3  flex justify-between">
              <p>{profile?.phoneNumber}</p>
              <p className="font-bold text-18 cursor-pointer leading-6" onClick={sendOtp}>
                Verify
              </p>
            </div>
          </div>
        )}
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-20 leading-[26px] pt-[52px]">Notifications</h1>
              <p className="pt-[21px] ">Allow and start getting notifications.</p>
            </div>
            <CustomToggle className="bg-HavannaGreen-primary" />
          </div>
          <div className="flex justify-between pt-[57px]">
            <div>
              <h1 className="font-bold text-20 leading-[26px] ">Account Protection</h1>
              <h2 className="pt-4 font-medium text-16 leading-[22px]">Two Factor Authentication</h2>
              <p className="font-normal text-14 leading-[18px]">Protect your Havanna account from unauthorized transactions.</p>
            </div>
            <div>
              <CustomToggle />
            </div>
          </div>
          <div className="pb-[60px] flex justify-between pt-[52px]">
            <div>
              <h1 className="font-bold text-20 leading-[26px] ">Password</h1>
              <p className="font-medium text-16 leading-[22px] ">Update your password</p>
            </div>
            <div>
              <p className="font-bold text-18 cursor-pointer leading-6" onClick={handlePassword}>
                Update
              </p>
            </div>
          </div>
          <div className="pb-[60px] flex justify-between">
            <div>
              <h1 className="font-bold text-20 leading-[26px] ">Transaction PIN</h1>
              <p className="font-medium text-16 leading-[22px] ">Set your transaction pin.</p>
            </div>
            <div>
              <p className="font-bold text-18 cursor-pointer leading-6" onClick={handleSetClick}>
                {profile.transactionPinCreated ? "Update" : "Set"}
              </p>
            </div>
          </div>
          <div>{show && <PinSet setShow={setShow} />}</div>
          <div>{passwordUpdates && <PasswordUpdate SetPasswordUpdates={SetPasswordUpdates} />}</div>
        </div>
      </div>
      <CustomModal toggleVisibility={setShowPhoneNumber} visibility={showPhoneModal}>
        <div>
          <div className="bg-white text-HavannaBlack-primary px-11 py-10  rounded-xl font-mulish shadow-xl ">
            <Icon className="flex cursor-pointer justify-end" name="otpCancel" onClick={() => setShowPhoneNumber(false)} />
            <h1 className=" ">Enter OTP Code</h1>
            <p className="mt-3 mb-[30px]">Enter the OTP code sent to your number {profile?.phoneNumber}</p>

            <OTPInput
              inputStyle={{ width: "60px", height: "60px", background: "transparent", outline: "none", borderRadius: "8px", border: "1px solid black", color: "black" }}
              numInputs={6}
              onChange={setOtp}
              renderInput={(props) => <input {...props} />}
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
    </section>
  );
};

export default Security;
