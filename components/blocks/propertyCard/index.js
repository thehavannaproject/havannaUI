import Image from "next/image";
import React from "react";

import PropertyImage1 from "../../../public/images/webp/properties/land1.webp";
import Button from "../../elements/button";
import styles from "./propertyCard.module.css";

const Row = ({ name, value }) => {
  return (
    <div className="flex flex-row justify-between text-xs lg:text-sm">
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
};

const PropertyCard = ({ property, handleShowModal }) => {
  return (
    <div className="cursor-pointer" onClick={handleShowModal}>
      <div className="">
        <Image alt="Property" src={property.image || PropertyImage1} />
      </div>

      <div className={`-mt-2 py-6 px-6 ${styles.cardTitle}`}>
        <p className="text-primary text-sm lg:text-sm-15">
          {property.name} <span className="px-1">.</span> {property.type}
        </p>
        <p className="mt-1 text-primary font-semibold text-base lg:text-lg">{property.price}</p>
      </div>
      <div className="py-6 px-6 bg-white space-y-4 text-default">
        <Row name="Price Per Slot" value={property.pricePerSlot} />
        <Row name="Minimum ROI" value={property.minimumROI} />
        <Row name="Duration" value={property.duration} />

        <div className="pt-6 pb-4">
          <Button href={property.linkUrl} isLink={true} title="INVEST" />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
