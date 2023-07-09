import React from "react";

import CashFlow1 from "./CashFlow1";
import CashFlow2 from "./CashFlow2";

const CashFlow = () => {
  return (
    <div className="bg-HavannaGreen-light px-4">
      <section className="">
        <div className=" flex justify-between gap-16 mt-[52px]">
          <div className="w-[120%]">
            <CashFlow1 />
          </div>
          <div className="w-[60%]">
            <CashFlow2 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CashFlow;
