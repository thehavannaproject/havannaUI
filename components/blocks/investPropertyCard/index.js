// import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { Carousel } from "antd";

const investPropertyCard = ({ property, className }) => {
  const router = useRouter();
  return (
    <div className={`rounded-xl relative bg-white font-mulish h-[574px]  ${className} `}>
      <div className="relative h-[320px] border rounded-lg">

      <Carousel dots={{ className: "!text-HavannaGreen-secondary" }}>
        {property.listingImage.map((image, index) => (
          <div className="relative h-[320px]" key={index}>
            <p className="absolute top-5 bg-white left-2 px-3 py-1 rounded-xl text-HavannaBlack-neutral20 text-12 font-medium">
              {property?.availableSlot === 0 ? "Sold Out" : `${property?.availableSlot} Slots Available`}
            </p>
            <img alt="Property"  className="h-[320px] object-cover w-full rounded-lg" src={image.imageUrl || ""} />
          </div>
        ))}
      </Carousel>
      </div>
     
      <div className="mt-6">
        <div className="text-[22px] font-bold leading-[28px]">
          <p className=" font-mulish font-bold  leading-5 ">{property?.name}</p>
        </div>
        {/* <div className="font-bold text-[#6B7276] text-18 leading-6"> */}
        <p className=" font-mulish font-bold text-[#6B7276] text-16 leading-5 mt-3 capitalize">{property?.listingDetails?.location.toLowerCase()}</p>
        {/* </div> */}
        {/* <div className="text-18 font-bold flex leading-[24px] "> */}
        <p className=" font-mulish font-bold mt-2 text-18 leading-5 ">₦ {property?.listingDetails?.unitCost.toLocaleString() || 0}</p>
        {/* </div> */}
      </div>

      <div className="mt-8 flex justify-between gap-4 ">
        <button
          className="bg-HavannaGreen-primary text-white font-mulish font-bold text-14 leading-[18px] rounded-lg w-[140px] h-[58px] mobile:h-12"
          onClick={() => router.push({ pathname: `/listing/listingInvest/${property?.listingDetails?.listingId}` })}
        >
          Invest now
        </button>
        <button
          className="bg-white border-2 border-HavannaGreen-primary text-HavannaGreen-primary font-mulish font-bold text-14 leading-[18px] rounded-lg w-[140px] h-[58px] mobile:h-12"
          onClick={() => router.push(`/listing/${property?.listingDetails?.listingId}`)}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default investPropertyCard;
