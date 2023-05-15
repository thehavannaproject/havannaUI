import React from "react";

import Icon from "@atoms/Icons";

const BalanceCard = ({ price, title, description, icon }) => {
  return (
    <div className="bg-HavannaGreen-secondary smallLaptop:w-[410px] h-[218px] rounded-xl shadow-md pl-5 pt-[54px] mb-4 ">
      <p className="font-bold text-24 leading-8 mb-5">{price}</p>
      <p className="font-bold text-20 leading-[26px] mb-2  ">{title}</p>
      <div className="font-normal text-16 leading-6 flex justify-between bigLaptop:pr-20 pr-10 ">
        <p> {description}</p>
        <Icon name={icon} />
      </div>
    </div>
  );
};

export default BalanceCard;
