import { Switch } from "antd";
import { useState } from "react";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import UpdatePassword from "./UpdatePassword";
import SetPin from "./SetPin";

const Security = () => {
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [showSetPin, setShowSetPin] = useState(false);
  return (
    <div className="font-mulish mt-[52px]">
      <div>
        <div>
          <h1 className="text-16 text-[#3B3F42] font-bold">Verified Information</h1>
          <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
            <p>Email address</p>
            <p>abimbolawilliams@gmail.com</p>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-16 text-[#3B3F42] font-bold">Notification</h1>
          <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
            <p>Allow and start getting notifications.</p>
            <Switch className="text-HavannaGreen-primary" defaultChecked onChange={(checked) => console.log(checked)} />
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-16 text-[#3B3F42] font-bold">Account Protection</h1>
          <div className="mt-3 text-[#4F5457] text-12 flex justify-between">
            <div>
              <p className="font-bold">Two Factor Authentication</p>
              <p>Protect your Havanna account from unauthorized transactions.</p>
            </div>
            <Switch className="text-HavannaGreen-primary !border" onChange={(checked) => console.log(checked)} />
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
            <p>Set your transaction pin.</p>
            <p className="text-HavannaGreen-primary font-bold text-14" onClick={() => setShowSetPin(true)}>
              Set
            </p>
          </div>
        </div>
      </div>

      <CustomModal cardClassName="h-screen" visibility={showUpdatePassword}>
        <MenuHeader onClose={() => setShowUpdatePassword(false)} title="Update Password">
          <div className="bg-white h-screen">
            <UpdatePassword />
          </div>
        </MenuHeader>
      </CustomModal>

      <CustomModal cardClassName="h-screen" visibility={showSetPin}>
        <MenuHeader onClose={() => setShowSetPin(false)} title="Set Pin">
          <div className="bg-white h-screen">
            <SetPin />
          </div>
        </MenuHeader>
      </CustomModal>
    </div>
  );
};

export default Security;
