import Image from "next/image";
import * as Animate from "react-reveal";

import CustomButton from "@atoms/CustomButton/CustomButton";

import TopImage1 from "@images/homepage/HeroImage.png";

const TopSection = () => {
  return (
    <section className="text-HavannaBlack-primary font-mulish pt-6 bg-HavannaGreen-100 px-5 smallLaptop:px-[120px] tablet:pt-[133px] pb-[52px]">
      <div className="">
        <div className="tablet:grid tablet:grid-cols-2 ">
          <div className="smallLaptop:mr-10 tablet:flex tablet:justify-center tablet:items-center">
            <div>
              <Animate.Fade bottom>
                <h1 className="text-36 smallLaptop:text-[50px] bigLatop:text-[60px] smallLaptop:leading-[60px] bigLaptop:leading-[72px] font-extrabold text-HavannaGreen-primary leading-[44px] text-center tablet:text-left">
                  Now, <span className="text-HavannaGreen-secondary">everyone</span> can <span className="text-HavannaGreen-secondary">invest</span> in real estate.
                </h1>
                <p className="pt-6 text-14 font-medium text-center tablet:text-left leading-5 tablet:text-16 tablet:leading-6">
                  With as low as 20,000 naira, you can co-own income producing real estate assets and earn rental income.
                </p>
                <div className=" flex justify-center tablet:justify-start mt-10">
                  <CustomButton
                    customClass="w-[328px] h-[48px] rounded-[8px] font-bold text-white bg-HavannaGreen-primary"
                    icon="arrowRight"
                    iconClass="ml-3 mt-1"
                    title="Explore now"
                  />
                </div>
              </Animate.Fade>
            </div>
          </div>
          <div className="flex justify-center mt-11 tablet:mt-0 tablet:ml-12 smallLaptop:ml-10 bigLaptop:ml-[150px]">
            <Animate.Zoom>
              <div>
                <Image alt="Havanna Image 1" height={636} src={TopImage1} width={746} />
              </div>
            </Animate.Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
