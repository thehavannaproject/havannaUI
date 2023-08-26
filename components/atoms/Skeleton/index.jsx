import React from "react";

const Skeleton = ({ className }) => {
  return (
    <>
      <p className={`w-full h-full bg-gray-100 animate-pulse ${className}`} />
    </>
  );
};

export default Skeleton;
