import Image from "next/image";
import React from "react";

import PropertiesImg from "@images/investsvg/propertiesImg.svg";

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
        <Image alt="Property" src={property?.Image || PropertiesImg} />
      </div>
      <div className="mt-6 ">
        <Row value={property?.AssetType} />
        <div className="font-bold text-[#6B7276] text-18 leading-6">
          <Row value={property?.location} />
        </div>
        <Row value={property?.Cost} />
      </div>

      <div className="mt-8 ">
        <button className="bg-HavannaGreen-primary text-white font-mulish font-bold text-14 leading-[18px] rounded-lg w-[140px] h-[58px] mobile:h-12">Invest now</button>
      </div>
    </div>
  );
};

export default investPropertyCard;
