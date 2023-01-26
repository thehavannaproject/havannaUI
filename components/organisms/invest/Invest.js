import { React, useState } from "react";
import * as Animate from "react-reveal";

import InvestPropertyCard from "@components/blocks/investPropertyCard/index";

import PropertyModal from "../../modal/propertyModal";
import { propertiesDatas } from "../invest/PropertiesDatas";
const index = () => {
  const [selectedData, setSelectedData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (data) => {
    setShowModal(!showModal);
    setSelectedData(data);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedData({});
  };
  return (
    <section className="bg-HavannaGreen-light pb-[120px] bigLaptop:px-[120px]">
      <div className="">
        <h1 className="font-mulish font-bold text-[44px] text-HavannaGreen-primary text-center bigLaptop:mt-[100px] pt-10 ">Invest in our listed properties.</h1>
      </div>
      <Animate.Fade>
        <div className="grid grid-cols-1 tablet:grid-cols-2 smallLaptop:grid-cols-3 gap-6 smallLaptop:gap-16 bigLaptop:gap-[84px] px-[22px] pt-11 bigLaptop:pt-[120px] ">
          {propertiesDatas.map((property, index) => (
            <InvestPropertyCard handleShowModal={() => handleShowModal(property)} key={index} property={property} />
          ))}
        </div>
      </Animate.Fade>

      {showModal && <PropertyModal handleClose={handleClose} selectedData={selectedData} show={showModal} />}
    </section>
  );
};

export default index;
