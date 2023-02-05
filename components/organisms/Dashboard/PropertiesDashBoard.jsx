import React from "react";

// import CustomTable from "../../atoms/CustomTable/CustomTable";

const PropertiesDashBoard = () => {
  return (
    <div>
      <section className="bg-HavannaGreen-light font-mulish pl-8">
        <div>
          <h1 className="text-24 leading-8 font-bold text-HavannaGreen-primary pt-8">My Properties</h1>
          <div className="pt-8 bigLaptop:flex gap ">
            <div className=" flex gap-10">
              <input className="w-[380px] h-[52px] rounded-[4x] border-2 pl-4 " placeholder="All Propeties" type="text" />
              <input className="w-[380px] h-[52px] rounded-[4x] border-2 " placeholder="Search" type="text" />
            </div>
            <div>
              <button className="bg-HavannaGreen-primary w-[200px] h-[52px] rounded-lg text-white mt-3  ">Search</button>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesDashBoard;

// const Properties = [
//   {
//     Name: "Primero",
//     AssetType: "Lease",
//     Cost: "N3,000,000",
//     SlotPrice: "N30,000",
//     Slot: "1",
//     Roi: "5%",
//     Duration: "15 Years",
//   },
//   {
//     Name: "Primero",
//     AssetType: "Lease",
//     Cost: "N3,000,000",
//     SlotPrice: "N30,000",
//     Slot: "1",
//     Roi: "5%",
//     Duration: "15 Years",
//   },
//   {
//     Name: "Primero",
//     AssetType: "Lease",
//     Cost: "N3,000,000",
//     SlotPrice: "N30,000",
//     Slot: "1",
//     Roi: "5%",
//     Duration: "15 Years",
//   },
//   {
//     Name: "Primero",
//     AssetType: "Lease",
//     Cost: "N3,000,000",
//     SlotPrice: "N30,000",
//     Slot: "1",
//     Roi: "5%",
//     Duration: "15 Years",
//   },
// ];
