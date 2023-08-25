import Image from "next/image";
import React from "react";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import { currentListing } from "../../Dashboard/Mobile/CurrentListings";

const ActiveListings = () => {
  return (
    <div>
      {currentListing.map((item, index) => (
        <div className="mt-6 mb-8" key={index}>
          <Image alt="Property" src={item.image} />
          <h6 className="text-16 font-bold text-[#3B3F42] mt-3">{item.name}</h6>
          <p className="text-14 text-[#6B7276] mt-1">{item.location}</p>
          <p className="font-bold text-16 text-[#3B3F42] mt-2">₦ {item.price} per slot</p>
          <div className="flex justify-between">
            <CustomLink
              customClass="bg-HavannaGreen-primary rounded-[4px] text-14 font-bold  mt-4 !text-white h-[42px] w-[100px] text-center flex justify-center items-center"
              destination="#"
            >
              Invest Now
            </CustomLink>
            <CustomLink
              customClass="border-[1.5px] border-HavannaGreen-primary rounded-[4px] text-14 font-bold  mt-4 !text-HavannaGreen-primary h-[42px] w-[100px] text-center flex justify-center items-center"
              destination="#"
            >
              See More
            </CustomLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveListings;
