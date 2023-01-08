import Image from "next/image";
import * as Animate from "react-reveal";

import CustomButton from "@atoms/CustomButton/CustomButton";

import TopImage1 from "@images/homepage/HeroImage.png";


const TopSection = () => {
  return (
    <section className="font-mulish pt-6 bg-HavannaGreen-100 px-5 tablet:px-[120px] tablet:pt-[133px] pb-[52px]">
      <div className="">
        <div className="tablet:flex tablet:justify-between ">
          <div className="">
            <Animate.Fade bottom>
              <h1 className="text-36 tablet:text-[46px] smallLaptop:text-[60px] tablet:leading-[72px] font-bold text-HavannaGreen-primary leading-[44px] text-center tablet:text-left">Now, <span className="text-HavannaGreen-secondary">Everyone</span> can <span className="text-HavannaGreen-secondary">Invest</span> in Real Estate.</h1>
              <p className="pt-6 text-14 font-medium text-center tablet:text-left leading-5 tablet:text-16 tablet:leading-6">With as low as 20,000 naira, you can co-own income producing real estate assets and earn rental income.</p>
              <div className="flex justify-center tablet:justify-start mt-10">
                <CustomButton customClass="w-[328px] h-[48px] rounded-[8px] text-white bg-HavannaGreen-primary" icon="arrowRight"  iconClass="ml-3 mt-1" title="Explore now" />
              </div>
            </Animate.Fade>
          </div>
          <div className="flex justify-center mt-11 tablet:ml-[150px]">
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
