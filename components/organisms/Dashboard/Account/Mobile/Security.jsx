import { Switch } from "antd";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import Icon from "@components/atoms/Icons";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { sendPhoneOtp, verifyPhoneNumber } from "@components/api";
import { replaceFirstZero } from "@components/shared/libs/helpers";
import UpdatePassword from "./UpdatePassword";
import SetPin from "./SetPin";

const Security = () => {
  const [otp, setOtp] = useState("");
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [showSetPin, setShowSetPin] = useState(false);
  const [showPhoneModal, setShowPhoneNumber] = useState(false);
  const { profile } = useSelector((state) => state.Account);
  const [loading, setLoading] = useState(false);

  const sendOtp = () => {
    if (profile.phoneNumber) {
      setShowPhoneNumber(true);
      const number = replaceFirstZero("07031490388");
      console.log(number);
      const data = {
        customer_mobile_number: number,
        customer_email_address: profile.emailAddress,
        first_name: profile.firstName,
      };
      sendPhoneOtp(data).then((response) => {
        console.log(response)
        toast.success("OTP sent successfully");
        localStorage.setItem("reference", response.data.reference);
      }).catch(() => {toast.error("Something went wrong")});
    }
  };

  const handleOtp = () => {
    if (otp >= 6) {
      setLoading(true);
      console.log(otp);
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
    <div className="font-mulish mt-[52px]">
      <div>
        <div>
          <h1 className="text-16 text-[#3B3F42] font-bold">Verified Information</h1>
          <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
            <p>Email address</p>
            <p>{profile.emailAddress}</p>
          </div>
          {profile?.phoneNumberVerified && (

            <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
              <p>Phone Number</p>
              <p>{profile?.phoneNumber}</p>
            </div>
          )}
        </div>
        {!profile.phoneNumberVerified && (
          <div className="mt-8">
            <h1 className="text-16 text-[#3B3F42] font-bold">Phone Number</h1>
            <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
              <p>{profile?.phoneNumber}</p>
              <p className="text-HavannaGreen-primary font-bold text-14" onClick={sendOtp}>
                Verify
              </p>
            </div>
          </div>
        )}
        <div className="mt-8">
          <h1 className="text-16 text-[#3B3F42] font-bold">Notification</h1>
          <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
            <p>Allow and start getting notifications.</p>
            <Switch
              className="text-HavannaGreen-primary checked:bg-HavannaGreen-primary "
              defaultChecked
              onChange={(checked) => console.log(checked)}
              style={{ background: "#0B4340" }}
            />
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-16 text-[#3B3F42] font-bold">Account Protection</h1>
          <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
            <div>
              <p className="font-bold">Two Factor Authentication</p>
              <p>Protect your Havanna account from unauthorized transactions.</p>
            </div>
            <Switch className="text-HavannaGreen-primary !border" onChange={(checked) => console.log(checked)} style={{ background: "#0B4340" }} />
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-16 text-[#3B3F42] font-bold">Password </h1>
          <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
            <p>Update your password.</p>
            <p className="text-HavannaGreen-primary font-bold text-14" onClick={() => setShowUpdatePassword(true)}>
              Update
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-16 text-[#3B3F42] font-bold">Transaction Pin </h1>
          <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
            <p>{profile.transactionPinCreated ? "Update" : "Set"} your transaction pin.</p>
            <p className="text-HavannaGreen-primary font-bold text-14" onClick={() => setShowSetPin(true)}>
              {profile.transactionPinCreated ? "Update" : "Set"}
            </p>
          </div>
        </div>
      </div>

      <CustomModal cardClassName="h-screen w-full" visibility={showUpdatePassword}>
        <MenuHeader onClose={() => setShowUpdatePassword(false)} title="Update Password">
          <div className="bg-white h-screen">
            <UpdatePassword />
          </div>
        </MenuHeader>
      </CustomModal>

      <CustomModal cardClassName="h-screen w-full" visibility={showSetPin}>
        <MenuHeader onClose={() => setShowSetPin(false)} title="Set Pin">
          <div className="bg-white h-screen">
            <SetPin />
          </div>
        </MenuHeader>
      </CustomModal>

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
    </div>
  );
};

export default Security;
