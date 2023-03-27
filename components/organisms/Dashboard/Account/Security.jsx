import React from "react";

import CustomToggle from "../../../atoms/CustomToggle/CustomToggle";

const Security = () => {
  return (
    <section>
      <div className="pl-10 font-mulish ">
        <div className="bg-white w-[880px] px-10 pt-10 shadow-lg rounded-xl  ">
          <h1 className="font-bold text-20 leading-[26px]">Verified Information</h1>

          <div className="flex justify-between pt-4">
            <p>Email address</p>
            <p>shedubayode@gmail.com</p>
          </div>
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
              <p className="font-bold text-18 leading-6">Update</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
