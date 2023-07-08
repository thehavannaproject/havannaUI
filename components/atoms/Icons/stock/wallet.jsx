/* eslint-disable max-len */
import React from "react";
/**
 *
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (fill, props) => (
  <svg fill="none" height="18" viewBox="0 0 22 18" width="22" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.5 0.75C1.84315 0.75 0.5 2.09315 0.5 3.75V4.5H21.5V3.75C21.5 2.09315 20.1569 0.75 18.5 0.75H3.5Z" fill="#6B7276" />
    <path
      clipRule="evenodd"
      d="M21.5 6.75H0.5V14.25C0.5 15.9069 1.84315 17.25 3.5 17.25H18.5C20.1569 17.25 21.5 15.9069 21.5 14.25V6.75ZM3.5 10.5C3.5 10.0858 3.83579 9.75 4.25 9.75H10.25C10.6642 9.75 11 10.0858 11 10.5C11 10.9142 10.6642 11.25 10.25 11.25H4.25C3.83579 11.25 3.5 10.9142 3.5 10.5ZM4.25 12.75C3.83579 12.75 3.5 13.0858 3.5 13.5C3.5 13.9142 3.83579 14.25 4.25 14.25H7.25C7.66421 14.25 8 13.9142 8 13.5C8 13.0858 7.66421 12.75 7.25 12.75H4.25Z"
      fill="#6B7276"
      fillRule="evenodd"
    />
  </svg>
);

export default SVG;
