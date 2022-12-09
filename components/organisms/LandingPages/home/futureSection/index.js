import Image from "next/image";
import React from "react";
import FutureImage from "../../../../../public/images/futureImages/Image (3).svg";
import * as Animate from "react-reveal";

const FutureSection = () => {
  return (
    <section className={`pt-24 lg:pt-28 pb-20 lg:pb-32 bg-White`}>
      <div className=" container px-5  ">
        <div className="  items-center bigLaptop:flex justify-between gap-20 lg:gap-10 lg:px-[60px] bigLaptop:px-[120px] pb-20">
          <div className="   ">
            <Animate.Slide bottom>
              <div className="mb-10 ">
                <Image
                  width={715}
                  height={576}
                  src={FutureImage}
                  alt="Future"
                />
              </div>
            </Animate.Slide>
          </div>

          <div className="w-full lg:w-5/12">
            <Animate.Fade bottom>
              <h2 className="font-bold text-HavannaGreen-primary font-mulish text-4xl md:text-3xl lg:text-4xl">
                Build the future
                <span className="text-HavannaGreen-tertiaryMain"> you </span>
                want.
              </h2>

              <p className="text-HavannaGreen-primary font-mulish font-medium  mt-4 lg:mt-10 text-base md:text-base lg:text-lg">
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
