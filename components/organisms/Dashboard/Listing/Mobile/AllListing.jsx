import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Carousel } from "antd";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import { getAllListings } from "@components/shared/api";
import CustomLogoLoader from "@components/atoms/CustomLogoLoader";
import EmptyState from "@components/atoms/EmptyState/EmptyState";

const AllListing = ({ status }) => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);

  const getListings = () => {
    setLoading(true);
    getAllListings(status ? status : "")
      .then((res) => {
        setLoading(false);
        setListing(res.listings);
      })
      .catch(() => toast.error("Error fetching Listings"));
  };

  useEffect(() => {
    getListings();
  }, [status]);

  return (
    <>
      {loading ? (
        <CustomLogoLoader />
      ) : (
        <>
          {listing.length > 0 ? (
            <div className="sm:grid grid-cols-2 gap-4">
              <>
                {listing?.map((item, index) => (
                  <div className="mt-6 mb-8 " key={index}>
                    <div className="h-[250px] border rounded-xl">
                      <Carousel dots={{ className: "!text-HavannaGreen-secondary" }}>
                        {item.listingImage.map((image, index) => (
                          <div className="relative" key={index}>
                            <p className="absolute top-7 bg-white left-5 px-3 py-1 rounded-xl text-HavannaBlack-neutral20 text-12 font-medium">
                              {status === 2 ? "Sold Out" : status === 1 ? "Active" : item?.availableSlot === 0 ? "Sold Out" : `${item?.availableSlot} Slots Available`} 
                            </p>
                            <img alt="Property" className="h-[250px] w-full object-cover rounded-lg" src={image.imageUrl || ""} />
                          </div>
                        ))}
                      </Carousel>

                    </div>
                    <h6 className="text-16 font-bold text-[#3B3F42] mt-3">{item?.name ? item?.name : "N/A"}</h6>
                    <p className="text-14 text-[#6B7276] mt-1 capitalize">{item?.listingDetails?.location.toLowerCase()}</p>
                    <p className="font-bold text-16 text-[#3B3F42] mt-2">₦ {item?.listingDetails?.unitCost ? item?.listingDetails?.unitCost.toLocaleString() : "0"} per slot</p>
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
            <EmptyState description="No property found"/>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AllListing;
