// import Image from "next/image";
import React from "react";
import {useRouter} from 'next/router';

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
  const router = useRouter();
  return (
    <div className={`rounded-xl relative bg-white font-mulish h-[574px] w-[360px] ${className} `}>
      <div className=" ">
        <p className="absolute top-10 bg-white left-10 px-3 py-1 rounded-xl text-HavannaBlack-neutral20 text-12 font-medium">{property?.availableSlot} Slots Available</p>
        <img alt="Property" className="h-[320px] object-cover" src={property?.listingImage?.imageUrl} />
      </div>
      <div className="mt-6">
        <div className="text-[22px] font-bold leading-[28px]">
          <Row value={property?.name} />
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
        <button className="bg-HavannaGreen-primary text-white font-mulish font-bold text-14 leading-[18px] rounded-lg w-[140px] h-[58px] mobile:h-12" onClick={() => router.push({pathname: `/listing/listingInvest/${property?.listingDetails?.listingId}`})} >Invest now</button>
        <button className="bg-white border-2 border-HavannaGreen-primary text-HavannaGreen-primary font-mulish font-bold text-14 leading-[18px] rounded-lg w-[140px] h-[58px] mobile:h-12" onClick={() => router.push(`/listing/${property?.listingDetails?.listingId}`)}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default investPropertyCard;
