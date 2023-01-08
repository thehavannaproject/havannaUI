import Image from "next/image";
import React from "react";
import * as Animate from "react-reveal";

import TopImage from "@images/webp/company.webp";

import SlantBox from "../../../blocks/slantBox";
import Header from "../../../layout/header";
import styles from "./topSection.module.css";


const TopSection = () => {
  return (
    <section className={`relative w-full bg-primary ${styles.bg}`}>
      <Header isDark={true} />
      <div className="container px-4 mx-auto pt-24 pb-40 lg:pb-48">
        <div className="w-full lg:w-7/12 mx-auto mb-8 lg:mb-12">
          <Animate.Slide top>
            <Image alt="Company" src={TopImage} />
          </Animate.Slide>
        </div>
        <div className="text-center w-full lg:w-7/12 mx-auto">
          <Animate.Fade bottom>
            <div className="relative">
              <div className="absolute w-full flex justify-center lg:ml-8">
                <SlantBox />
              </div>
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">Build the future you want.</h1>
              </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl w-full lg:w-10/12 mx-auto mt-6 lg:mt-8 text-white">
              The future is now and it is virtual. Select the product you are interested in and take a sneak peek.
            </p>
          </Animate.Fade>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
