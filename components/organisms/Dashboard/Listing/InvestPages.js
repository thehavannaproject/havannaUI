import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import propertiesImg from "@images/investsvg/Image (11).svg";
import propertiesImg1 from "@images/investsvg/Image-1.svg";
import propertiesImg2 from "@images/investsvg/Image-2.svg";
import propertiesImg3 from "@images/investsvg/Image-3.svg";
import propertiesImg4 from "@images/investsvg/Image.svg";

const InvestPage = () => {
  const router = useRouter();

  return (
    <section>
      <div className=" bg-[#F3FCFB]  pb-28 font-mulish px-10 ">
        <div className="flex pt-8 gap-[28.38px]">
          <Icon
            className="mt-1 cursor-pointer"
            name="investArrow"
            onClick={() => {
              router.back();
            }}
          />
          <div>
            <h1 className="font-bold text-[28px] leading-9 ">Edala Homes</h1>
            <p className="font-medium text-18 leading-6">Ogunlana Drive, Surulere, Lagos, Nigeria.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="">
            <Image alt="propertiesImg" height={440} src={propertiesImg} width={728} />
          </div>
          <div>
            <div className="flex mt-[28px] gap-4">
              <Image alt="propertiesImg" src={propertiesImg4} />
              <Image alt="propertiesImg" src={propertiesImg1} />
            </div>
            <div className="flex mt-4 gap-4">
              <Image alt="propertiesImg" src={propertiesImg2} />
              <Image alt="propertiesImg" src={propertiesImg3} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-[170px]">
          <div>
            <div className="mt-[52px]">
              <h2 className="font-bold text-[24px] leading-8">Crest Ville Prime II</h2>
              <p className="font-medium text-18 leading-6 mt-[10px]">One Bedroom . Fully Furnished</p>
              <hr className="mt-5  border-[0.7px]" />
            </div>
            <div className=" flex gap-[70px] mt-5 justify-between">
              <div>
                <h2 className="font-bold text-[22px] leading-7 ">Property Details</h2>
                <p className="font-medium text-18 mt-3 leading-6">
                  This is a project where investors are given the opportunity to own fully serviced one bedroom short-let apartment for a 23 year period. This is a project where
                  investors are given the opportunity to own fully serviced one bedroom short-let apartment for a 23 year period.
                </p>
                <h2 className="font-bold text-[22px] mt-8 leading-7">Parties Involved</h2>
                <p className="font-medium text-18 leading-6 mt-3  ">
                  Havanna - Havanna is an investment platform, that enables Africans to purchase fractional shares of real estate assets here in Nigeria. Edala Homes - Edala Home
                  is a cutting-edge real estate and investment company, dedicated to increasing access to homes and property ownership in Nigeria.
                </p>
                <h1 className="font-bold text-[22px] leading-7 mt-8">Propertiy Amenities</h1>
                <ul className="font-medium text-18 leading-6">
                  <li className="flex gap-[15px] mt-3">
                    <Icon name="tickGreen" /> Car Park
                  </li>
                  <li className="flex gap-[15px] mt-3">
                    <Icon name="tickGreen" /> Fully Serviced Space
                  </li>
                  <li className="flex gap-[15px] mt-3">
                    <Icon name="tickGreen" /> Security
                  </li>
                  <li className="flex gap-[15px] mt-3">
                    <Icon name="tickGreen" /> Fully Furnished
                  </li>
                  <li className="flex gap-[15px] mt-3">
                    <Icon name="tickGreen" /> Water Supply
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="  rounded-[20px] shadow-lg  mt-[70px] bg-white px-10  ">
            <div>
              <h1 className="font-bold text-HavannaGreen-secondary text-24 leading-8 mt-11 flex gap-[9.33px] text-center   ">
                <Icon className="w-[21.33px] h-6 " name="naira" /> 30,000
              </h1>
              <p className="font-bold text-18 leading-6 ">Price per Slot</p>

              <div className="mt-8">
                <div className="flex justify-between border-[1.3px] px-[14px] mb-4  border-[#D6D6D6] h-[72px] rounded-[4px]   ">
                  <div className="flex gap-[15px] text-center items-center  ">
                    <Icon name="investmentHome" />
                    <p className="font-bold text-18 leading-6">Investment Type</p>
                  </div>
                  <div className=" flex text-center items-center">
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 ">Lease</p>
                  </div>
                </div>
                <div className="flex justify-between border-[1.3px] px-[14px] mb-4 shadow- border-[#D6D6D6] h-[72px] rounded-[4px]   ">
                  <div className="flex gap-[15px] text-center items-center  ">
                    <Icon name="returnsIcon" />
                    <p className="font-bold text-18 leading-6">Returns (ROI)</p>
                  </div>
                  <div className=" flex text-center items-center">
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 ">12%-15%</p>
                  </div>
                </div>
                <div className="flex justify-between gap-5 border-[1.3px] mb-4 px-[14px] shadow- border-[#D6D6D6] h-[72px] rounded-[4px]   ">
                  <div className="flex gap-[15px] text-center items-center  ">
                    <Icon name="maximumIcon" />
                    <p className="font-bold text-18 leading-6">Minimum Holding Period</p>
                  </div>
                  <div className=" flex text-center items-center">
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 ">13 months</p>
                  </div>
                </div>
                <div className="flex justify-between gap-5 border-[1.3px] px-[14px] shadow- border-[#D6D6D6] h-[72px] rounded-[4px]   ">
                  <div className="flex gap-[15px] text-center items-center  ">
                    <Icon name="minimumHolding" />
                    <p className="font-bold text-18 leading-6">Maximum Holding Period</p>
                  </div>
                  <div className=" flex text-center items-center">
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 ">32 months</p>
                  </div>
                </div>
                <CustomLink destination="/listing/investnow">
                  <button className="w-full font-bold text-16 leading-[22px] h-[58px] mt-[60px] bg-HavannaGreen-primary text-white rounded-lg  ">Invest now</button>
                </CustomLink>
                <button className="w-full font-bold text-16 leading-[22px] h-[58px] mt-[30px] mb-11 border-[3px] border-HavannaGreen-primary text-HavannaGreen-primary rounded-lg">
                  Download terms & conditions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestPage;
