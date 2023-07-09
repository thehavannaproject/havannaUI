import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";
// import PropertiesImg from "@images/investsvg/propertiesImg.svg";

const Row = ({ name, value }) => {
  return (
    <div className="py-2">
      <p className=" font-mulish font-bold text-14 leading-5">{name}</p>
      <p className=" font-mulish font-bold  leading-5 ">{value}</p>
    </div>
  );
};

const investPropertyCard = ({ property, className }) => {
  return (
    <div className={`cursor-pointer rounded-xl bg-white ${className} `}>
      <div className=" ">
        <Image alt="Property" className="relative z-20" src={property?.Image} />
      </div>
      <div className="mt-6">
        <div className="text-[22px] font-bold leading-[28px]">
          <Row value={property?.AssetType} />
        </div>
        <div className="font-bold text-[#6B7276] text-18 leading-6">
          <Row value={property?.location} />
        </div>
        <div className="text-18 font-bold flex leading-[24px] ">
          <Icon className="mt-[7px]" name="nairaBlack" />
          <Row value={property?.Cost} />
        </div>
      </div>

      <div className="mt-8 flex justify-between ">
        <button className="bg-HavannaGreen-primary text-white font-mulish font-bold text-14 leading-[18px] rounded-lg w-[140px] h-[58px] mobile:h-12">Invest now</button>
        <button className="bg-white border-2 border-HavannaGreen-primary text-HavannaGreen-primary font-mulish font-bold text-14 leading-[18px] rounded-lg w-[140px] h-[58px] mobile:h-12">
          Read more
        </button>
      </div>
    </div>
  );
};

export default investPropertyCard;
