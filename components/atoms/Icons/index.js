import React from "react";
/**
 * Icon component to get and render app icons
 * @param {Object} props Component properties
 * @return {React.Component} Icon component
 */

const Icon = ({props}) => {
  if (props.name === "") {
    return null;
  }
  try {
    const Image = require(`./stock/${props.name}`).default;
    if (Image) {
      return <Image aria-label={props.name} className={`${props.className}`} {...props} />;
    }
    return null;
  } catch (error) {
    return null;
  }
};
Icon.defaultProps = {
  className: "",
  onClick: () => {
    return null;
  },
};
export default Icon;
