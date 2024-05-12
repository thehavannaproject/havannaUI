import React from "react";
import CustomLink from "./CustomLink/CustomLink";

const PopUpModalTemplate = ({title, description, linkTitle, destination}) => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-white z-50">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-24 tablet:text-[36px] text-HavannaBlack-neutral20 font-bold">{title}</h1>
        <p className="mt-6 tablet:text-[22px] text-HavannaBlack-neutral50 font-medium w-4/5 text-center">
          {description}
        </p>
        <CustomLink customClass="bg-HavannaGreen-primary mt-24 flex font-bold text-16 justify-center items-center px-8 text-white w-full tablet:w-[684px] h-[58px] rounded-lg " destination={destination || ""}>
        {linkTitle}
        </CustomLink>
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
