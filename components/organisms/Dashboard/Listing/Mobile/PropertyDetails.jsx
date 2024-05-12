import { Carousel } from "antd";
import { ClockCircleOutlined, HomeOutlined, SyncOutlined } from "@ant-design/icons";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

const PropertyDetails = ({ singleListing }) => {
  return (
    <div className="font-mulish relative">
      <div className="overflow-y-auto relative">
        <Carousel dots={{ className: "!text-HavannaGreen-secondary" }}>
          {singleListing?.listingImage?.map((image, index) => (
            <div className="relative" key={index}>
              <p className="absolute top-7 bg-white left-5 px-3 py-1 rounded-xl text-HavannaBlack-neutral20 text-12 font-medium">
                {status === 2 ? "Sold Out" : status === 1 ? "Active" : `${singleListing?.availableSlot} Slots Available`}
              </p>
              <img alt="Property" className="h-[300px] w-full object-cover rounded-lg" src={image.imageUrl || ""} />
            </div>
          ))}
        </Carousel>
        <div className="mt-6 px-6 mb-5">
          <h1 className="text-20 text-[#3B3F42] font-bold">{singleListing?.name}</h1>
          <p className="text-16 text-[#6B7276] mt-[6px]">{singleListing?.listingDetails?.location || "N/A"}</p>
          <hr className="mt-[18px] bg-[#ADADAD]" />
          <div className="mt-6">
            <h1 className="text-16 font-bold text-[#3B3F42]">Property Description</h1>
            <p className="mt-2 leading-5 text-14 capitalize text-[#4F5457]">{singleListing?.description?.toLowerCase()}</p>
          </div>
          <div className="mt-6">
            <h1 className="text-16 font-bold text-[#3B3F42]">Property Details</h1>
            <p className="mt-2 leading-5 text-14 text-[#4F5457] capitalize">{singleListing?.listingDetails?.propertyDetails?.toLowerCase()}</p>
          </div>
          <div className="mt-6">
            <h6 className="text-16 font-bold text-[#3B3F42]">Parties Involved</h6>
            <p className="mt-2 leading-5 text-14 text-[#4F5457] capitalize">{singleListing?.listingDetails?.partiesInvolved?.toLowerCase()}</p>
          </div>
          <div className="mt-6">
            <h6 className="text-16 font-bold text-[#3B3F42]">Propertity Amenities</h6>
            <ul className="font-medium text-18 leading-6">
              {singleListing?.listingDetails?.amenites?.split(",").map((item, index) => (
                <li className="flex gap-[15px] mt-3" key={index}>
                  <Icon name="tickGreen" /> {item}
                </li>
              ))}
            </ul>
        <div className="mt-8 font-mulish">
          <div className="bg-white shadow-lg mt-3 rounded-lg py-6 px-4">
            <div className="flex justify-between border-[1.3px] border-[#D6D6D6] rounded-[4px] px-3 py-[14px]">
              <div className="flex gap-2">
                <HomeOutlined className="text-[#39876B]" size={20} />
                <p className="text-14 font-bold">Investment Type</p>
              </div>
              <p className="text-14 font-bold text-[#39876B]">Lease</p>
            </div>
            <div className="flex justify-between border-[1.3px] border-[#D6D6D6] rounded-[4px] px-3 py-[14px] mt-4">
              <div className="flex gap-2">
              <SyncOutlined className="text-[#39876B]" size={20} />
                <p className="text-14 font-bold">Returns (ROI)</p>
              </div>
              <p className="text-14 font-bold text-[#39876B]">{singleListing?.listingDetails?.projectedReturns}%</p>
            </div>
            <div className="flex justify-between border-[1.3px] border-[#D6D6D6] rounded-[4px] px-3 py-[14px] mt-4">
              <div className="flex gap-2">
              <ClockCircleOutlined className="text-[#39876B]" size={20} />
                <p className="text-14 font-bold">Minimum Holding Period</p>
              </div>
              <p className="text-14 font-bold text-[#39876B]">{singleListing?.listingDetails?.minimumHoldingPeriod}</p>
            </div>
            <div className="flex justify-between border-[1.3px] border-[#D6D6D6] rounded-[4px] px-3 py-[14px] mt-4">
              <div className="flex gap-2">
              <ClockCircleOutlined className="text-[#39876B]" size={20} />
                <p className="text-14 font-bold">Maximum HoldingPeriod</p>
              </div>
              <p className="text-14 font-bold text-[#39876B]">{singleListing?.listingDetails?.maximumHoldingPeriod}</p>
            </div>
            <div className="pb-3">
              <CustomLink customClass="border-2 border-HavannaGreen-primary rounded-md py-2 text-HavannaGreen-primary font-semibold text-center mt-10" destination={"./public/LAGOS ETCC REGISTRATION FORM.pdf"} target="_blank">Download Terms & Conditions</CustomLink>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className="flex sticky bottom-0 border-t border-t-[#4F5457] justify-between w-full bg-white px-6 py-5">
        <div>
          <p className="text-20 text-HavannaGreen-secondary font-semibold">
            <span className="text-24">₦</span> {singleListing?.listingDetails?.unitCost?.toLocaleString()}
          </p>
          <p>Price Per Slot</p>
        </div>
        <div className="flex justify-center items-center">

        <CustomLink
          customClass="bg-HavannaGreen-primary rounded-[4px] text-14 font-bold !text-white h-[42px] w-[100px] text-center flex justify-center items-center"
          destination={`/listing/make-investment?listingId=${singleListing?.listingDetails?.listingId}`}
        >
          Invest Now
        </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
