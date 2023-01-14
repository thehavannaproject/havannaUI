import Image from "next/image";
import * as Animate from "react-reveal";

import futureImage from "@images/homepage/future.png";

const FutureSection = () => {
  return (
    <section className="font-mulish smallLaptop:px-[120px] px-5 py-[60px]">
      <div className="tablet:flex tablet:flex-row-reverse">
        <div className="tablet:flex tablet:justify-center tablet:items-center tablet:ml-28">
          <div>
            <Animate.Fade bottom>
              <h2 className="text-center tablet:text-[36px] tablet:text-left text-24 font-bold text-HavannaGreen-primary leading-8">
                Build the future <span className="text-HavannaGreen-tertiaryMain">you</span> want.
              </h2>

              <p className="mt-4 leading-5 tablet:text-16 tablet:text-left font-medium text-center text-14">
                Real estate is a highly sought-after asset class among professional investors. We&apos;ve simply placed it within everyone’s grasp. Be a real estate pro without
                needing to be a millionaire.
              </p>
            </Animate.Fade>
          </div>
        </div>

        <div className="flex justify-center mt-11">
          <Animate.Slide bottom>
            <Image height={576} src={futureImage} width={715} />
          </Animate.Slide>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
