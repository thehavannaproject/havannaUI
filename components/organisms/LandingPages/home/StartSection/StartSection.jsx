import Image from "next/image";
import React from "react";
import * as Animate from "react-reveal";

import CustomButton from "@atoms/CustomButton/CustomButton"

import image from "@images/homepage/Image.png"


const StartSection = () => {
  return (
    <section className="py-[58px] tablet:py-[112px] tablet:px-[120px] font-mulish px-5">
      <div className="tablet:flex tablet:flex-row-reverse">
        <div className="tablet:ml-[92px] tablet:w-1/2 tablet:flex tablet:items-center tablet:justify-center">
          <div>
            <Animate.Fade bottom>
                <h1 className="text-center tablet:text-left tablet:text-36 font-bold text-HavannaGreen-primary text-24 leading-8">Start your way into Real Estate through <span className="text-HavannaGreen-tertiaryMain">REAS</span> </h1>
              <p className="mt-4 text-14 font-medium leading-5 text-center tablet:text-left">
                REAS is a very good way to start your journey into real estate investements. If you have always wanted to become a real estate Investor but you dont know how and where to start, consider starting with REAS.
              </p>
              <div className="flex justify-center mt-10 tablet:justify-start">
                  <CustomButton customClass="w-[328px] h-[48px] rounded-[8px] text-white bg-HavannaGreen-primary" icon="arrowRight"  iconClass="ml-3 mt-1" title="Explore now" />
              </div>
            </Animate.Fade>
          </div>
        </div>
        <div className="mt-11 tablet:mr-[257px] flex justify-center tablet:justify-start">
          <Animate.Fade top>
            <Image src={image}   />
          </Animate.Fade>
        </div>

        
      </div>
    </section>
  );
};

export default StartSection;
