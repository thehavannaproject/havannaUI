import { useState } from "react";

import AccountTier from "./AccountTier";
import PersonalInformation from "./PersonalInformation";
import Security from "./Security/Security";

const index = () => {
  const [activeTab, setActiveTab] = useState(0);

  const accountOptions = [
    {
      id: 0,
      name: "My Profile",
      component: <PersonalInformation setActiveTab={setActiveTab} />,
    },
    {
      id: 1,
      name: "Account Tier",
      component: <AccountTier />,
    },
    {
      id: 2,
      name: "Security",
      component: <Security />,
    },
  ];

  return (
    <div>
      <div>
        <div className="flex justify-around pt-10 font-mulish  text-[#ADADAD]  font-bold  leading-7  cursor-pointer ">
          {accountOptions.map((data, index) => (
            <div key={index}>
              <div
                className={` ${
                  data.id === activeTab ? "border-b-HavannaGreen-secondary text-HavannaGreen-secondary border-b-4 " : ""
                }  pb-2 border-b-HavannaGreen-secondary text-HavannaGreen-secondary`}
              >
                <p
                  className="pb-2 text-[22px]"
                  onClick={() => {
                    setActiveTab(data.id);
                  }}
                >
                  {data.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="mb-[52px]" />
      </div>
      <div>{accountOptions[activeTab].component}</div>
    </div>
  );
};

export default index;
