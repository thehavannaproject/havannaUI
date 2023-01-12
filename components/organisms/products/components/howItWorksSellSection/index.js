import React from "react";
import * as Animate from "react-reveal";

import Card from "../../../../blocks/card/Card";
import Button from "../../../../elements/button";
import styles from "./howItWorksSellSection.module.css";

const HowItWorksSellSection = () => {
  return (
    <section className="bg-white pt-24 lg:pt-28 pb-28 lg:pb-32 relative">
      <div className="container px-4 mx-auto">
        <Animate.Fade bottom>
          <div className="w-full lg:w-6/12">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary w-full lg:w-10/12 ${styles.title}`}>How it works</h2>
            <p className="text-default text-base lg:text-lg mt-6 lg:mt-10">Let&apos;s walk you through how you can trade your virtual slot for money.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pt-14 lg:pt-20">
            <Card
              // bgColor="green"
              description={`If you can’t wait for a holding period to be complete and 
                       you need to sell off your slots for quick cash, proceed to fill the form provided indicating your details.
                        `}
              // tag="01"
              title="Fill a form"
            />
            <Card
              // bgColor="yellow"
              description={`You can decide to sell parts or all of your slot for quick cash. It's convenient and easy.
                    `}
              // tag="02"
              title="Select preferred units of slot"
            />
            <Card
              // bgColor="green"
              description={`
                            Payment will be processed within the next 24 hours. This is all 
                            payment associated with the asset including accrued interest if applicable
                    `}
              // tag="03"
              title="Await Payment"
            />
          </div>

          <div className="pt-14 lg:pt-28 flex flex-col items-center">
            <Button href="/products" isLink={true} title="SELL NOW" />

            <p className="text-light-green text-xs mt-10">Terms and Conditions apply</p>
          </div>
        </Animate.Fade>
      </div>
    </section>
  );
};

export default HowItWorksSellSection;
