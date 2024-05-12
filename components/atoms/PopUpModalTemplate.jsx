import React from "react";
import CustomLink from "./CustomLink/CustomLink";

const PopUpModalTemplate = ({title, description, linkTitle, destination}) => {
  return (
    <div className="flex justify-center items-center bg-white rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-20 tablet:text-[36px] text-HavannaBlack-neutral20 font-bold">{title}</h1>
        <p className="mt-3 tablet:text-[22px] text-HavannaBlack-neutral50 font-medium w-4/5 text-center">
          {description}
        </p>
        <div className="w-full">

        <CustomLink customClass="bg-HavannaGreen-primary mt-6 flex font-bold text-16 justify-center items-center px-8 text-white w-full tablet:w-[684px] h-[58px] rounded-lg " destination={destination || ""}>
        {linkTitle}
        </CustomLink>
        </div>
        {/* <CustomButton
          customClass="bg-HavannaGreen-primary mt-24 flex font-bold text-16 justify-center items-center text-white w-full tablet:w-[684px] h-[58px] rounded-lg "
          onClick={() => setShowSuccessModal(false)}
          title="Return to Dashboard"
        /> */}
      </div>
    </div>
  );
};

export default PopUpModalTemplate;
