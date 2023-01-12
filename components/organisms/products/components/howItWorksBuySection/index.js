import React from "react";
import * as Animate from "react-reveal";

import Card from "../../../../blocks/card/Card";
import styles from "./howItWorksBuySection.module.css";

const HowItWorksBuySection = () => {
  return (
    <section className="bg-white pt-24 lg:pt-28 pb-28 lg:pb-32 relative">
      <div className="container px-4 mx-auto">
        <Animate.Fade bottom>
          <div className="w-full lg:w-6/12">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary w-full lg:w-10/12 ${styles.title}`}>How it works</h2>
            <p className="text-default text-base lg:text-lg mt-6 lg:mt-10">Understand how REVS work. Find the right investment property for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pt-14 lg:pt-20">
            <Card
              // bgColor="green"
              description={`Browse through our various assets and determine which is best for you.
                        `}
              // tag="01"
              title="Browse Investment"
            />
            <Card
              // bgColor="yellow"
              description={`Select preferred units of slot you desire  in the asset. Kindly note that each asset is divided into 100 slots.
                    `}
              // tag="02"
              title="Select preferred units of slot"
            />
            <Card
              // bgColor="green"
              description={`Relax and watch your investment grow. Once the asset is 
                            fully funded, the asset is purchased and held in trust on behalf of the subscribers.
                    `}
              // tag="03"
              title="Sit back"
            />
            <Card
              // bgColor="yellow"
              description={`Depending on the type of asset, all payouts will be made when due into the provided account.
                    `}
              // tag="04"
              title="Payout"
            />
          </div>
        </Animate.Fade>
      </div>
    </section>
  );
};

export default HowItWorksBuySection;
