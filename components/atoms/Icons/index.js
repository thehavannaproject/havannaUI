import React from "react";
/**
 * Icon component to get and render app icons
 * @param {Object} props Component properties
 * @return {React.Component} Icon component
 */

const Icon = ({name, className, onClick}) => {
  if (name === "") {
    return null;
  }
  try {
    const Image = require(`./stock/${name}`).default;
    if (Image) {
      return <Image aria-label={name} className={`${className}`} {...props} />;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default Icon;
