import React from "react";
/**
 * Icon component to get and render app icons
 * @param {Object} props Component properties
 * @return {React.Component} Icon component
 */

const Icon = ({ name, className, onClick, fill, ...props }) => {
  if (name === "") {
    return null;
  }
  try {
    // eslint-disable-next-line no-undef
    const Image = require(`./stock/${name}`).default;
    if (Image) {
      return (
        <div className={className} onClick={onClick}>
          <Image aria-label={name} fill={fill} {...props} />
        </div>
      );
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default Icon;
