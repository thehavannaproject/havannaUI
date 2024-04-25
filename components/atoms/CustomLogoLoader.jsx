import React from "react";

const CustomLogoLoader = () => {
  return (
    <>
      <div className="loader">
        <svg fill="none" height="100" viewBox="0 0 39 30" width="70" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8841 0.95752H38.0831L26.199 29.309H0L11.8841 0.95752Z" fill="#0B4340" />
          <path
          clipRule="evenodd"
            d="M12.9303 29.3089H7.23828V12.0495L11.866 1.00923L12.06 0.95752H12.3184L12.9303 14.3546C14.6816 12.2973 17.1979 11.933 20.0802 12.1401C25.1685 12.5059 28.7364 16.1084 28.7364 21.361V23.212L26.1808 29.3089H23.0445V23.1994C23.0445 20.1792 21.1179 18.2094 18.1844 18.2094C15.0319 18.2094 12.9303 20.2229 12.9303 23.287V29.3089Z"
            fill="white"
            fillRule="evenodd"
            id="path"
          />
          <path
            d="M12.9336 23.1295C12.9336 20.3079 15.221 18.0205 18.0426 18.0205V18.0205C20.8642 18.0205 23.1515 20.3079 23.1515 23.1295V29.3093H12.9336V23.1295Z"
            fill="#F1BC00"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomLogoLoader;
