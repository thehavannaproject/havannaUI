import React from "react";
import * as Animate from "react-reveal";
import Image from "next/image";
import dynamic from "next/dynamic";
import vector from "../../../../../public/images/Vector (Stroke).svg";
import stairs from "../../../../../public/images/Hero image (1).png";

// const TestimonySlider = dynamic(
//   () => import("../../../../carousel/testimonySlider"),
//   No need for SSR, when the module includes a library that only works in the
//   browser.
//   { ssr: false }
// );

const TopSection = () => {
  return (
    <section
      className={`font-mulish px-4 pt-10 bg-HavannaGreen-light smallLaptop:px-[100px] `}
    >
      <div className="">
        <div className="tablet:flex justify-between" >
          <div className="flex justify-center items-center" >
            <Animate.Fade bottom>
              <div className="mr-10">
                <h1 className="text-[32px] tablet:text-[40px] smallLaptop:text-[60px] leading-10 font-extrabold font-mulish smallLaptop:leading-[72px] text-primary">
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
                <div className=" pt-14  lg:pt-16">
                  <button className="bg-HavannaGreen-primary font-mulish font-bold flex gap-[14.4px] justify-center items-center text-white w-1/2 h-[60px] rounded-lg ">
                    Explore now
                    <Image src={vector} alt="vector" />
                  </button>
                </div>
              </div>
            </Animate.Fade>
          </div>
          <div className=" mt-14 pb-14 smallLaptop:py-[130px] smallLaptop:ml-10">
            <Animate.Zoom>
              <Image src={stairs} alt="invest"/>
            </Animate.Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
