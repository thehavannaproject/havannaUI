import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import { GetListingById } from "@components/api";


const InvestPage = () => {
  const [show, setShow] = useState(false);
  const [singleListing, setSingleListing] = useState({});
  const router = useRouter();
  const { propertyId } = router.query;

  const getListingById = () => {
    GetListingById(propertyId)
      .then((res) => {
        setSingleListing(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleButtonClick = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  useEffect(() => {
    getListingById();
  }),
    [];

  return (
    <section>
      <div className="  pb-28 font-mulish px-10 ">
        <div className="flex pt-8 gap-[28.38px]">
          {/* <Icon className="mt-1" name="investArrow" /> */}
          <div>
            <h1 className="font-bold text-[28px] leading-9 ">{singleListing?.name}</h1>
            <p className="font-medium text-18 leading-6">Ogunlana Drive, Surulere, Lagos, Nigeria.</p>
          </div>
        </div>
        <div className="flex gap-4 mt-12">
          <div className="">
            <Image alt="propertiesImg" className="rounded-tl-2xl rounded-bl-2xl" height={340}  src={singleListing?.listingImage?.imageUrl} width={658} />
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
        </div>
        <div className="flex justify-between gap-[100px] mt-12">
          <div>
            <div className="">
              <h2 className="font-bold text-[24px] leading-8 capitalize">{singleListing?.name?.toLowerCase()}</h2>
              <p className="font-medium text-18 leading-6 mt-[10px] capitalize">{singleListing?.description?.toLowerCase()}</p>
              <hr className="mt-5  border-[0.7px]" />
            </div>
            <div className=" flex gap-[70px] mt-5 justify-between">
              <div>
                <h2 className="font-bold text-[22px] leading-7 ">Property Details</h2>
                <p className="font-medium text-18 mt-3 leading-6 capitalize">{singleListing?.listingDetails?.propertyDetails?.toLowerCase()}</p>
                <h2 className="font-bold text-[22px] mt-8 leading-7">Parties Involved</h2>
                <p className="font-medium text-18 leading-6 mt-3 capitalize">{singleListing?.listingDetails?.partiesInvolved?.toLowerCase()}</p>
                <h1 className="font-bold text-[22px] leading-7 mt-8">Propertiy Amenities</h1>
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
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 ">{singleListing?.listingDetails?.returns}</p>
                  </div>
                </div>
                <div className="flex justify-between gap-5 border-[1.3px] mb-4 px-[14px] shadow- border-[#D6D6D6] h-[72px] rounded-[4px]   ">
                  <div className="flex gap-[15px] text-center items-center  ">
                    <Icon name="maximumIcon" />
                    <p className="font-bold text-18 leading-6">Minimum Holding Period</p>
                  </div>
                  <div className=" flex text-center items-center">
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 capitalize">{singleListing?.listingDetails?.minimumHoldingPeriod?.toLowerCase()}</p>
                  </div>
                </div>
                <div className="flex justify-between gap-5 border-[1.3px] px-[14px] shadow- border-[#D6D6D6] h-[72px] rounded-[4px]   ">
                  <div className="flex gap-[15px] text-center items-center  ">
                    <Icon name="minimumHolding" />
                    <p className="font-bold text-18 leading-6">Maximum Holding Period</p>
                  </div>
                  <div className=" flex text-center items-center">
                    <p className="text-HavannaGreen-secondary text-18 font-bold leading-6 capitalize">{singleListing?.listingDetails?.maximumHoldingPeriod?.toLowerCase()}</p>
                  </div>
                </div>
                <button className="w-full font-bold text-16 leading-[22px] h-[58px] mt-[60px] bg-HavannaGreen-primary text-white rounded-lg  " onClick={handleButtonClick}>
                  Invest now
                </button>
                <button className="w-full font-bold text-16 leading-[22px] h-[58px] mt-[30px] mb-11 border-[3px] border-HavannaGreen-primary text-HavannaGreen-primary rounded-lg">
                  Download terms & conditions
                </button>
              </div>
              <div>
                {show && (
                  <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="bg-white rounded-lg w-[800px]">
                      <Icon className="flex cursor-pointer justify-end pr-[19px] pt-[21px]" name="closeModal" onClick={handleCloseModal} />
                      <div className="   px-[160px] text-center ">
                        <h2 className="text-2xl font-bold mb-4">Welcome to Havanna</h2>
                        <p className="text-lg mb-8">Kindly log in to continue viewing.</p>
                        <CustomLink destination="/auth/login">
                          <div className="mt-20 ">
                            <button className="bg-HavannaGreen-primary text-white w-full rounded-lg h-[60px]">Log In</button>
                          </div>
                        </CustomLink>
                        <div className="pt-[26px] flex justify-center ">
                          <div className=" pb-20 flex">
                            Don’t have an account?&nbsp;
                            <span className="font-bold text-base text-HavannaGreen-primary">
                              <CustomLink destination="/auth/sign-up">Create an account</CustomLink>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestPage;
