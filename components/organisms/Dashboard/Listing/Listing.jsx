import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
// import Icon from "@components/atoms/Icons";
import InvestPropertyCard from "@components/blocks/investPropertyCard/index";

import { getAllListings } from "@components/api";
import CustomPagination from "@components/atoms/CustomPagination/CustomPagination";
import CustomLogoLoader from "@components/atoms/CustomLogoLoader";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 2;

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = properties?.slice(indexOfFirstProperty, indexOfLastProperty);

  const handlePageClick = (data) => {
    setCurrentPage(data);
  };
  useEffect(() => {
    setTotalPages(Math.ceil(properties?.length / itemsPerPage));
  }, [properties?.length]);

  const getListings = () => {
    setLoading(true);
    getAllListings()
      .then((res) => {setProperties(res.listings); setLoading(false);})
      .catch(() => toast.error("Error fetching Listings"));
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <section className="bg-[#F3FCFB] w-full pb-[120px] p-8 ">
      <div className="">
        <h1 className="font-mulish font-bold text-[36px] leading-[44px] text-black ">Listing</h1>
      </div>

      {loading ? (
        <CustomLogoLoader />
      ) : (
        <>
          {currentProperties?.length > 1 ? (
            <>
              <div className="grid tablet:grid-cols-2 smallLaptop:grid-cols-3 gap-x-2 gap-y-10 mt-8">
                {currentProperties.map((property, index) => (
                  <div key={index}>
                    <InvestPropertyCard className="shadow-lg p-6" property={property} />
                  </div>
                ))}
              </div>

              <div className="flex justify-end px-6  mt-10">
                <div className="flex justify-end mt-8">
                  <CustomPagination onChange={handlePageClick} pageCount={totalPages} />
                </div>
              </div>
            </>
          ) : (
            <div className=" flex justify-center items-center rounded-xl h-screen">
              <div>
                <p className="font-bold text-24 leading-[26px] text-HavannaBlack-neutral20 ">No Property listing available</p>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Index;
