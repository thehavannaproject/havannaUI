import React from "react";

const CustomTable = (Name, AssetType, Cost, SlotPrice, Slot, Roi, Duration, TableName) => {
  return (
    <div>
      <div className="w-[95%] h-[612px] rounded-xl border-2 mt-10 ">
        <h1 className="mt-10 pl-4">{TableName}</h1>
        <div>
          <div className="flex justify-between px-4 border-2 font-medium text-16 leading-6">
            <p>{Name}</p>
            <p>{AssetType}</p>
            <p>{Cost}</p>
            <p>{SlotPrice}</p>
            <p>{Slot}</p>
            <p>{Roi}</p>
            <p>{Duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
