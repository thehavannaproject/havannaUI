import Image from "next/image";
import React from "react";
import * as Animate from "react-reveal";

import House from "@images/How it works.svg";
import vector from "@images/Vector (Stroke).svg";

const HavannaProvision = () => {
  return (
    <section className="py-14 smallLaptop:py-[150px] px-4 smallLaptop:px-[120px] tablet:px-10 ">
      <div>
        <div className=" ">
          <Animate.Fade bottom>
            <div className=" flex flex-col-reverse smallLaptop:flex-row ">
              <div className=" mt-6 smallLaptop:mt-0">
                <Image alt="House" height={500} src={House} width={858} />
              </div>
              <div className="smallLaptop:ml-[92px]">
                <div>
                  <h1 className="font-mulish font-bold text-24 leading-[44px] smallLaptop:text-[36px] mb-10  mt-5 text-HavannaGreen-300 ">
                    Havanna provides the easiest way to build your real estate porfolio.
                  </h1>
                  <button className="my-14 bg-HavannaGreen-primary text-16 font-mulish font-bold text-white flex gap-[14.4px] justify-center items-center rounded-lg bigLaptop:w-[354px] w-1/2 tablet:w-[50%] h-[60px] ">
                    Explore now
                    <Image alt="Vector" src={vector} />
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

export default HavannaProvision;
