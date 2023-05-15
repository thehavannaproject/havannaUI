import React, { useState } from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import InvestPropertyCard from "@components/blocks/investPropertyCard/index";

import { propertiesDatas } from "../invest/PropertiesDatas";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(9);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = propertiesDatas.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(propertiesDatas.length / propertiesPerPage); i++) {
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
    <section className="bg-white pb-[120px] bigLaptop:px-[120px]">
      <div className="">
        <h1 className="font-mulish font-bold text-[36px] leading-[44px] text-black text-center bigLaptop:mt-[100px] pt-10 ">Invest in our listed properties.</h1>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 smallLaptop:grid-cols-3 gap-6 smallLaptop:gap-16 bigLaptop:gap-[84px] px-[22px] pt-11 bigLaptop:pt-[120px] ">
        {currentProperties.map((property, index) => (
          <div key={index}>
            <CustomLink destination="/propertyinvest">
              <InvestPropertyCard property={property} />
            </CustomLink>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          className={`mx-2 py-2 px-5 w-[100px] h-[50px] rounded-sm border-2 ${
            currentPage === 1 ? "bg-white border-[#8F8F8F] text-gray-500 cursor-not-allowed" : "bg-white border-2 border-HavannaGreen-secondary text-HavannaGreen-primary"
          }`}
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Previous
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
          className={`mx-2 py-2 px-5 rounded-sm w-[100px] h-[50px] border-2  ${
            currentPage === pageNumbers.length ? "bg-white text-gray-500 cursor-not-allowed" : "bg-white border-HavannaGreen-secondary text-HavannaGreen-primary"
          }`}
          disabled={currentPage === pageNumbers.length}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Index;
