import Image from "next/image";
import React from "react";
import * as Animate from "react-reveal";

import TopImage1 from "@images/webp/sell-top.webp";

// import SlantBox from "../../../blocks/slantBox";
import Button from "../../../elements/button";
// import Header from "../../../layout/header";
import TabSection from "../components/TabSection";

const SellTopSection = () => {
  return (
    <section className={`relative w-full bg-gray`}>
      {/* <Header /> */}
      <TabSection />
      <div className="container mx-auto px-4 pt-6 lg:pt-10">
        <div className="flex flex-wrap flex-row">
          <div className="w-full lg:w-6/12 relative pt-6 lg:pt-16 pb-10 lg:pb-20">
            <Animate.Fade bottom>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary">Trade your virtual slot for money.</h1>
              <p className="text-default text-base lg:text-lg mt-4 md:mt-6 lg:mt-8 w-full lg:w-10/12 ">
                Can’t wait for the holding period? Explore the quickest and most convenient way to sell your slots for quick cash.
              </p>
              <div className="pt-14 lg:pt-16 flex">
                <Button isLink={false} title="SELL NOW" />
              </div>
            </Animate.Fade>
          </div>
          <div className="relative w-full lg:w-5/12 pl-0 lg:pl-6 self-end flex">
            <div className="relative">
              <Animate.Fade bottom>
                <div className="absolute w-52 lg:w-96 h-56 lg:h-96 left-12 lg:left-24 top-16">{/* <SlantBox className="slant-gradient" height="h-full" width="w-full" /> */}</div>
                <div className="w-full lg:w-11/12 mx-auto">
                  <Image alt="Havanna Image 1" src={TopImage1} />
                </div>
              </Animate.Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellTopSection;
