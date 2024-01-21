import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const EmptyState = ({ description, buttonText, route }) => {
  return (
    <div className="font-mulish bg-white flex justify-center items-center h-[400px]">
      <div>
        <p className="font-bold text-20 text-HavannaBlack-neutral20">{description}</p>
        <CustomLink customClass="text-white font-bold mt-6 text-16 text-center rounded-md py-4 px-8 bg-HavannaGreen-primary" destination={route}>
          {buttonText}
        </CustomLink>
      </div>
    </div>
  );
};

export default EmptyState;
