import React from "react";

import CustomLink from "../../atoms/CustomLink/CustomLink";
import SlantBox from "../../blocks/slantBox";
import styles from "./button.module.css";

const Arrow = () => {
  return (
    <svg fill="none" height="13" viewBox="0 0 22 13" width="22" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.0631 7.39458C21.3791 7.07856 21.3791 6.56621 21.0631 6.2502L15.9134 1.10051C15.5974 0.784499 15.0851 0.784499 14.7691 1.10051C14.4531 1.41652 14.4531 1.92887 14.7691 2.24489L19.3466 6.82239L14.7691 11.3999C14.4531 11.7159 14.4531 12.2283 14.7691 12.5443C15.0851 12.8603 15.5974 12.8603 15.9134 12.5443L21.0631 7.39458ZM0.518616 7.63158H20.4909V6.01319H0.518616V7.63158Z"
        fill="#F1BC00"
      />
    </svg>
  );
};

const Button = ({ title, onClick, href, isLink, ...props }) => {
  const buttonStyle = `text-primary font-semibold text-sm lg:text-base uppercase flex flex-row items-center relative pl-4`;
  return (
    <div className={`relative ${styles.button}`}>
      <div className="absolute -top-1">
        <SlantBox className={styles.slanty} height="h-8" />
      </div>
      {isLink ? (
        <CustomLink destination={href || "/"}>
          <a className={buttonStyle} {...props}>
            {title}{" "}
            <span className="pl-4">
              <Arrow />
            </span>
          </a>
        </CustomLink>
      ) : (
        <button className={buttonStyle} onClick={onClick} {...props}>
          {title}
          <span className="pl-4">
            <Arrow />
          </span>
        </button>
      )}
    </div>
  );
};

export default Button;
