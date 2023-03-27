import { useState } from "react";

import AccountTier from "./AccountTier";
import NextOfKin from "./NextOfKin";
import PersonalInformation from "./PersonalInformation";
import Security from "./Security";

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
      name: "Next Of Kin",
      component: <NextOfKin setActiveTab={setActiveTab} />,
    },
    {
      id: 2,
      name: "Account Tier",
      component: <AccountTier />,
    },
    {
      id: 3,
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
                }  pb-6 border-b-HavannaGreen-secondary text-HavannaGreen-secondary`}
              >
                <p
                  className="pb-6 text-[22px]"
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
