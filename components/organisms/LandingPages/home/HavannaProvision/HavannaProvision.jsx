import Image from "next/image";
import React from "react";
import * as Animate from "react-reveal";

import CustomButton from "@atoms/CustomButton/CustomButton";

import House from "@images/homepage/HowItWorks.png";

const HavannaProvision = () => {
  return (
    <section className="py-[58px] bg-white px-5 smallLaptop:px-[120px] smallLaptop:py-[150px] font-mulish">
      <div>
        <div className=" ">
          <Animate.Fade bottom>
            <div className="flex flex-col-reverse tablet:grid tablet:grid-cols-2">
              <div className="tablet:mr-10 mt-10 tablet:mt-0 smallLaptop:mr-[92px]">
                <Image alt="House" height={500} src={House} width={858} />
              </div>
              <div className=" tablet:flex tablet:items-center tablet:justify-center">
                <div>
                  <h1 className="text-center tablet:text-left text-24 smallLaptop:text-36 smallLaptop:leading-[46px] bigLaptop:leading-[56px] text-HavannaGreen-primary font-bold">
                    Havanna provides the easiest way to build your real estate porfolio.
                  </h1>
                  <div className="flex justify-center tablet:justify-start mt-10">
                    <CustomButton
                      customClass="w-[328px] font-bold h-[48px] rounded-[8px] text-white bg-HavannaGreen-primary"
                      icon="arrowRight"
                      iconClass="ml-3 mt-1"
                      title="Explore now"
                    />
                  </div>
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
