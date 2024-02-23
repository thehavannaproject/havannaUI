import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import Icon from "@components/atoms/Icons";
import InvestPropertyCard from "@components/blocks/investPropertyCard/index";

import { getAllListings } from "@components/api";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const [propertiesPerPage] = useState(6);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(properties.length / propertiesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getListings = () => {
    getAllListings()
      .then((res) => setProperties(res))
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

      <div className="grid grid-cols-3 gap-x-2 gap-y-10 mt-8">
        {currentProperties.map((property, index) => (
          <div key={index}>
              <InvestPropertyCard className="shadow-lg p-6" property={property} />
          </div>
        ))}
      </div>

      <div className="flex justify-end px-6  mt-10">
        <button
          className={`px-2  ${currentPage === 1 ? " border-[#8F8F8F] text-gray-500 cursor-not-allowed" : " text-HavannaGreen-primary"}`}
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          <Icon name="vectorStroke" />
        </button>
        {pageNumbers.map((number) => (
          <button
            className={`mx-2 py-2 px-5 rounded-full border ${
              currentPage === number ? "bg-HavannaGreen-secondary text-white" : "bg-white border-2 border-HavannaGreen-secondary text-[#3B3F42]"
            }`}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
        <button
          className={`mx-2 py-2 rounded-sm h-[50px] ${currentPage === pageNumbers.length ? "  cursor-not-allowed" : "  text-HavannaGreen-primary"}`}
          disabled={currentPage === pageNumbers.length}
          onClick={handleNextPage}
        >
          <Icon name="arrowRights" />
        </button>
      </div>
    </section>
  );
};

export default Index;
