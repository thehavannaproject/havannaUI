import Image from "next/image";

import CustomButton from "@atoms/CustomButton/CustomButton";

const OpportunityCard = ({ image, title, description, customClass }) => {
  return (
    <div className={`font-mullish bg-white rounded-3xl w-[368px] px-6 py-8 ${customClass}`}>
      <div>
        <Image className="border" height={180} src={image} width={320} />
      </div>
      <div>
        <h1 className="font-bold mt-8">{title}</h1>
        <p className="mt-3 font-medium">{description}</p>
      </div>
      <div className="flex justify-center mt-10">
        <CustomButton customClass="w-[328px] h-[48px] rounded-[8px] text-white bg-HavannaGreen-primary" iconClass="ml-3 mt-1" title="Invest now" />
      </div>
    </div>
  );
};

export default OpportunityCard;
