import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import CustomPagination from "@components/atoms/CustomPagination/CustomPagination";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import { getCustomerPortfolio } from "@components/api";
import { AuthService } from "@components/api/auth";

const MobilePorfolio = () => {
  const authService = new AuthService();
  const [currentPage, setCurrentPage] = useState(0);
  const [showNextPage, setShowNextPage] = useState(false);
  const [porfolio, setPortfolio] = useState([]);
  const userDetails = authService.getDetails("ud");

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    getCustomerPortfolio(userDetails?.customerId)
      .then((response) => setPortfolio(response.properties))
      .catch((error) => console.log(error));
  }, []);

  console.log(porfolio);

  return (
    <div className="font-mulish mt-6">
      <p className="text-20 font-bold text-[#3B3F42]">My Portfolio</p>
      <div className="flex gap-3 border mt-[18px] px-3 py-[14px] rounded-lg bg-[#F5F5F5]">
        <MagnifyingGlassIcon color="#ADADAD" width={18} />
        <input className="outline-none bg-[#F5F5F5] text-14 w-full" placeholder="Search by property name or type" />
      </div>
      <div className="h-full mt-32 hidden">
        <p className="text-[#ADADAD] text-[18px] text-center">No investment in your portfolio.</p>
        <CustomLink customClass="bg-HavannaGreen-primary rounded-[4px] mt-6 font-bold py-4 text-white w-full text-center" destination="#">
          Invest
        </CustomLink>
      </div>

      <div className="mt-3">
        {Array(3).fill(
          <div className="border mt-6 shadow-sm rounded-lg" onClick={() => setShowNextPage(true)}>
            <div className="flex justify-between border-b p-3">
              <div>
                <p className="text-[#ADADAD] text-12">Asset name</p>
                <p className="text-14 font-bold text-[#39876B]">Primero</p>
              </div>
              <div>
                <p className="text-[#ADADAD] text-12">Asset type</p>
                <p className="text-14 font-bold text-[#39876B] text-right">Lease</p>
              </div>
            </div>
            <div className="flex justify-between border-b p-3">
              <div>
                <p className="text-[#ADADAD] text-12">Slots purchased</p>
                <p className="text-14 font-bold text-[#39876B]">12</p>
              </div>
              <div>
                <p className="text-[#ADADAD] text-12">ROI</p>
                <p className="text-14 font-bold text-[#39876B] text-right">15%</p>
              </div>
            </div>
            <div className="flex justify-between p-3">
              <div>
                <p className="text-[#ADADAD] text-12">Minimum duration</p>
                <p className="text-14 font-bold text-[#39876B]">15 months</p>
              </div>
              <div>
                <p className="text-[#ADADAD] text-12">Maximum duration</p>
                <p className="text-14 font-bold text-[#39876B] text-right">3 years</p>
              </div>
            </div>
          </div>
        )}
        <div className="mt-[52px] mb-[60px]">
          <CustomPagination initialPage={currentPage} onChange={handlePageChange} pageCount={3} />
        </div>
      </div>
      <div>
        <CustomModal cardClassName="h-screen" visibility={showNextPage}>
          <MenuHeader onClose={() => setShowNextPage(false)} title="Primero">
            <div className="bg-white text-black px-6 pt-4 font-mulish !w-full h-screen">
              <h1 className="text-20 text-[#3B3F42] font-bold">Primero II By Edala Homes</h1>
              <p className="mt-[6px] text-[#6B7276] text-16">Ogunlana Drive, Surulere, Lagos, Nigeria.</p>

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

const propertyDetails = [
  {
    id: 0,
    title: "Investment Type",
    info: "Lease",
  },
  {
    id: 1,
    title: "Slots Price",
    info: "30,000",
  },
  {
    id: 2,
    title: "Slots Purchased",
    info: "20",
  },
  {
    id: 3,
    title: "Total Investment",
    info: "600,000",
  },
  {
    id: 4,
    title: "ROI",
    info: "15%",
  },
  {
    id: 5,
    title: "Accummulated ROI",
    info: "54,000",
  },
  {
    id: 6,
    title: "Total Holding Period",
    info: "9 months",
  },
];
