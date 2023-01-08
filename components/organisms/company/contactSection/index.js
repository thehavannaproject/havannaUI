import Image from "next/image";
import React from "react";
import * as Animate from "react-reveal";

import CustomLink from "@atoms/CustomLink/CustomLink";

import ArrowIcon from "@images/svg/arrow.svg";
import WhatsAppIcon from "@images/svg/whatsapp.svg";

import SlantBox from "../../../blocks/slantBox";
import styles from "./contactSection.module.css";

const Card = ({ title, text, showLink = false}) => {
  return (
    <div className="bg-white">
      <div className="py-10 px-8 relative">
        <p className="text-primary font-semibold text-sm-15 lg:text-base">{title}</p>
        <p className="font-light pt-2 text-sm-15 lg:text-base">{text}</p>

        {showLink && (
          <div className="absolute right-8 top-14">
            <div className="flex flex-col">
              <CustomLink destination="https://web.wahtsapp.com">
                <a>
                  <Image alt="Whatsapp" src={WhatsAppIcon} />
                </a>
              </CustomLink>

              <div className="-ml-3 mt-1">
                <Image alt="Whatsapp" src={ArrowIcon} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`${styles.cardFooter} flex justify-between px-8 py-2 text-xs font-light lg:text-sm`}>
        <p>Get response within 24 hours</p>
        {showLink && <p className={styles.tapText}>Tap icon</p>}
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className={`pt-24 lg:pt-32 pb-40 relative ${styles.bg}`}>
      <div className="container px-4 mx-auto">
        <Animate.Fade bottom>
          <div className="flex justify-center w-full">
            <div className="relative">
              <div className="absolute -top-1 -right-1">
                <SlantBox />
              </div>
              <div className="z-10 relative">
                <h2 className="text-2xl lg:text-3xl text-primary font-semibold">Got questions/Enquiries?</h2>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 lg:mt-6">We will love to attend to all your questions and enquiries</p>

          <div className="w-full lg:w-11/12 mx-auto mt-14 lg:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
              <Card footer="Get response with 24 hours" text="hello@havannah.com" title="Send us an email" />
              <Card footer="Get response immediately" text="+234 816 084 5819" title="Place a call" />
              <Card footer="Get response immediately" showLink={true} text="+234 816 084 5819" title="Reach out via WhatsApp" />
            </div>
          </div>
        </Animate.Fade>
      </div>
    </section>
  );
};

export default ContactSection;
