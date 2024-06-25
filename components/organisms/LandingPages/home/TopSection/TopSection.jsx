import { useRouter } from "next/router";
import Image from "next/image";
import * as Animate from "react-reveal";

import CustomButton from "@atoms/CustomButton/CustomButton";

import TopImage1 from "@images/homepage/portfolio.png";

const TopSection = () => {
  const router = useRouter();
  return (
    <section className="text-HavannaBlack-primary font-mulish pt-6 bg-white px-5 smallLaptop:pl-[120px] smallLaptop:pt-[133px] pb-[52px]">
      <div className="">
        <div className="smallLaptop:flex gap-5">
          <div className="smallLaptop:max:w-[40%] smallLaptop:mr-10 smallLaptop:flex smallLaptop:justify-center smallLaptop:items-center">
            <div>
              <Animate.Fade bottom>
                <h1 className="text-36 smallLaptop:text-[50px] bigLatop:text-[60px] smallLaptop:leading-[60px] bigLaptop:leading-[72px] font-extrabold text-HavannaGreen-primary leading-[44px] text-center smallLaptop:text-left">
                  Now, <span className="text-HavannaGreen-secondary">everyone</span> can <span className="text-HavannaGreen-secondary">invest</span> in real estate.
                </h1>
                <p className="pt-6 text-14 font-medium text-center smallLaptop:text-left leading-5 smallLaptop:text-16 smallLaptop:leading-6">
                  With as low as 20,000 naira, you can co-own income producing real estate assets and earn rental income.
                </p>
                <div className=" flex justify-center smallLaptop:justify-start mt-10">
                  <CustomButton
                    customClass="sm:w-[328px] h-[58px] rounded-[8px] font-bold text-white bg-HavannaGreen-primary"
                    // icon="arrowRight"
                    iconClass="ml-3 mt-1"
                    title="Start Investing"
                    onClick={() => router.push("/invest")}
                  />
                </div>
              </Animate.Fade>
            </div>
          </div>
          <div className="flex justify-center mt-11 smallLaptop:mt-0 cols-span-2">
            <Animate.Zoom>
              <div>
                <Image alt="Havanna Image 1" className="" height={600} src={TopImage1} width={990} />
              </div>
            </Animate.Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
