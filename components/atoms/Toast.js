import React from "react";
import { toast } from "react-toastify";

export const citiToast = (text, autoClose) => {
  toast(
    <div className="flex justify-center w-full smallLaptop:w-[500px]">
      <span>{text}</span>
    </div>,
    {
      position: "top-center",
      hideProgressBar: true,
      autoClose: autoClose || 5000,
    }
  );
};
