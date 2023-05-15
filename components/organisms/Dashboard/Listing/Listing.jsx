import React, { useState } from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import InvestPropertyCard from "@components/blocks/investPropertyCard/index";

import { ListingProperties } from "./ListingProperties";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(6);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = ListingProperties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(ListingProperties.length / propertiesPerPage); i++) {
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

  return (
    <section className="bg-[#F3FCFB] pb-[120px] bigLaptop:px-[120px]">
      <div className="">
        <h1 className="font-mulish font-bold text-[36px] leading-[44px] text-black pl-8 bigLaptop:mt-[100px] pt-10 ">Listing</h1>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 smallLaptop:grid-cols-3 gap-6 smallLaptop:gap-16 bigLaptop:gap-[84px] px-[22px] pt-11 bigLaptop:pt-[120px] ">
        {currentProperties.map((property, index) => (
          <div className="shadow-xl  rounded-[20px]" key={index}>
            <CustomLink destination="/listing/investpage">
              <InvestPropertyCard className="p-4" property={property} />
            </CustomLink>
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
