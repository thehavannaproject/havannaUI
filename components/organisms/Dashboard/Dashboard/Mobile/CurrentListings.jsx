import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Carousel } from "antd";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import { getAllListings } from "@components/shared/api";

const CurrentListings = () => {
  const [listing, setListing] = useState([]);

  const getListings = () => {
    getAllListings()
      .then((res) => {
        setListing(res.listings);
      })
      .catch(() => toast.error("Error fetching Listings"));
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div className="mt-10 font-mulish mb-16">
      <div className="flex justify-between">
        <p className="text-[#3B3F42] text-14 font-bold">Current Listings</p>
        <CustomLink customClass="text-14 text-[#39876B] font-medium" destination="/listing">
          See More
        </CustomLink>
      </div>

      <div className="sm:flex gap-4">
        {listing?.slice(0, 3).map((item, index) => (
          <div className="mt-4 mb-8 relative" key={index}>
            <div className="h-[320px] border rounded-xl">
            <Carousel dots={{ className: "!text-HavannaGreen-secondary" }}>
              {item.listingImage.map((image, index) => (
                <div className="relative" key={index}>
                  <p className="absolute top-7 bg-white left-5 px-3 py-1 rounded-xl text-HavannaBlack-neutral20 text-12 font-medium">{item?.availableSlot === 0 ? "Sold Out" : `${item?.availableSlot} Slots Available`}</p>
                  <img alt="Property" className="h-[320px] w-full object-cover rounded-lg" src={image.imageUrl || ""} />
                </div>
              ))}
            </Carousel>
            </div>
            {/* <div>
              <p className="absolute top-4 bg-white left-4 px-3 py-1 rounded-xl text-HavannaBlack-neutral20 text-10 font-medium">{item?.availableSlot} Slots Available</p>
              <img alt="Property" className="h-[320px] object-cover w-full" src={item?.listingImage?.imageUrl} />
            </div> */}
            
            <h6 className="text-16 font-bold text-[#3B3F42] mt-3">{item?.name || "N/A"}</h6>
            <p className="text-14 text-[#6B7276] mt-1">{item.listingDetails.location || "N/A"}</p>
            <p className="font-bold text-16 text-[#3B3F42] mt-2">₦ {item?.listingDetails?.unitCost?.toLocaleString() || 0} per slot</p>
            <div className="flex justify-between">
              <CustomLink
                customClass="bg-HavannaGreen-primary rounded-[4px] text-14 font-bold  mt-4 !text-white h-[42px] w-[100px] text-center flex justify-center items-center"
                destination={`/listing/make-investment?listingId=${item?.listingDetails?.listingId}`}
              >
                Invest Now
              </CustomLink>
              <CustomLink
                customClass="border-[1.5px] border-HavannaGreen-primary rounded-[4px] text-14 font-bold  mt-4 !text-HavannaGreen-primary h-[42px] w-[100px] text-center flex justify-center items-center"
                destination={`/listing/${item?.listingDetails?.listingId}`}
              >
                See More
              </CustomLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentListings;
