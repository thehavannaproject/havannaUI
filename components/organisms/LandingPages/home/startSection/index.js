import Image from "next/image";
import React from "react";
import * as Animate from "react-reveal";
import vector from "../../../../../public/images/Vector (Stroke).svg";
import StartImage from "../../../../../public/images/StartSectionImages/Image (2).png";

const StartSection = () => {
  return (
    <section className={`relative  w-full px-5 bg-white`}>
      <div className="container smallLaptop:flex mx-auto pt-10 lg:pt-20 pb-28 lg:pb-36 items-center">
        <div className="w-full lg:w-6/12 relative mt-10  md:mt-0 order-2 lg:order-1">
          <div className="w-10/12 md:w-9/12 lg:mx-auto relative">
            <div className=" ">
              <Animate.Fade bottom></Animate.Fade>
            </div>

            <div className="">
              <Image
               
                src={StartImage}
                alt="Start Investing"
              />
            </div>

            <div className="absolute bottom-32 -right-4">
              <Animate.Fade top></Animate.Fade>
            </div>

            <div className="absolute -mt-2 right-10">
              <Animate.Fade top></Animate.Fade>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-5/12  order-1 lg:order-2">
          <Animate.Fade bottom>
            <div className="">
              <h1 className="text-[32px] leading-10 mt-10 md:text-3xl lg:text-4xl font-medium text-primary">
                Start your way into Real Estate through
                <span className="text-HavannaGreen-tertiaryMain"> REAS</span>.
              </h1>
            </div>
            <p className=" font-mulish font-medium lg:w-full mt-6 lg:mt-10 text-16 lg:text-default mb-10 leading-7">
              REAS is a very good way to start your journey into Real Estate
              investements. If you have always wanted to become a Real Estate
              Investor but you dont know how and where to start, consider
              starting with REAS.
            </p>
            <button className="w-1/2 bg-HavannaGreen-primary font-mulish font-bold flex gap-[14.4px] justify-center items-center text-white tablet:w-[50%] bigLaptop:w-[354px] h-[60px] rounded-lg ">
              Explore now <Image src={vector} alt="vector" />
            </button>
          </Animate.Fade>
        </div>
      </div>
    </section>
  );
};

export default StartSection;
