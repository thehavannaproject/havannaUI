import Image from "next/image";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import investImage from "@images/investImage.png";
import investImage2 from "@images/investImage2.png";

const CurrentListings = () => {
  return (
    <div className="mt-10 font-mulish mb-16">
      <div className="flex justify-between">
        <p className="text-[#3B3F42] text-14 font-bold">Current Listings</p>
        <CustomLink customClass="text-14 text-[#39876B] font-medium" destination="#">
          See More
        </CustomLink>
      </div>
      {currentListing.map((item, index) => (
        <div className="mt-4 mb-8" key={index}>
          <Image alt="Property" src={item.image} />
          <h6 className="text-16 font-bold text-[#3B3F42] mt-3">{item.name}</h6>
          <p className="text-14 text-[#6B7276] mt-1">{item.location}</p>
          <p className="font-bold text-16 text-[#3B3F42] mt-2">₦ {item.price} per slot</p>
          <CustomLink customClass="bg-HavannaGreen-primary rounded-md text-14 font-bold w-fit mt-4 !text-white py-3 px-8" destination="/lsiting/make-investment">
            Invest Now
          </CustomLink>
        </div>
      ))}
    </div>
  );
};

export default CurrentListings;

export const currentListing = [
  {
    id: 0,
    image: investImage,
    name: "Edala Homes",
    location: "Ogunlana Drive, Surulere, Lagos, Nigeria.",
    price: "80,000",
  },

  {
    id: 1,
    image: investImage2,
    name: "Edala Homes",
    location: "Ogunlana Drive, Surulere, Lagos, Nigeria.",
    price: "80,000",
  },
];
