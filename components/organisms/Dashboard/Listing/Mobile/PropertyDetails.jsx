import Image from "next/image";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import propertyImg from "@images/investsvg/Image-3.svg";

const PropertyDetails = ({singleListing}) => {
  console.log(singleListing);
  return (
    <div className="font-mulish relative">
      <div className="h-screen overflow-y-auto relative">
      <Image alt="propertiesImg" className="rounded-tl-2xl rounded-bl-2xl" height={340} src={singleListing?.listingImage?.imageUrl || propertyImg} width={658} />
        <div className="mt-6 px-6 mb-5">
          <h1 className="text-20 text-[#3B3F42] font-bold">{singleListing?.name}</h1>
          <p className="text-16 text-[#6B7276] mt-[6px]">{singleListing?.listingDetails?.location || 'N/A'}</p>
          <hr className="mt-[18px] bg-[#ADADAD]" />
          <div className="mt-6">
            <h1 className="text-16 font-bold text-[#3B3F42]">Property Description</h1>
            <p className="mt-2 leading-5 text-14 capitalize text-[#4F5457]">
            {singleListing?.description?.toLowerCase()}
            </p>
          </div>
          <div className="mt-6">
            <h1 className="text-16 font-bold text-[#3B3F42]">Property Details</h1>
            <p className="mt-2 leading-5 text-14 text-[#4F5457] capitalize">
            {singleListing?.listingDetails?.propertyDetails?.toLowerCase()}
            </p>
          </div>
          <div className="mt-6">
            <h6 className="text-16 font-bold text-[#3B3F42]">Parties Involved</h6>
            <p className="mt-2 leading-5 text-14 text-[#4F5457] capitalize">
            {singleListing?.listingDetails?.partiesInvolved?.toLowerCase()}
            </p>
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
          </div>
        </div>
      </div>
      <div className="flex sticky bottom-0 border-t border-t-[#4F5457] justify-between w-full bg-white px-6 py-5">
        <div>
          <p className="text-20">
            <span className="text-24">₦</span> 30,000
          </p>
          <p>Price Per Slot</p>
        </div>
        <CustomLink
          customClass="bg-HavannaGreen-primary rounded-[4px] text-14 font-bold  mt-4 !text-white h-[42px] w-[100px] text-center flex justify-center items-center"
          destination={`/listing/make-investment?listingId=${singleListing?.listingDetails?.listingId}`}
        >
          Invest Now
        </CustomLink>
      </div>
    </div>
  );
};

export default PropertyDetails;
