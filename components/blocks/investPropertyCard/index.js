import Image from "next/image";
import React from "react";

import PropertyImage1 from "@images/investsvg/Image-1.svg";

const Row = ({ name, value }) => {
  return (
    <div className="flex  justify-between text-xs">
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
};

const investPropertyCard = ({ property, handleShowModal }) => {
  return (
    <div className="cursor-pointer shadow-lg rounded-xl text-center px-8 bigLaptop:px-[40px] py-[60px] bg-white " onClick={handleShowModal}>
      <div className=" ">
        <Image alt="Property" src={property.Image || PropertyImage1} />
      </div>
      <div className=" space-y-[12px] mt-8">
        <Row name="Asset Type" value={property.AssetType} />
        <Row name="Price" value={property.Cost} />
        <Row name="Price Per Slot" value={property.SlotPrice} />
        <Row name="Monthly ROI" value={property.MonthlyROI} />
        <Row name="Duration" value={property.Duration} />
      </div>

      <div className=" mt-16 ">
        <button className="bg-HavannaGreen-primary text-white font-mulish rounded-lg w-full h-[58px] mobile:h-12  ">Invest now</button>
      </div>
    </div>
  );
};

export default investPropertyCard;
