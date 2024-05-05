import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import { getAllListings } from "@components/shared/api";

const AllListing = ({ status }) => {
  const [listing, setListing] = useState([]);

  const getListings = () => {
    getAllListings(status)
      .then((res) => {
        setListing(res.listings);
      })
      .catch(() => toast.error("Error fetching Listings"));
  };

  useEffect(() => {
    getListings();
  }, [status]);

  return (
    <>
        {listing.length > 0 ? (
      <div className="sm:grid grid-cols-2 gap-4">
          <>
            {listing?.map((item, index) => (
              <div className="mt-6 mb-8 " key={index}>
                <img alt="Property" className="h-[300px] w-full object-cover" src={item.listingImage.imageUrl} />
                <h6 className="text-16 font-bold text-[#3B3F42] mt-3">{item?.name ? item?.name : "N/A"}</h6>
                <p className="text-14 text-[#6B7276] mt-1">{item?.lisitingDetails?.location ? item?.lisitingDetails?.location : "N/A"}</p>
                <p className="font-bold text-16 text-[#3B3F42] mt-2">₦ {item?.lisitingDetails?.price ? item?.lisitingDetails?.price : "0"} per slot</p>
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
          </>
            </div>
        ) : (
          <>
            <p className="flex justify-center items-center mt-20">No property found</p>
          </>
        )}
    </>
  );
};

export default AllListing;
