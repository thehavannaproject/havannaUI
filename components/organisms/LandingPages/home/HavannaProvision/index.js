import React from "react";
import SlantBox from "../../../../blocks/slantBox";
import * as Animate from "react-reveal";
import Image from "next/image";
import House from "../../../../../public/images/How it works.svg";
import vector from "../../../../../public/images/Vector (Stroke).svg";

const Card = ({ bgColor, title, description }) => {
  return (
    <div
      className={`${
        bgColor === "green" ? styles.cardGreen : styles.cardYellow
      } py-6 px-8 `}
    >
      <Animate.Fade bottom>
        <div className="text-dark font-bold text-sm-15 lg:text-base pt-3 lg:pt-7 flex items-center">
          <div className="ml-1">
            <SlantBox
              width="w-5"
              height="h-7"
              bgColor={bgColor === "green" ? "bg-secondary" : "bg-primary"}
            />
          </div>
          <p className="pl-4 text-sm lg:text-sm-15">{title}</p>
        </div>
        <p
          className={`text-default text-xs lg:text-sm mt-6 ${styles.cardDescription}`}
        >
          {description}
        </p>
      </Animate.Fade>
    </div>
  );
};

const index = () => {
  return (
    <section className="py-[150px] px-5 tablet:px-10 ">
      <div>
        <div className=" ">
          <Animate.Fade bottom>
            <div className=" ">
              <div className=" ">
                <Image width={858} height={500} src={House} alt="House" />
              </div>
              <div className="">
                <div>
                  <h1 className="font-mulish font-bold text-[36px] mb-10  mt-5  ">
                    Havanna provides the easiest way to build your real estate
                    porfolio.
                  </h1>
                  <button className="bg-HavannaGreen-primary font-mulish font-bold text-white flex gap-[14.4px] justify-center items-center rounded-lg bigLaptop:w-[354px] w-full tablet:w-[50%] h-[60px] ">
                    Explore now
                    <Image src={vector} alt="Vector" />
                  </button>
                </div>
              </div>
            </div>
          </Animate.Fade>
        </div>
      </div>
    </section>
  );
};

export default index;