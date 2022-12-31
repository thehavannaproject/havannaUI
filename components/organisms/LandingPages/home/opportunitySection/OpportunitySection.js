import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Animate from "react-reveal";

import BuyImage from "@images/OpportunityImages/Image.svg";
import SellImage from "@images/OpportunityImages/unsplash_N2zk9yXjmLA.svg";

// import styles from "./opportunitySection.module.css";

const Card = (title, image, linkUrl, description) => {
  return (
    <Link href={linkUrl || "/"}>
      <a>
        <div
          className={`bg-white w-full mt-6 smallLaptop:ml-6 rounded-xl px-8 py-[48px] smallLaptop:w-[318px] smallLaptop:h-[458px] bigLaptop:h-[598px] bigLaptop:w-[418px] shadow-xl  `}
        >
          <div>
            <div className="">
              <Image alt="oppotunity Image" placeholder="Opportunity Image" src={image || BuyImage} />
              <p className="mt-4 font-bold">{title}</p>
              <p className="mt-4 font-medium">{description}</p>
              <button className="bg-HavannaGreen-primary font-bold mt-4 text-white w-full  py-3 rounded-lg  ">Invest now</button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

const OpportunitySection = () => {
  return (
    <section className={`px-4 py-10 smallLaptop:px-14  bg-HavannaGreen-light `}>
      <Animate.Fade bottom>
        <div>
          <div className="smallLaptop:flex ">
            <div className="flex justify-center items-center">
              <div>
                <h2 className="text-[32px] leading-10 font-mulish smallLaptop:text-4xl text-primary font-bold">
                  Opportunities made for
                  <span className="text-HavannaGreen-tertiaryMain"> you</span>.
                </h2>
                <p className="font-mulish mt-4 font-medium text-base ">
                  Real Estate Asset Slots (REAS) are units of real estate assets such as income-producing residential or industrial properties, high-growth lands, and ongoing or
                  proposed estate development projects.
                </p>
              </div>
            </div>

            <div className="mt-10 smallLaptop:flex">
              <Card description="Land REAS are backed by lands that appreciate in value." image={BuyImage} linkUrl="/products/buy" title="Land REAS" />
              <Card description="Property REAS are backed by revenue generating real estate asset." image={SellImage} linkUrl="/products/sell" title="Property REAS" />
            </div>
          </div>
        </div>
      </Animate.Fade>
    </section>
  );
};

export default OpportunitySection;
