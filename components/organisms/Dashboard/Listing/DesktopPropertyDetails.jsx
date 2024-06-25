import React from "react";
import { useRouter } from "next/router";

import { Carousel } from "antd";
import Icon from "@components/atoms/Icons";
import CustomLink from "@components/atoms/CustomLink/CustomLink";

const DesktopPropertyDetails = ({ singleListing }) => {
  const router = useRouter()
  return (
    <section>
      <div className="  pb-28 font-mulish px-10 ">
        <div className="flex pt-8 gap-[28.38px]">
          <div onClick={() => router.back(-1)} className="cursor-pointer">
            <Icon className="mt-2" name="investArrow" />
          </div>
          <div>
            <h1 className="font-bold text-[28px] leading-9 ">{singleListing?.name}</h1>
            <p className="font-medium text-18 leading-6 capitalize">{singleListing?.listingDetails?.location.toLowerCase()}</p>
          </div>
        </div>
        <div className="relative h-[400px] border rounded-lg mt-8">
          <Carousel autoplay dots={{ className: "!text-HavannaGreen-secondary" }}>
            {singleListing?.listingImage?.map((image, index) => (
              <div className="relative" key={index}>
                <p className="absolute top-5 bg-white left-2 px-3 py-1 rounded-xl text-HavannaBlack-neutral20 text-12 font-medium">
                  {singleListing?.availableSlot === 0 ? "Sold Out" : `${singleListing?.availableSlot} Slots Available`}
                </p>
                <img alt="Property" className="!h-[400px] object-cover w-full rounded-lg" src={image.imageUrl || ""} />
              </div>
            ))}
          </Carousel>
        </div>
        {/* <div className="flex gap-4 mt-12">
          <div className="">
            <Image alt="propertiesImg" className="rounded-tl-2xl rounded-bl-2xl" height={340} src={singleListing?.listingImage?.imageUrl} width={658} />
          </div>
          <div>
            <div className="flex gap-4">
              <Image alt="propertiesImg" className="object-cover" height={160} src={singleListing?.listingImage?.imageUrl} width={334} />
              <Image alt="propertiesImg" height={150} src={singleListing?.listingImage?.imageUrl} width={334} />
            </div>
            <div className="flex mt-4 gap-4">
              <Image alt="propertiesImg" height={160} src={singleListing?.listingImage?.imageUrl} width={334} />
              <Image alt="propertiesImg" height={150} src={singleListing?.listingImage?.imageUrl} width={334} />
            </div>
          </div>
        </div> */}
        <div className="smallLaptop:flex justify-between gap-[100px] mt-12">
          <div>
            <div className="">
              <h2 className="font-bold text-[24px] leading-8 capitalize">{singleListing?.name?.toLowerCase()}</h2>
              <p className="font-medium text-18 leading-6 mt-[10px] capitalize">{singleListing?.description?.toLowerCase()}</p>
              <hr className="mt-5  border-[0.7px]" />
            </div>
            <div className=" flex gap-[70px] mt-5 justify-between">
              <div>
                <div className="">
                  <h2 className="font-bold text-[22px] leading-7 ">Property Description</h2>
                  <p className="font-medium text-18 mt-3 leading-6 capitalize">{singleListing?.description?.toLowerCase()}</p>
                </div>
                <h2 className="font-bold text-[22px] leading-7 mt-8">Property Details</h2>
                <p className="font-medium text-18 mt-3 leading-6 capitalize">{singleListing?.listingDetails?.propertyDetails?.toLowerCase()}</p>
                <h2 className="font-bold text-[22px] mt-8 leading-7">Parties Involved</h2>
                <p className="font-medium text-18 leading-6 mt-3 capitalize">{singleListing?.listingDetails?.partiesInvolved?.toLowerCase()}</p>
                <h1 className="font-bold text-[22px] leading-7 mt-8">Propertity Amenities</h1>
                <ul className="font-medium text-18 leading-6">
                  {singleListing?.listingDetails?.amenites?.split(",").map((item, index) => (
                    <li className="flex gap-[15px] mt-3" key={index}>
                      <Icon name="tickGreen" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="  rounded-[20px] shadow-lg bg-white px-10  mt-[70px] ">
            <div>
              <h1 className="font-bold text-HavannaGreen-secondary text-24 leading-8 mt-11 flex gap-[9.33px] text-center   ">
                {" "}
                <Icon className="w-[21.33px] h-6 " name="naira" /> {singleListing?.listingDetails?.unitCost.toLocaleString()}
              </h1>
              <p className="font-bold text-18 leading-6 ">Price per Slot</p>

              <div className="mt-8">
                <div className="flex justify-between border-[1.3px] px-[14px] mb-4  border-[#D6D6D6] h-[72px] rounded-[4px]   ">
                  <div className="flex gap-[15px] ">
                    <Icon className="flex text-center items-center " name="investmentHome" />
                    <p className="font-bold text-18 leading-6 flex justify-center items-center ">Investment Type</p>
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
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 ">{singleListing?.listingDetails?.projectedReturns}%</p>
                  </div>
                </div>
                <div className="flex justify-between gap-5 border-[1.3px] mb-4 px-[14px] shadow- border-[#D6D6D6] h-[72px] rounded-[4px]   ">
                  <div className="flex gap-[15px]  ">
                  
                    <Icon className="flex text-center items-center " name="maximumIcon" />
                    <p className="font-bold text-18 leading-6 flex justify-center  items-center">Minimum Holding Period</p>
                  </div>
                  <div className=" flex text-center items-center">
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 capitalize">{singleListing?.listingDetails?.minimumHoldingPeriod?.toLowerCase()}</p>
                  </div>
                </div>
                <div className="flex justify-between gap-5 border-[1.3px] px-[14px] shadow- border-[#D6D6D6] h-[72px] rounded-[4px]   ">
                  <div className="flex gap-[15px] ">
                    <Icon className="flex  text-center items-center " name="minimumHolding" />
                    <p className="font-bold text-18 leading-6  flex justify-center  items-center">Maximum Holding Period</p>
                  </div>
                  <div className=" flex text-center items-center">
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 capitalize">{singleListing?.listingDetails?.maximumHoldingPeriod?.toLowerCase()}</p>
                  </div>
                </div>
                <CustomLink
                  customClass="w-full font-bold text-16 leading-[22px] h-[58px] mt-[60px] bg-HavannaGreen-primary text-white rounded-lg flex justify-center items-center  "
                  destination={`/listing/listingInvest/${singleListing?.listingDetails?.listingId}`}
                >
                  Invest Now
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

export default DesktopPropertyDetails;
