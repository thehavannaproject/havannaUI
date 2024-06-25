import Image from "next/image";
import * as Animate from "react-reveal";

import futureImage from "@images/homepage/mobiledash.png";

const FutureSection = () => {
  return (
    <section className="font-mulish text-HavannaBlack-primary smallLaptop:px-[120px] pt-6 bg-white px-5 ">
      <div className="">
        
        <div className="">
          <div>
            <Animate.Fade bottom>
              <h2 className="text-center smallLaptop:text-[36px]  text-24 font-bold text-HavannaGreen-primary leading-8">
                Build the future <span className="text-HavannaGreen-tertiaryMain">you</span> want.
              </h2>

              <p className="mt-4 text-14 leading-5 smallLaptop:leading-[26px]  smallLaptop:text-16  font-medium text-center ">
                Real estate is a highly sought-after asset class among professional investors. We&apos;ve simply placed it within everyone’s grasp. Be a real estate pro without
                needing to be a millionaire.
              </p>
            </Animate.Fade>
          </div>
        </div>
        <div className="mt-10 smallLatop:mt-[60px] flex justify-center items-center">
          <div className="">
            <Animate.Slide bottom>
              <Image src={futureImage} />
            </Animate.Slide>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FutureSection;
