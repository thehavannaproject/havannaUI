import React from "react";

import Icon from "@atoms/Icons";

const PropertyStatCard = ({ balance, title, description, icon }) => {
  return (
    <div className="bg-white wallet-bg px-5 py-[54px] rounded-xl shadow-md">
      <div>
        <p className="font-bold text-24 leading-8 mb-5">{balance}</p>
        <div>
          <p className="font-bold text-20 leading-[26px] ">{title}</p>
          <div className=" flex justify-between">
            <p className="font-normal text-16 leading-6 pt-2">{description}</p>
            <Icon name={icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyStatCard;
