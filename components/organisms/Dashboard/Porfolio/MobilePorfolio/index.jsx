/* eslint-disable no-prototype-builtins */
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import CustomPagination from "@components/atoms/CustomPagination/CustomPagination";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import CustomModal from "@components/atoms/CustomModal/CustomModal";

const MobilePorfolio = ({porfolio}) => {
  const [currentPage, setCurrentPage] = useState(0);
  // const [portfolios, setPortfolio] = useState(porfolio);
  const [showNextPage, setShowNextPage] = useState(false);
  const [moreDetails, setMoreDetails] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = porfolio?.slice(startIndex, endIndex);


  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleSearchQuery = () => {
    if (searchQuery) {
      console.log(porfolio)
      const filteredProperties = porfolio?.filter((item) => {
        for (const key in item) {
          if (item.hasOwnProperty(key) && typeof item[key] === "string") {
            if (item[key].toLowerCase().includes(searchQuery)) {
              return true;
            }
          }
        }
        return false;
      });
      // eslint-disable-next-line no-param-reassign
      porfolio = filteredProperties;
      console.log(filteredProperties, "sdfj")
    }
  };

  useEffect(() => {
    handleSearchQuery();
  }, [searchQuery])

  console.log(porfolio)

  const propertyDetails = [
    {
      id: 0,
      title: "Investment Type",
      info: moreDetails?.type === 0 && "Lease",
    },
    {
      id: 1,
      title: "Slots Price",
      info: moreDetails?.value,
    },
    {
      id: 2,
      title: "Slots Purchased",
      info: moreDetails?.units,
    }, 
    {
      id: 3,
      title: "Total Investment",
      info: "600,000",
    },
    {
      id: 4,
      title: "ROI",
      info: moreDetails?.propertyReturnOnInvestmentPercentage + "%",
    },
    {
      id: 5,
      title: "Accummulated ROI",
      info: moreDetails?.accumulatedReturnOnInvestment,
    },
    {
      id: 6,
      title: "Total Holding Period",
      info: moreDetails?.holdingPeriod,
    },
  ];
  

  return (
    <div className="font-mulish mt-6">
      <p className="text-20 font-bold text-[#3B3F42]">My Portfolio</p>
      <div className="flex gap-3 border mt-[18px] px-3 py-[14px] rounded-lg bg-[#F5F5F5]">
        <MagnifyingGlassIcon color="#ADADAD" width={18} />
        <input className="outline-none bg-[#F5F5F5] text-14 w-full"  onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by property name or type" value={searchQuery} />
      </div>
      {porfolio.length <=0 && (
      <div className="h-full mt-32">
        <p className="text-[#ADADAD] text-[18px] text-center">No investment in your portfolio.</p>
        <CustomLink customClass="bg-HavannaGreen-primary rounded-[4px] mt-6 font-bold py-4 text-white w-full text-center" destination="#">
          Invest
        </CustomLink>
      </div>
      )}

      <div className="mt-3">
        {subset.map((data, index) => (
          <div className="border mt-6 shadow-sm rounded-lg" key={index} onClick={() => {setShowNextPage(true); setMoreDetails(data)}}>
            <div className="flex justify-between border-b p-3">
              <div>
                <p className="text-[#ADADAD] text-12">Asset name</p>
                <p className="text-14 font-bold text-[#39876B]">{data.name}</p>
              </div>
              <div>
                <p className="text-[#ADADAD] text-12">Asset type</p>
                <p className="text-14 font-bold text-[#39876B] text-right">{data.type === 0 && "Lease"}</p>
              </div>
            </div>
            <div className="flex justify-between border-b p-3">
              <div>
                <p className="text-[#ADADAD] text-12">Slots purchased</p>
                <p className="text-14 font-bold text-[#39876B]">{data.units}</p>
              </div>
              <div>
                <p className="text-[#ADADAD] text-12">ROI</p>
                <p className="text-14 font-bold text-[#39876B] text-right">{data.propertyReturnOnInvestmentPercentage}%</p>
              </div>
            </div>
            <div className="flex justify-between p-3">
              <div>
                <p className="text-[#ADADAD] text-12">Minimum duration</p>
                <p className="text-14 font-bold text-[#39876B]">{data.duration} months</p>
              </div>
              <div>
                <p className="text-[#ADADAD] text-12">Maximum duration</p>
                <p className="text-14 font-bold text-[#39876B] text-right">{data.duration} months</p>
              </div>
            </div>
          </div>
        ))}
      
        <div className="mt-[52px] mb-[60px]">
          <CustomPagination initialPage={currentPage} onChange={handlePageChange} pageCount={Math.ceil(porfolio?.length/5)} />
        </div>
      </div>
      <div>
        <CustomModal cardClassName="h-screen w-full" toggleVisibility={setShowNextPage} visibility={showNextPage}>
          <MenuHeader onClose={() => setShowNextPage(false)} title={moreDetails?.name}>
            <div className="bg-white text-black px-6 pt-4 font-mulish !w-full h-screen">
              <h1 className="text-20 text-[#3B3F42] font-bold">{moreDetails?.name}</h1>
              <p className="mt-[6px] text-[#6B7276] text-16">{moreDetails?.location}</p>

              <div className="mt-8 card-shadow py-6 px-4 text-14 text-[#4F5457]">
                {propertyDetails.map((data, index) => (
                  <div className="flex justify-between py-3 border-b" key={index}>
                    <p>{data.title}</p>
                    <p>{data.info}</p>
                  </div>
                ))}
              </div>
            </div>
          </MenuHeader>
        </CustomModal>
      </div>
    </div>
  );
};

export default MobilePorfolio;

