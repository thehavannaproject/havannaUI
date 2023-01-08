import React, { useState } from "react";
import * as Animate from "react-reveal";

import PropertyCard from "../../../../blocks/propertyCard";
import SlantBox from "../../../../blocks/slantBox";
// import Button from "../../../../elements/button";
import PropertyModal from "../../../../modal/propertyModal";
import { propertiesData } from "./propertiesData";
import styles from "./propertiesSection.module.css";

const PropertiesSection = () => {
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
    <section className={`bg-white pt-24 lg:pt-32 pb-28 lg:pb-32 relative ${styles.bg}`} id="properties">
      <div className="container px-4 mx-auto">
        <Animate.Fade bottom>
          <div className="flex justify-center w-full">
            <div className="relative">
              <div className="absolute -top-1 -right-1">
                <SlantBox />
              </div>
              <div className="z-10 relative">
                <h2 className="text-2xl lg:text-3xl text-primary font-semibold">Opportunities made for you</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-24">
            {propertiesData.map((property) => (
              <PropertyCard handleShowModal={() => handleShowModal(property)} key={property.id} property={property} />
            ))}
          </div>

          {/* <div className="pt-14 lg:pt-28 flex flex-col items-center">
                        <Button title="VIEW MORE" isLink={true} href="/products" />
                    </div> */}
        </Animate.Fade>
      </div>

      {showModal && <PropertyModal handleClose={handleClose} selectedData={selectedData} show={showModal} />}
    </section>
  );
};

export default PropertiesSection;
