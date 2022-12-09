import React from "react";
import Header from "../../../../layout/header";
import styles from "./topSection.module.css";
import * as Animate from "react-reveal";
import Image from "next/image";
import dynamic from "next/dynamic";
import vector from "../../../../../public/images/Vector (Stroke).svg";
import stairs from "../../../../../public/images/Hero image (1).png";

const TestimonySlider = dynamic(
  () => import("./../../../../carousel/testimonySlider"),
  // No need for SSR, when the module includes a library that only works in the
  // browser.
  { ssr: false }
);

const TopSection = () => {
  return (
    <section
      className={`font-mulish relative  w-full pb-28 lg:pb-32 ${styles.bg} border`}
    >
      <Header />
      <div className="px-6 smallLaptop:px-[120px]">
        <div className=" tablet:flex justify-between">
          <div className="w-full  smallLaptop:pt-[100px]">
            <Animate.Fade bottom>
              <h1 className="text-[32px] leading-10 smallLaptop:text-[60px] font-extrabold font-mulish smallLaptop:leading-[72px] text-primary">
                Now,
                <span className="text-HavannaGreen-secondary"> everyone </span>
                can
                <span className="text-HavannaGreen-secondary"> Invest </span>in
                real estate.
              </h1>
              <p className="text-default text-base lg:text-lg mt-4 font-mulish lg:mt-6 pr-0 lg:pr-6">
                With as low as 20,000 naira, you can co-own income producing
                real estate assets and earn rental income.
              </p>
              <div className="pt-14  lg:pt-16">
                <button className="bg-HavannaGreen-primary font-mulish font-bold flex gap-[14.4px] justify-center items-center text-white w-[300px] h-[60px] rounded-lg ">
                  Explore now
                  <Image src={vector} alt="vector" />
                </button>
              </div>
            </Animate.Fade>
          </div>
          <div className="smallLaptop:pl-[120px]">
            <Animate.Zoom>
              <div className="mt-10">
                <div className="w-full h-4 mt-[77px]  ">
                  <Image
                    className="w-full"
                    src={stairs}
                    alt="Havanna Image 1"
                  />
                </div>
              </div>
            </Animate.Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
