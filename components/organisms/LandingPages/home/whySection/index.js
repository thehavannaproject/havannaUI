import React from "react";
import * as Animate from "react-reveal";
import Image from "next/image";
import cardIcon from "../../../../../public/images/Card Icons/Card icon.svg";
import cardIcon1 from "../../../../../public/images/Card Icons/Card icon-1.svg";
import cardIcon2 from "../../../../../public/images/Card Icons/Card icon-2.svg";
import cardIcon3 from "../../../../../public/images/Card Icons/Card icon-3.svg";

const Card = ({ bgColor, title, description, image }) => {
  return (
    <div
      className={`py-6 px-8  smallLaptop:h-[492px] rounded-xl shadow-lg `}
    >
      <Animate.Fade bottom>
        <div className="text-dark font-bold text-sm-15 lg:text-base pt-3 lg:pt-7 items-center">
          <div className="mb-12">
            <Image height={84} width={84} src={image} alt="CardIcons" />
          </div>
          <p className=" text-sm lg:text-sm-15">{title}</p>
        </div>
        <p
          className={`text-default font-mulish font-medium text-xs lg:text-sm mt-6 leading-[1.6rem]}`}
        >
          {description}
        </p>
      </Animate.Fade>
    </div>
  );
};

const WhySection = () => {
  return (
    <section className="bg-HavannaGreen-light px-5 font-mulish pt-8 lg:pt-28 pb-28 lg:pb-32 relative">
      <div className="container smallLaptop:px-[120px] mx-auto">
        <div className="w-full lg:w-6/12">
          <Animate.Fade bottom>
            <h2
              className={`leading-10 text-[36px] md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary bigLaptop:w-[538px] `}
            >
              Why Real Estate Asset Slots
              <span className="text-HavannaGreen-tertiaryMain">(REAS)</span> ?
            </h2>
            <p className="text-16 font-medium  text-sm-15 md:text-base lg:text-lg mt-5 lg:mt-10">
              Real Estate Asset Slots (REAS) are units of real estate assets
              such as income-producing residential or industrial properties,
              high-growth lands, and ongoing or proposed estate development
              projects.
            </p>
          </Animate.Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[26px] pt-12 xl:pt-20   ">
          {whySection.map((data, index) => (
            <div key={index}>
              <Card
                bgColor="white"
                image={data.image}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

const whySection = [
  {
    title: "Co-Ownership",
    description:
      "Obtain fractional ownership when you purchase a slot in a real estate asset. That way, we are making you a co-owner or co-investor in the underlying real estate asset.",
    image: cardIcon,
  },
  {
    title: "Co-Ownership",
    description:
      "You don’t need a large capital to amass a fortune. Our minimal investment plans give you the flexibility to invest the right amount, at the right time, to meet your goals.",
    image: cardIcon1,
  },
  {
    title: "Co-Ownership",
    description:
      "Shield yourself from the stock market’s volatility and diversify your portfolio with real estate. We offer you the opportunity to diversify your investment to various asset classes.",
    image: cardIcon2,
  },
  {
    title: "Co-Ownership",
    description:
      "Avoid the hassles that come with identifying and managing investments. You may relax knowing that your investment is being professionally managed. No real estate experience is necessary - we save your time and help you make the right decisions.",
    image: cardIcon3,
  },
];
