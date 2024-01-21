import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
// import { useRouter } from "next/router";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import CustomTable from "@components/atoms/CustomTable/CustomTable";
import CustomPagination from "@components/atoms/CustomPagination/CustomPagination";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { getCustomerPortfolio } from "@components/api";
import { AuthService } from "@components/api/auth";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import useClickOutside from "@components/shared/hooks";

const DesktopPortfolio = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [propName, setPropName] = useState("");
  const [porfolio, setPortfolio] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [viewMoreModal, setViewMoreModal] = useState(false);
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");

  const itemsPerPage = 2;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = porfolio.slice(startIndex, endIndex);

  const node = useClickOutside(() => {
    setShowDropdown(false);
  });

  useEffect(() => {
    setTotalPages(Math.ceil(porfolio.length / itemsPerPage));
  }, [porfolio.length]);

  const handlePageClick = (data) => {
    setCurrentPage(data);
    setSearchQuery("");
  };

  useEffect(() => {
    if (propName) {
      const filteredData = porfolio.filter((val) => val.name === propName);
      setPortfolio(filteredData);
    }
  }, [propName]);

  useEffect(() => {
    getCustomerPortfolio(userDetails?.customerId)
      .then((response) => setPortfolio(response.properties))
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Asset Type",
          accessor: "AssetType",
        },
        {
          Header: "Slots",
          accessor: "units",
        },

        {
          Header: "ROI",
          accessor: "Roi",
        },
        {
          Header: "Duration",
          accessor: "duration",
          Cell: (row) => {
            return <p>{row.cell.value} year</p>;
          },
        },

        {
          accessor: "action",
          Cell: (row) => (
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                setViewMoreModal(true);
                setSingleData(row.data[0]);
              }}
            >
              <Icon name="eyeSlash" />
            </div>
          ),
        },
      ],
    },
  ];

  const morePortfolioData = [
    {
      name: "Investment Type",
      data: "Lease",
    },
    {
      name: "Slots Price",
      data: "₦" + singleData?.value?.toLocaleString(),
    },
    {
      name: "Slots Purchased",
      data: singleData?.units,
    },
    {
      name: "Total Investment",
      data: "600,000",
    },
    {
      name: "ROI",
      data: "15%",
    },
    {
      name: "Accummulated ROI",
      data: "54,000",
    },
    {
      name: "Total Holding Period",
      data: "9 months",
    },
  ];

  return (
    <div>
      <section className="font-mulish pl-8 pr-[46px] pb-[91px] ">
        {!porfolio.name && porfolio.length <= 0 ? (
          <div className=" flex justify-center items-center rounded-xl h-screen  ">
            <div>
              <p className="font-bold text-24 leading-[26px] text-HavannaBlack-neutral20 ">No Investment in your portfolio</p>
              <button className="bg-HavannaGreen-primary text-white rounded-lg w-full font-bold text-16 h-[54px] mt-6 ">Invest</button>
            </div>
          </div>
        ) : (
          <div className="">
            <h1 className="text-24 leading-8 font-bold text-HavannaBlack-neutral20 pt-8">My Portfolio</h1>
            <div className="pt-8 desktop:flex justify-between">
              <div className="flex  gap-10 w-[60%] ">
                <div className=" w-full" onClick={() => setShowDropdown(!showDropdown)}>
                  <div className="relative">
                    <input
                      className=" h-[52px] w-full outline-none border-[1.3px] pl-4 rounded  border-[#8F8F8F]"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="All Properties"
                      type="text"
                      value={propName}
                    />

                    {/* <Icon className="cursor-pointer absolute right-0 top-6 pr-3 " name="angleDown" /> */}
                    {showDropdown ? (
                      <ChevronUpIcon className="cursor-pointer absolute right-0 top-5 pr-3 " width={30} />
                    ) : (
                      <ChevronDownIcon className="cursor-pointer absolute right-0 top-5 pr-3 " width={30} />
                    )}
                    {showDropdown && (
                      <div className="absolute top-17 z-10 bg-white w-full rounded-lg" ref={node}>
                        {porfolio.map((property, index) => (
                          <div
                            className="p-2 border-b cursor-pointer hover:bg-gray-50"
                            key={index}
                            onClick={() => {
                              setShowDropdown(false);
                              setPropName(property.name);
                            }}
                          >
                            {property.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative w-full">
                  <input
                    className=" h-[52px] outline-none border-[1.3px] pl-12 rounded border-[#8F8F8F]"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    type="text"
                    value={searchQuery}
                  />
                  <Icon className="absolute left-0 top-4 pl-3 " name="search" />
                </div>
              </div>
              <div className="w-[40%] flex justify-end ">
                <CustomButton customClass="bg-HavannaGreen-primary w-[200px] h-[52px] rounded-lg text-white smallLaptop:mt-2 tablet:mt- mb-10" title="Search" />
                {/* <button className="bg-HavannaGreen-primary w-[200px] h-[52px] rounded-lg text-white smallLaptop:mt-2 tablet:mt- mb-10 bigLaptop:  ">Search</button> */}
              </div>
            </div>
            <div className="border shadow-md pb-2 pt-10 rounded-xl text-HavannaBlack-primary bg-white  border-[#8F8F8F]">
              <h1 className="text-16 mb-8 px-4 font-bold">All Properties</h1>
              <CustomTable columns={columns} data={subset} />
            </div>
            <div className="flex justify-end mt-8">
              <CustomPagination onChange={handlePageClick} pageCount={totalPages} />
            </div>
            <div className="mt-7">
              <CustomLink
                customClass="w-[300px] h-[54px] font-bold text-16 leading-[22px] flex justify-center items-center  rounded-lg text-white bg-HavannaGreen-primary "
                destination="/listing/listing"
              >
                Explore more properties
              </CustomLink>
            </div>
          </div>
        )}

        {viewMoreModal && (
          <CustomModal cardClassName="max-w-[700px]" toggleVisibility={setViewMoreModal} visibility={viewMoreModal}>
            <div className="w-[700px] bg-white px-10 py-11 font-mulish rounded-[20px]">
              <h1 className="text-[22px] font-bold text-HavannaBlack-neutral20">Primero II By Edala Homes</h1>
              <p className="text-16 text-HavannaBlack-neutral50 font-medium mt-2">Ogunlana Drive, Surulere, Lagos, Nigeria.</p>
              <div className="mt-8">
                {morePortfolioData.map((data, index) => (
                  <div className="flex justify-between py-4 text-HavannaBlack-neutral font-medium border-b-[0.6px] border-b-[#DFE1E2] " key={index}>
                    <p>{data.name}</p>
                    <p>{data.data}</p>
                  </div>
                ))}
              </div>
            </div>
          </CustomModal>
        )}
      </section>
    </div>
  );
};

export default DesktopPortfolio;
