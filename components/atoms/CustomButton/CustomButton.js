import React from "react";
import { ImSpinner3 } from "react-icons/im";

import Icon from "../Icons";

const CustomButton = ({ title, onClick, customClass, isLoading, icon, iconClass }) => {
  return (
    <div>
      <button className={`${customClass} h-[60px] flex font-bold justify-center items-center`} onClick={onClick} type="submit">
        {isLoading === true ? <ImSpinner3 className="animate-spin  " /> : <>{title}</>}
        <span className={iconClass}>
          <Icon name={icon} />
        </span>
      </button>
    </div>
  );
};

export default CustomButton;
