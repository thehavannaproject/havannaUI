import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import Icon from "@components/atoms/Icons";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { CustomerConfig, getCustomerProfile, sendPhoneOtp, verifyPhoneNumber } from "@components/shared/api";
import CustomToggle from "@components/atoms/CustomToggle/CustomToggle";
import { replaceFirstZero } from "@components/shared/libs/helpers";
import { setProfile } from "@components/store/Account";
import UpdatePassword from "./UpdatePassword";
import SetPin from "./SetPin";

const Security = () => {
  const [otp, setOtp] = useState("");
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [showSetPin, setShowSetPin] = useState(false);
  const [showPhoneModal, setShowPhoneNumber] = useState(false);
  const { profile } = useSelector((state) => state.Account);
  const [loading, setLoading] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const [is2FA, setIs2FA] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();
  const { tab } = router.query;

  useEffect(() => {
    if (tab === "security") {
      setShowSetPin(true);
    }
  }, []);

  const getCustomer = () => {
    getCustomerProfile(profile?.customerId)
    .then((response) => {
      dispatch(setProfile(response));
    })
  }

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
        .finally(() => setShowPhoneNumber(false));
    } else {
      toast.error("Otp field is complusory");
    }
  };

  useEffect(() => { 
    if(profile?.accountConfig?.emailNotification && profile?.accountConfig?.emailNotification ) {
      setIsNotify(true)
    } else {
      setIsNotify(false)
    }
  }, [])
  useEffect(() => { 
    if(profile?.accountConfig?.twoFactorAuthentication ) {
      setIs2FA(true)
    } else {
      setIs2FA(false)
    }
  }, [])

  const handleConfig = (isChecked) => {
    const data = {
      customerId: profile.customerId,
      smsNotification: isChecked,
      emailNotification: isChecked,
      twoFactorAuthentication: profile?.accountConfig?.twoFactorAuthentication,
    };
    CustomerConfig(data).then(() => {toast.success("Notification updated successfully"); getCustomer()});
  };

  const handle2FA = (isChecked) => {
    const data = {
      customerId: profile.customerId,
      smsNotification: profile?.accountConfig?.smsNotification,
      emailNotification: profile?.accountConfig?.emailNotification,
      twoFactorAuthentication: isChecked,
    };
    CustomerConfig(data).then(() =>{toast.success("2FA updated successfully"); getCustomer()});
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
            <div>
              <CustomToggle isOn={isNotify} onToggle={(isChecked) => handleConfig(isChecked)} setIsOn={setIsNotify} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-16 text-[#3B3F42] font-bold">Account Protection</h1>
          <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
            <div>
              <p className="font-bold">Two Factor Authentication</p>
              <p>Protect your Havanna account from unauthorized transactions.</p>
            </div>
            <div>
              <CustomToggle isOn={is2FA} onToggle={(isChecked) => handle2FA(isChecked)} setIsOn={setIs2FA} />
            </div>
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
        <MenuHeader onClose={() => setShowSetPin(false)} title={profile.transactionPinCreated ? "Update Pin" : "Set Pin"}>
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
              inputStyle={{ width: "40px", height: "40px", background: "transparent", outline: "none", borderRadius: "8px", border: "1px solid black", color: "black" }}
              numInputs={6}
              onChange={setOtp}
              renderInput={(props) => <input  {...props} />}
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
    </div>
  );
};

export default Security;
