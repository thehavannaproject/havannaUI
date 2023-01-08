import Image from "next/image";
import React from "react";
import * as Animate from "react-reveal";

import InvestorImage from "@images/webp/investor.webp";

import SlantBox from "../../../blocks/slantBox";
import styles from "./empowerSection.module.css";


const EmpowerSection = () => {
  return (
    <section className={`relative w-full bg-white`}>
      <div className="container px-4 mx-auto pt-24 md:pt-32 lg:pt-40 pb-32 lg:pb-40 flex flex-row flex-wrap justify-center">
        <div className="w-full lg:w-5/12">
          <Animate.Fade bottom>
            <div className="relative">
              <div className="absolute w-full flex justify-center ml-0 md:ml-16 lg:ml-24 -top-1">
                <SlantBox />
              </div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold" style={{ color: "#077771" }}>
                  Empowering investors
                </h1>
              </div>
            </div>
            <p className="w-full mt-6 lg:mt-10 text-sm-15 lg:text-default leading-7">
              Havanna was built with the aim of empowering average investors and closing the wealth gap. For the everyday investor, we are dedicated to demystifying the
              wealth-building process. From first-time investors to asset managers, our platform allows anybody to confidently analyze, purchase, and own virtual investment
              properties from anywhere in the world.
              <br />
              <br />
              Our goal is to make investing in real estate significantly more accessible, cost-effective, and effortless. We simply make your dream and aspirations come true.
            </p>
          </Animate.Fade>
        </div>
        <div className="w-full lg:w-7/12 relative mt-10 md:mt-0">
          <div className="w-10/12 md:w-9/12 mx-auto relative">
            <div className="right-7 absolute top-20 z-10">
              <Animate.Fade bottom>
                <SlantBox />
              </Animate.Fade>
            </div>

            <Image alt="Invest" src={InvestorImage} />

            <div className="-mt-8 ml-4 lg:ml-8">
              <Animate.Fade top>
                <SlantBox />
              </Animate.Fade>
            </div>

            <Animate.Fade right>
              <div className={`absolute right-0 top-32 md:top-52 flex justify-start py-3 lg:py-4 pl-3 lg:pl-5 pr-4 lg:pr-6 rounded-lg space-x-2 ${styles.hint}`}>
                <svg fill="none" height="19" viewBox="0 0 18 19" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 16.8191C4.85775 16.8191 1.5 13.4613 1.5 9.31909C1.5 5.17684 4.85775 1.81909 9 1.81909C13.1423 1.81909 16.5 5.17684 16.5 9.31909C16.5 13.4613 13.1423 16.8191 9 16.8191ZM9 15.3191C10.5913 15.3191 12.1174 14.687 13.2426 13.5617C14.3679 12.4365 15 10.9104 15 9.31909C15 7.72779 14.3679 6.20167 13.2426 5.07645C12.1174 3.95123 10.5913 3.31909 9 3.31909C7.4087 3.31909 5.88258 3.95123 4.75736 5.07645C3.63214 6.20167 3 7.72779 3 9.31909C3 10.9104 3.63214 12.4365 4.75736 13.5617C5.88258 14.687 7.4087 15.3191 9 15.3191ZM8.25225 12.3191L5.07 9.13684L6.1305 8.07634L8.25225 10.1981L12.4943 5.95534L13.5555 7.01584L8.25225 12.3191Z"
                    fill="white"
                  />
                </svg>
                <p className="text-xs md:text-sm text-white">Investment successful</p>
              </div>
            </Animate.Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
