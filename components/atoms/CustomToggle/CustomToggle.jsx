import React from "react";

function RoundedToggle({ onToggle, showLabel, isOn, setIsOn }) {

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <div className="flex items-center">
      <button
        className={`relative inline-block w-[44.6px] tablet:w-[57.6px] h-6 tablet:h-8 border-2 rounded-full ${isOn ? "bg-HavannaGreen-primary" : "bg-gray-300"}`}
        onClick={handleToggle}
      >
        <span
          className={`absolute left-0 top-0 h-[19px] w-[19px] tablet:w-[26px] tablet:h-[26px] mt-[1px] rounded-full transition-transform ${
            isOn ? "bg-white translate-x-full" : "bg-white translate-x-0"
          }`}
        />
      </button>
      {showLabel && <span className="ml-3 text-HavannaGreen-primary">{isOn ? "ON" : "OFF"}</span>}
    </div>
  );
}

export default RoundedToggle;
