import Image from "next/image";
import React from "react";
import styles from "./opportunitySection.module.css";
import BuyImage from "../../../../../public/images/OpportunityImages/Image.svg";
import SellImage from "../../../../../public/images/OpportunityImages/unsplash_N2zk9yXjmLA.svg";
import Link from "next/link";
import * as Animate from "react-reveal";

const Card = ({ title, image, linkUrl, description }) => {
  return (
    <Link href={linkUrl || "/"}>
      <a>
        <div className={`bg-white  bigLaptop:w-[418px] bigLaptop:h-[598px] shadow-2xl rounded-xl `}>
          <div className={``}>
            <div className="px-8 pt-12 ">
              <Image
                width={354}
                height={240}
                src={image || BuyImage}
                placeholder="Opportunity Image"
                alt="oppotunity Image"
              />
              <p className="text-xl lg:text-2xl mt-[40px] font-bold font-mulish text-[22px] text-primary">
                {title}
              </p>
              <p className="pt-4 pb-[40px] font-mulish">{description}</p>
              <button className="bg-HavannaGreen-primary text-white w-full  mb-[80px] h-[58px] rounded-lg  ">
                Invest now
              </button>
            </div>
            <div className="" style={{ fontSize: 0 }}></div>
          </div>
        </div>
      </a>
    </Link>
  );
};

const OpportunitySection = () => {
  return (
    <section
      className={`pt-24 lg:pt-28 pb-28 lg:pb-32 px-5  bg-HavannaGreen-light `}
    >
      <Animate.Fade bottom>
        <div className="">
          <div className=" ">
            <div className="   ">
              <h2 className="text-4xl  font-mulish lg:text-3xl text-primary font-bold">
                Opportunities made for
                <span className="text-HavannaGreen-tertiaryMain"> you</span>.
              </h2>
              <p className="  font-mulish font-medium text-base ">
                Real Estate Asset Slots (REAS) are units of real estate assets
                such as income-producing residential or industrial properties,
                high-growth lands, and ongoing or proposed estate development
                projects.
              </p>
            </div>

            <div className="  mt-10">
              <div className="grid smallLaptop:grid tablet:grid-cols-2 smallLaptop:grid-cols-2 gap-20  ">
                <Card
                  image={BuyImage}
                  title="Land REAS"
                  description="Land REAS are backed by lands that appreciate in value."
                  linkUrl="/products/buy"
                />
                <Card
                  image={SellImage}
                  title="Property REAS"
                  description="Property REAS are backed by revenue generating real estate asset."
                  linkUrl="/products/sell"
                />
              </div>
            </div>
          </div>
        </div>
      </Animate.Fade>
    </section>
  );
};

export default OpportunitySection;
