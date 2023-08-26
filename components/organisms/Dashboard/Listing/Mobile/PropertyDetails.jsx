import Image from "next/image";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import propertyImg from "@images/investsvg/Image-3.svg";

const PropertyDetails = () => {
  return (
    <div className="font-mulish relative">
      <div className="h-screen overflow-y-auto relative">
        <Image alt="Property" className=" object-cover !w-screen !h-[300px]" height={300} src={propertyImg} width={428} />
        <div className="mt-6 px-6 mb-5">
          <h1 className="text-20 text-[#3B3F42] font-bold">Crest Ville Prime II By Edala Homes</h1>
          <p className="text-16 text-[#6B7276] mt-[6px]">Ogunlana Drive, Surulere, Lagos, Nigeria.</p>
          <hr className="mt-[18px] bg-[#ADADAD]" />
          <div className="mt-6">
            <h1 className="text-16 font-bold text-[#3B3F42]">Property Details</h1>
            <p className="mt-2 leading-5 text-14 text-[#4F5457]">
              This is a project where investors are given the opportunity to own fully serviced one bedroom short-let apartment for a 23 year period. This is a project where
              investors are given the opportunity to own fully serviced one bedroom short-let apartment for a 23 year period.
            </p>
          </div>
          <div className="mt-6">
            <h6 className="text-16 font-bold text-[#3B3F42]">Parties Involved</h6>
            <p className="mt-2 leading-5 text-14 text-[#4F5457]">
              Havanna - Havanna is an investment platform, that enables Africans to purchase fractional shares of real estate assets here in Nigeria. Edala Homes - Edala Home is a
              cutting-edge real estate and investment company, dedicated to increasing access to homes and property ownership in Nigeria.
            </p>
          </div>
          <div className="mt-6">
            <h6 className="text-16 font-bold text-[#3B3F42]">Parties Involved</h6>
            <p className="mt-2 leading-5 text-14 text-[#4F5457]">
              Havanna - Havanna is an investment platform, that enables Africans to purchase fractional shares of real estate assets here in Nigeria. Edala Homes - Edala Home is a
              cutting-edge real estate and investment company, dedicated to increasing access to homes and property ownership in Nigeria.
            </p>
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
          destination="/listing/make-investment"
        >
          Invest Now
        </CustomLink>
      </div>
    </div>
  );
};

export default PropertyDetails;
