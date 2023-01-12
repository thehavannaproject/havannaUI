import Image from "next/image";
import * as Animate from "react-reveal";

import futureImage from "@images/homepage/future.png";

const FutureSection = () => {
  return (
    <section className="font-mulish px-5 py-[60px]">
      <div className="">
        <div className="">
          <Animate.Fade bottom>
            <h2 className="text-center text-24 font-bold text-HavannaGreen-primary leading-8">
              Build the future <span className="text-HavannaGreen-tertiaryMain">you</span> want.
            </h2>

            <p className="mt-4 leading-5 font-medium text-center text-14">
              Real estate is a highly sought-after asset class among professional investors. We&apos;ve simply placed it within everyone’s grasp. Be a real estate pro without
              needing to be a millionaire.
            </p>
          </Animate.Fade>
        </div>

        <div className="flex justify-center mt-11">
          <Animate.Slide bottom>
            <Image src={futureImage} />
          </Animate.Slide>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
