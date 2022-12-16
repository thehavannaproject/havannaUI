import Image from "next/image";
import React from "react";
import FutureImage from "../../../../../public/images/futureImages/Image (3).svg";
import * as Animate from "react-reveal";

const FutureSection = () => {
  return (
    <section className={`pt-24 lg:pt-28 pb-14 smallLaptop:pb-32 bg-White`}>
      <div className=" px-5  ">
        <div className="  items-center smallLaptop:flex justify-between  lg:gap-10 lg:px-[60px] bigLaptop:px-[120px] pb-20">
          <div className="">
            <Animate.Slide bottom>
              <div className="mb-10 ">
                <Image
                  src={FutureImage}
                  alt="Future"
                />
              </div>
            </Animate.Slide>
          </div>

          <div className="w-full smallLaptop:ml-[115px]">
            <Animate.Fade bottom>
              <h2 className="font-bold text-HavannaGreen-primary font-mulish text-[32px] leading-10 tablet:text-3xl smallLaptop:text-4xl">
                Build the future
                <span className="text-HavannaGreen-tertiaryMain"> you </span>
                want.
              </h2>

              <p className="text-HavannaGreen-primary font-mulish font-medium  mt-4 smallLaptop:mt-10 text-base md:text-base smallLaptop:text-lg">
                Real estate is a highly sought-after asset class among
                professional investors. We&apos;ve simply placed it within
                everyone’s grasp. Be a real estate pro without needing to be a
                millionaire.
              </p>
            </Animate.Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
