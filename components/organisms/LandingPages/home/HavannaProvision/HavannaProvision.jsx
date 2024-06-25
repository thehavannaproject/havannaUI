import React from "react";
import Image from "next/image";
import * as Animate from "react-reveal";

import House from "@images/homepage/Howitworks2.png";

const HavannaProvision = () => {
  return (
    <section className="pt-6 bg-white px-5 smallLaptop:px-[120px] smallLaptop:py-[150px] font-mulish">
      <div>
        <div className=" ">
          <Animate.Fade bottom>
            <div className="">
              
              <div className="smallLaptop:min:w-[866px]">
                  <h1 className="text-center font-bold text-[24px] text-[#0B4340] smallLaptop:text-[36px] leading-9 smallLaptop:leading-[44px]">
                    Havanna provides the easiest way to build your real estate <span className="text-[#F1BC00]">porfolio</span> .
                  </h1>
              </div>
              <div className=" mt-10 smallLaptop:mt-[60px]">
                <Image alt="House"  src={House}  />
              </div>
            </div>
          </Animate.Fade>
        </div>
      </div>
    </section>
  );
};

export default HavannaProvision;
