import { useState } from "react";
import ActiveListings from "./ActiveListings";
import AllListing from "./AllListing";
import RecentListings from "./RecentListings";
import SoldOutListings from "./SoldOutListings";

const MobileListing = () => {
  const [activeTab, setActiveTab] = useState(0);

  const listings = [
    {
      id: 0,
      title: "All Listings",
      component: <AllListing />,
    },
    {
      id: 1,
      title: "Recent",
      component: <RecentListings />,
    },
    {
      id: 2,
      title: "Active",
      component: <ActiveListings />,
    },
    {
      id: 3,
      title: "Sold Out",
      component: <SoldOutListings />,
    },
  ];

  return (
    <div className="font-mulish mt-6">
      <div>
        <div className="flex gap-3 whitespace-nowrap overflow-scroll hide-scrollbar">
          {listings.map((item, index) => (
            <p
              className={`px-[10px] text-12 font-bold  py-2 ${activeTab === item.id ? "bg-HavannaGreen-secondary text-white" : "text-[#8F8F8F] "}   rounded-[20px]`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
      {listings[activeTab].component}
    </div>
  );
};

export default MobileListing;
