import { useState } from "react";
import { useRouter } from "next/router";
import { CaretDownFilled, MenuOutlined, SettingFilled } from "@ant-design/icons";
import { Dropdown } from "antd";
import Icon from "@components/atoms/Icons";
import MobileNavItems from "./MobileNavItems";

const MobileNavBar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const items = [
    {
      label: (
        <div className="flex gap-[14px] mr-5 mt-3 mb-2">
          <SettingFilled className="mt-1 ml-1 text-HavannaGreen-600" />{" "}
          <p className="text-HavannaBlack-neutral text-16 font-mulish" onClick={() => router.push("/account")}>
            Profile
          </p>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex gap-[14px] mr-5 mb-4">
          <Icon name="mobileLogout" /> <p className="text-HavannaBlack-neutral text-16 font-mulish">Logout</p>{" "}
        </div>
      ),
      key: "2",
    },
  ];

  return (
    <>
      <div className="card-shadow flex font-mulish justify-between p-6 bg-white">
        <MenuOutlined onClick={() => setIsOpen(true)} size={32} />
        {isOpen && <MobileNavItems onClose={() => setIsOpen(false)} />}
        <h1 className="text-16 text-HavannaGreen-secondary font-medium">{title}</h1>
        <Dropdown
          menu={{
            items,
          }}
        >
          <div className="flex gap-2">
            <Icon name="mobileMenu" />
            <CaretDownFilled className="text-[#3B3F42] mt-[6px]" onClick={(e) => e.preventDefault()} size={20} />
          </div>
        </Dropdown>
      </div>
    </>
  );
};

export default MobileNavBar;
