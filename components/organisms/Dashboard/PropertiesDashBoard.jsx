import React from "react";

import Icon from "@atoms/Icons";



// import CustomTable from "../../atoms/CustomTable/CustomTable";

const PropertiesDashBoard = () => {

  return (
    <div>
      <section className="bg-HavannaGreen-light font-mulish pl-8 pr-[46px] pb-[91px]">
        <div>
          <h1 className="text-24 leading-8 font-bold text-HavannaGreen-primary pt-8">My Properties</h1>
          <div className="pt-8 bigLaptop:flex justify-between  ">
            <div className=" flex justify-between gap-[400px]  ">
              <div className="relative">
                <input className="w-[380px] h-[52px] rounded-[4x] border-2 pl-4 absolute border-[#8F8F8F]   " placeholder="All Propeties" type="text" />
                <Icon className="ml-[340px] absolute mt-6  " name="angleDown" />

              </div>
              <div className="relative">
                <input className="w-[380px] h-[52px] rounded-[4x] border-2 pl-12 border-[#8F8F8F]   " placeholder="Search" type="text" />
                <Icon className="w-[18px] h-[18px] pl-[15px] absolute top-4 " name="search" />
              </div>
            </div>
            <div>
              <button className="bg-HavannaGreen-primary w-[200px] h-[52px] rounded-lg text-white smallLaptop:mt-3 mb-10  ">Search</button>
            </div>
          </div>
          <div className="border-[1.5px] rounded-xl border-[#8F8F8F]">
            <h1 className="px-5 py-9">All Properties</h1>
            <table className=" w-full px-5 cursor-pointer  ">
              <thead className="">
                <tr className="font-bold h-16 bg-[#B7E1D2] pr-5  text-left text-16 leading-6">
                  <th>Name</th>
                  <th>Asset Type</th>
                  <th>Cost</th>
                  <th>Slot Price</th>
                  <th>Slots</th>
                  <th>ROI</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>{Properties.map((data, index) =>
                <tr className="h-16 py-4 border-t-[1.5px] border-[#8F8F8F]  font-medium text-16 leading-6" key={index} >
                  <td className="pr-5" >{data.Name}</td>
                  <td>{data.AssetType}</td>
                  <td>{data.Cost}</td>
                  <td>{data.SlotPrice}</td>
                  <td>{data.Slot}</td>
                  <td>{data.Roi}</td>
                  <td>{data.Duration}</td>
                </tr>
              )}</tbody>
            </table>
          </div>
          <div className="flex justify-end pt-8  gap-4 cursor-pointer ">
            <Icon className=" w-[4.73px] h-[10.56px] text-center mt-2 " name="PaginationArrowLeft" />
            <p className="w-8 h-8 rounded-[32px]  text-center text-HavannaGreen-secondary border-2 border-current hover:bg-HavannaGreen-secondary hover:text-white   ">1</p>
            <p className="w-8 h-8 rounded-[32px] text-HavannaGreen-secondary border-2 border-current text-center hover:bg-HavannaGreen-secondary hover:text-white  ">2</p>
            <p className="w-8 h-8 rounded-[32px] text-HavannaGreen-secondary border-2 border-current text-center hover:bg-HavannaGreen-secondary hover:text-white   ">3</p>
            <p className="w-8 h-8 rounded-[32px] text-HavannaGreen-secondary border-2 border-current text-center hover:bg-HavannaGreen-secondary hover:text-white   ">...</p>
            <p className="w-8 h-8 rounded-[32px] text-HavannaGreen-secondary border-2 border-current text-center hover:bg-HavannaGreen-secondary hover:text-white   ">10</p>
            <p><Icon className=" w-[4.73px] h-[10.56px] text-center mt-2 " name="PaginationArrowRight" /></p>

          </div>
          <div className="mt-7 "><button className="w-[300px] rounded-lg h-[54px] bg-HavannaGreen-primary text-white ">Explore  more properties </button></div>
        </div>
      </section >
    </div >
  );
};
export default PropertiesDashBoard;

const Properties = [
  {
    Name: "Primero",
    AssetType: "Lease",
    Cost: "N3,000,000",
    SlotPrice: "N30,000",
    Slot: "1",
    Roi: "5%",
    Duration: "15 Years",
  },
  {
    Name: "Edala Homes",
    AssetType: "Lease",
    Cost: "N8,000,000",
    SlotPrice: "N80,000",
    Slot: "2",
    Roi: "5%",
    Duration: "17 Years",
  },
  {
    Name: "CrestVille",
    AssetType: "Lease",
    Cost: "N8,000,000",
    SlotPrice: "N80,000",
    Slot: "2",
    Roi: "5%",
    Duration: "15 Years",
  },
  {
    Name: "Primero",
    AssetType: "Lease",
    Cost: "N3,000,000",
    SlotPrice: "N30,000",
    Slot: "1",
    Roi: "5%",
    Duration: "15 Years",
  },
  {
    Name: "Edala Homes",
    AssetType: "Lease",
    Cost: "N8,000,000",
    SlotPrice: "N80,000",
    Slot: "2",
    Roi: "5%",
    Duration: "17 Years",
  },
  {
    Name: "CrestVille",
    AssetType: "Lease",
    Cost: "N8,000,000",
    SlotPrice: "N80,000",
    Slot: "2",
    Roi: "5%",
    Duration: "15 Years",
  },
  {
    Name: "Primero",
    AssetType: "Lease",
    Cost: "N3,000,000",
    SlotPrice: "N30,000",
    Slot: "1",
    Roi: "5%",
    Duration: "15 Years",
  },
];
