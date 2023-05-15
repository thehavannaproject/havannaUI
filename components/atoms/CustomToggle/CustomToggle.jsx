import React, { useState } from "react";

function RoundedToggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <button className={`relative inline-block w-[57.6px] h-8 border-2 rounded-full ${isOn ? "bg-HavannaGreen-primary" : "bg-gray-300"}`} onClick={handleToggle}>
        <span className={`absolute left-0 top-0 w-[26px] h-[26px] mt-[1px] rounded-full transition-transform ${isOn ? "bg-white translate-x-full" : "bg-white translate-x-0"}`} />
      </button>
      <span className="ml-3 text-HavannaGreen-primary">{isOn ? "ON" : "OFF"}</span>
    </div>
  );
}

export default RoundedToggle;
