import { useState } from "react";
import AccountTier from "./AccountTier";
import MyProfile from "./MyProfile";
import Security from "./Security";

const MobileAccount = () => {
  const [activeTab, setActiveTab] = useState(0);

  const listings = [
    {
      id: 0,
      title: "My Profile",
      component: <MyProfile />,
    },
    {
      id: 1,
      title: "Account Tier",
      component: <AccountTier tierNo="1" />,
    },
    {
      id: 2,
      title: "Security",
      component: <Security />,
    },
  ];

  return (
    <div className="font-mulish mt-6">
      <div>
        <div className="flex gap-3 whitespace-nowrap overflow-scroll hide-scrollbar">
          {listings.map((item, index) => (
            <p
              className={`px-[10px] text-12 font-bold  py-2 ${activeTab === item.id ? "bg-HavannaGreen-secondary text-white" : "text-[#8F8F8F] "}   rounded-[20px]`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
      {listings[activeTab].component}
    </div>
  );
};

export default MobileAccount;
