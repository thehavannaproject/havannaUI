import React from "react";

const Index = ({ price, title, description, images }) => {
  return (
    <div className="bg-HavannaGreen-secondary w-[420px] h-[218px] rounded-xl shadow-md pl-5 pt-[54px] mb-4 ">
      <p className="font-bold text-24 leading-8 mb-5">{price}</p>
      <p className="font-bold text-20 leading-[26px] mb-2  ">{title}</p>
      <p className="font-normal text-16 leading-6 ">
        {description}
        <span>{images}</span>
      </p>
    </div>
  );
};

export default Index;
