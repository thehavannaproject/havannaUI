import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { EyeOutlined } from "@ant-design/icons";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import CustomTable from "@components/atoms/CustomTable/CustomTable";
import CustomPagination from "@components/atoms/CustomPagination/CustomPagination";
// import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
// import useClickOutside from "@components/shared/hooks";
import CustomLogoLoader from "@components/atoms/CustomLogoLoader";

const DesktopPortfolio = ({ porfolio, loading }) => {
  const router = useRouter();
  // const [propName, setPropName] = useState("");

  const [singleData, setSingleData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  // const [showDropdown, setShowDropdown] = useState(false);
  const [viewMoreModal, setViewMoreModal] = useState(false);

  const [subset, setSubset] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  // const [filteredProperties, setFilteredProperties] = useState(null);
  
  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // let subset = porfolio?.slice(startIndex, endIndex);


  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const handleSearchQuery = () => {
    
    if (searchQuery) {
      const filteredProperties = porfolio?.filter((item) => {
        for (const key in item) {
          // eslint-disable-next-line no-prototype-builtins
          if (item.hasOwnProperty(key) && typeof item[key] === "string") {
            if (item[key].toLowerCase().includes(searchQuery.toLocaleLowerCase())) {
              return true;
            }
          }
        }
        return false;
      });
      setTotalPage(filteredProperties.length)
      return setSubset(filteredProperties?.slice(startIndex, endIndex));      // eslint-disable-next-line no-param-reassign
    } 
    setTotalPage(porfolio?.length)
    return setSubset(porfolio?.slice(startIndex, endIndex))
  };

  useEffect(() => {
    handleSearchQuery();
  }, [searchQuery, porfolio, viewMoreModal, totalPage])

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
          accessor: "type",
          Cell: (row) => {
            return <p>{row.cell.value === 0 && "Lease"}</p>;
          },
        },
        {
          Header: "Slots",
          accessor: "units",
        },

        {
          Header: "ROI",
          accessor: "accumulatedReturnOnInvestmentPercentage",
        },
        {
          Header: "Duration",
          accessor: "duration",
          Cell: (row) => {
            return <p>{row.cell.value} month</p>;
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
              <EyeOutlined className="text-20 text-HavannaGreen-secondary"/>
            </div>
          ),
        },
      ],
    },
  ];


  const morePortfolioData = [
    {
      id: 0,
      title: "Investment Type",
      info: singleData?.type === 0 && "Lease",
    },
    {
      id: 1,
      title: "Slots Price",
      info: singleData?.value?.toLocaleString(),
    },
    {
      id: 2,
      title: "Slots Purchased",
      info: singleData?.units,
    }, 
    {
      id: 3,
      title: "Total Investment",
      info: (singleData?.value * singleData?.units).toLocaleString(),
    },
    {
      id: 4,
      title: "ROI",
      info: singleData?.propertyReturnOnInvestmentPercentage + "%",
    },
    {
      id: 5,
      title: "Accummulated ROI",
      info: singleData?.accumulatedReturnOnInvestment,
    },
    {
      id: 6,
      title: "Total Holding Period",
      info: singleData?.holdingPeriod,
    },
  ];


  return (
    <div>
      <section className="font-mulish pl-8 pr-[46px] pb-[91px]">
        {loading ? (
          <CustomLogoLoader />
        ) : (
          <>
            {subset?.length < 0 ? (
              <div className=" flex justify-center items-center rounded-xl h-screen">
                <div>
                  <p className="font-bold text-24 leading-[26px] text-HavannaBlack-neutral20 ">No Investment in your portfolio</p>
                  <button className="bg-HavannaGreen-primary text-white rounded-lg w-full font-bold text-16 h-[54px] mt-6" onClick={() => router.push("/listing")}>
                    Invest
                  </button>
                </div>
              </div>
            ) : (
              <div className="">
                <h1 className="text-24 leading-8 font-bold text-HavannaBlack-neutral20 pt-8">My Portfolio</h1>
                <div className="pt-8 desktop:flex justify-end">
                  <div>
                    <div className="relative w-full">
                      <input
                        className=" h-[52px] w-[24rem] outline-none border-[1.3px] pl-12 rounded border-[#8F8F8F]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search"
                        type="text"
                        value={searchQuery}
                      />
                      <Icon className="absolute left-0 top-4 pl-3 " name="search" />
                    </div>
                  </div>
                  
                </div>
                <div className="border shadow-md pb-2 mt-10 pt-10 rounded-xl text-HavannaBlack-primary bg-white  border-[#8F8F8F]">
                  <h1 className="text-16 mb-8 px-4 font-bold">All Properties</h1>
                  <CustomTable columns={columns} data={subset || []} />
                </div>
                {subset >= 5 && (
                  <div className="flex justify-end mt-8">
                    <CustomPagination onChange={handlePageChange} pageCount={Math.ceil(totalPage/5)} />
                  </div>

                )}
                <div className="mt-7">
                  <CustomLink
                    customClass="w-[300px] h-[54px] font-bold text-16 leading-[22px] flex justify-center items-center  rounded-lg text-white bg-HavannaGreen-primary "
                    destination="/listing"
                  >
                    Explore more properties
                  </CustomLink>
                </div>
              </div>
            )}
          </>
        )}

        {viewMoreModal && (
          <CustomModal cardClassName="max-w-[700px]" toggleVisibility={setViewMoreModal} visibility={viewMoreModal}>
            <div className="w-[700px] bg-white px-10 py-11 font-mulish rounded-[20px]">
              <h1 className="text-[22px] font-bold text-HavannaBlack-neutral20">{singleData?.name}</h1>
              <p className="text-16 text-HavannaBlack-neutral50 font-medium mt-2">Ogunlana Drive, Surulere, Lagos, Nigeria.</p>
              <div className="mt-8">
                {morePortfolioData.map((data, index) => (
                  <div className="flex justify-between py-4 text-HavannaBlack-neutral font-medium border-b-[0.6px] border-b-[#DFE1E2] " key={index}>
                    <p>{data.title}</p>
                    <p>{data.info}</p>
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
