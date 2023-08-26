import React, { useState } from "react";
// import ReactPaginate from "react-paginate";
// import { useRouter } from "next/router";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import CustomTable from "@components/atoms/CustomTable/CustomTable";
import CustomPagination from "@components/atoms/CustomPagination/CustomPagination";

// const PAGE_SIZE = 5;

const PropertiesDashBoard = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [showDropdown, setShowDropdown] = useState(false); 
  // add state for dropdown display
  // const router = useRouter();

  // const handlePageChange = (page) => {
  //   router.push({
  //     pathname: "/portfolio",
  //     query: { page },
  //   });
  // };

  // const filteredProperties = properties.slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE);
  // const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // const handlePageClick = (data) => {
  //   setCurrentPage(data.selected);
  //   setSearchQuery("");
  // };

  // const filteredProperties = Properties.filter((property) =>
  //   property.Name.toLowerCase().includes(searchQuery.toLowerCase())
  // ).slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE);

  return (
    <div>
      <section className="font-mulish pl-8 pr-[46px] pb-[91px] ">
        <div>
          <h1 className="text-24 leading-8 font-bold text-HavannaGreen-primary pt-8">My Properties</h1>
          <div className="pt-8 bigLaptop:flex justify-between  ">
            <div className=" flex justify-between gap-40 smallLaptop:gap-[400px]">
              <div className="">
                <input
                  className="w-[380px] h-[52px] rounded-[4x] border-2 pl-4 absolute border-[#8F8F8F]"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="All Properties"
                  type="text"
                  value={searchQuery}
                />

                <Icon
                  className="ml-[340px] absolute mt-6"
                  name="angleDown"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && (
                  <div className="absolute z-10 bg-white w-[380px] top-[58px] rounded-lg border-2 border-[#8F8F8F]">
                    {properties.map((property, index) => (
                      <div
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        key={index}
                        onClick={() => {
                          setShowDropdown(false);
                        }}
                      >
                        {property.Name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <input
                  className="w-[380px] h-[52px] rounded-[4x] border-2 pl-12 border-[#8F8F8F]"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  type="text"
                  value={searchQuery}
                />
                <Icon className="w-[18px] h-[18px] pl-[15px] absolute top-4 " name="search" />
              </div>
            </div>
            <div>
              <button className="bg-HavannaGreen-primary w-[200px] h-[52px] rounded-lg text-white smallLaptop:mt-2 tablet:mt- mb-10 bigLaptop:  ">
                Search
              </button>
            </div>
          </div>
          <div className="border shadow-md pb-2 pt-10 rounded-xl text-HavannaBlack-primary bg-white  border-[#8F8F8F]">
            <h1 className="text-16 mb-8 px-4 font-bold">All Properties</h1>
            <CustomTable columns={columns} data={properties} />
          </div>
          <div className="justify-end mt-8 m-auto items-center flex">
            <CustomPagination initialPage={0} pageCount={4} />
          <div className="border-[1.5px] rounded-xl bg-white px-2 border-[#8F8F8F]">
            <h1 className="px-5 pt-10 pb-9">All Properties</h1>
            <table className="w-full cursor-pointer shadow-xl">
              <thead className="">
                <tr className="font-bold h-16 bg-[#E0F8F6] text-left text-16 leading-6">
                  <th className="pl-4">Name</th>
                  <th>Asset Type</th>
                  <th>Slot</th>
                  <th>ROI</th>
                  <th>Duration</th>
                  <th>
                    <Icon name="eyeIcon" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {properties.map((data, index) => (
                  <tr className="h-16 py-4 border-[#8F8F8F] font-medium text-16 leading-6" key={index}>
                    <td className="border-b-[1.3px] border-[#D6D6D6] pl-4 ">{data.Name}</td>
                    <td className="border-b-[1.3px] border-[#D6D6D6]">{data.AssetType}</td>
                    <td className="border-b-[1.3px] border-[#D6D6D6]">{data.Slot}</td>
                    <td className="border-b-[1.3px] border-[#D6D6D6]">{data.Roi}</td>
                    <td className="border-b-[1.3px] border-[#D6D6D6]">{data.Duration}</td>
                    <td className="border-b-[1.3px] border-[#D6D6D6]">
                      <Icon name={data.icon} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <CustomLink destination="/listing/listing">
            <button className="w-[300px] h-[54px] font-bold text-16 leading-[22px]  rounded-lg text-white bg-HavannaGreen-primary ">
              Explore more properties
            </button>
          </CustomLink>
        </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesDashBoard;

const properties = [
  {
    Name: "Primero",
    AssetType: "Lease",
    Cost: "N3,000,000",
    SlotPrice: "N30,000",
    Slot: "1",
    Roi: "5%",
    Duration: "15 Years",
    icon: "eyeIcon",
  },
  {
    Name: "Edala Homes",
    AssetType: "Lease",
    Cost: "N8,000,000",
    SlotPrice: "N80,000",
    Slot: "2",
    Roi: "5%",
    Duration: "17 Years",
    icon: "eyeIcon",
  },
  {
    Name: "CrestVille",
    AssetType: "Lease",
    Cost: "N8,000,000",
    SlotPrice: "N80,000",
    Slot: "2",
    Roi: "5%",
    Duration: "15 Years",
    icon: "eyeIcon",
  },
  {
    Name: "Primero",
    AssetType: "Lease",
    Cost: "N3,000,000",
    SlotPrice: "N30,000",
    Slot: "1",
    Roi: "5%",
    Duration: "15 Years",
    icon: "eyeIcon",
  },
  {
    Name: "Edala Homes",
    AssetType: "Lease",
    Cost: "N8,000,000",
    SlotPrice: "N80,000",
    Slot: "2",
    Roi: "5%",
    Duration: "17 Years",
    icon: "eyeIcon",
  },
  {
    Name: "CrestVille",
    AssetType: "Lease",
    Cost: "N8,000,000",
    SlotPrice: "N80,000",
    Slot: "2",
    Roi: "5%",
    Duration: "15 Years",
    icon: "eyeIcon",
  },
  {
    Name: "Primero",
    AssetType: "Lease",
    Cost: "N3,000,000",
    SlotPrice: "N30,000",
    Slot: "1",
    Roi: "5%",
    Duration: "15 Years",
    icon: "eyeIcon",
  },
];

const columns = [
  {
    Header: " ",
    columns: [
      {
        Header: "Name",
        accessor: "Name",
      },
      {
        Header: "Asset Type",
        accessor: "AssetType",
      },
      {
        Header: "Slots",
        accessor: "Slot",
      },

      {
        Header: "ROI",
        accessor: "Roi",
      },
      {
        Header: "Duration",
        accessor: "Duration",
      },

      {
        accessor: "action",
        Cell: () => (
          <div className="flex gap-2">
            <Icon name="eyeSlash" />
          </div>
        ),
      },
    ],
  },
];
