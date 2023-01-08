import Image from "next/image";
import React from "react";
import * as Animate from "react-reveal";

import AndroidIcon from "@images/svg/android.svg";
import AppleIcon from "@images/svg/apple.svg";
import MobileImage from "@images/webp/mobile.webp";

import SlantBox from "../../../../blocks/slantBox";
import styles from "./downloadSection.module.css";



const DownloadSection = () => {
  return (
    <section className={`bg-white pt-28 lg:pt-32 pb-28 lg:pb-32 relative ${styles.bg}`}>
      <div className="px-4 pr-4 md:pr-16 xl:pr-20 mx-auto flex flex-wrap flex-row items-center">
        <div className="w-full lg:w-5/12">
          <div className="w-10/12 relative">
            <Animate.Slide bottom>
              <div className="absolute flex justify-end top-16 lg:top-28 ml-6 lg:ml-8 w-full">
                <SlantBox height="h-52 xl:h-72" width="w-52 xl:w-72" />
              </div>
              <Image alt="Download App" src={MobileImage} />
            </Animate.Slide>
          </div>
        </div>

        <div className="w-full lg:w-6/12 pt-4 lg:pt-0">
          <div className="w-full lg:w-10/12 xl:w-8/12 mx-auto relative text-center lg:text-left">
            <Animate.Fade bottom>
              <h2 className="font-bold text-primary text-2xl md:text-4xl xl:text-5xl">Your gateway to financial freedom.</h2>
              <p className="text-primary text-base md:text-xl lg:text-2xl pt-3 lg:pt-6">havanna Mobile Application</p>

              <div className="flex items-center justify-center lg:justify-start space-x-1 lg:space-x-3 mt-4 lg:mt-8">
                <p className="text-default text-sm lg:text-sm-15">Available soon on</p>
                <div className="">
                  <Image alt="Download from playstore" src={AndroidIcon} />
                </div>
                <div className="">
                  <Image alt="Download from apple store" src={AppleIcon} />
                </div>
              </div>
            </Animate.Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
