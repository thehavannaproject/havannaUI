import React from "react";
import { ImSpinner3 } from "react-icons/im";


const Button = ({ title, onClick, customClass, isLoading }) => {
  return (
    <div>
      <button
        className={`${customClass} flex justify-center items-center`}
        onClick={onClick}
        type="submit"
      >
        {isLoading === true ? (
          <ImSpinner3 className="animate-spin  " />
        ) : (
          <>{title}</>
        )}
      </button>
    </div>
  );
};

export default Button;
