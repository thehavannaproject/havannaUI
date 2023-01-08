import React from "react";

const ErrorMessage = ({ error }) => {
  return <p className="text-[#A0000B] w-[90%] font-normal text-12 mt-2">{error}</p>;
};

export default ErrorMessage;
