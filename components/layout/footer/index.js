import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@images/logo/logo-white.svg";

import styles from "./footer.module.css";

const Column = (title, links = [], isTargetLink = false) => {
  return (
    <div className="ml-10 smallLaptop:ml-0">
      <h3 className="text-HavannaGreen-tertiaryMain mt-6 smallLaptop:mt-0 font-mulish text-[22px] lg:text-base font-bold mb-6">{title}</h3>

      <ul className="space-y-6 font-medium text-[22px] lg:text-base">
        {links.map((link) => (
          <li className="text-white" key={link.id}>
            <Link href={link.url}>
              <a rel="noopener noreferrer" target={isTargetLink ? "_blank" : ""}>
                {link.linkName}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const columnData1 = [
    {
      id: "i2",
      url: "/products/buy",
      linkName: "Invest",
    },
    {
      id: "i3",
      url: "/products/sell",
      linkName: "Sell",
    },
  ];
  const columnData2 = [
    {
      id: "t2",
      url: "/terms/privacy",
      linkName: "Privacy policy",
    },
    {
      id: "t3",
      url: "/terms/privacy",
      linkName: "Term of use",
    },
    {
      id: "t3",
      url: "/terms/privacy",
      linkName: "Disclaimer",
    },
  ];

  const columnData3 = [
    {
      id: "j2",
      url: "/company",
      linkName: "About",
    },
    {
      id: "j2",
      url: "/company",
      linkName: "Blog",
    },
    {
      id: "j3",
      url: "/career",
      linkName: "Career",
    },
  ];

  const columnData4 = [
    {
      id: "k2",
      url: "https://instagram.com",
      linkName: "Instagram",
    },
    {
      id: "k3",
      url: "https://linkedin.com",
      linkName: "LinkedIN",
    },
    {
      id: "k3",
      url: "https://facebook.com",
      linkName: "Facebook",
    },
    {
      id: "k3",
      url: "https://twitter.com",
      linkName: "Twitter",
    },
  ];
  return (
    <div className={`bg-primary px-5 smallLaptop:px-[120px] font-mulish ${styles.footer}`}>
      <div className=" ">
        <div className="smallLaptop:flex pt-20  lg:pt-24 pb-20 lg:pb-36  ">
          <div className="w-full  smallLaptop:w-[25%]">
            <div>
              <Image alt="Havanna" src={Logo} />
            </div>
            <div className="mt-2">
              <p className="text-white font-bold text-[22px] lg:text-lg pb-4">
                make money the <span className="text-secondary">easy</span> way with real estate.
              </p>

              <Link href="mailto:hello@havanna.com">
                <a className="text-light-green hover:transition-all hover:text-white text-[22px] font-medium  lg:text-base">hello@havanna.com</a>
              </Link>
            </div>
          </div>

          <div className="smallLaptop:w-[70%] smallLaptop:ml-24">
            <div className="flex justify-evenly flex-wrap">
              <Column links={columnData1} title="Products" />
              <Column links={columnData2} title="Terms & Privacy " />
              <Column links={columnData3} title="Company" />
              <Column links={columnData4} title="Connect" />
            </div>
          </div>
        </div>

        <div className="text-light-green pb-28 lg:pb-32 text-center w-full text-sm lg:text-sm-15 flex flex-col lg:flex-row justify-center">
          <p>© {new Date().getFullYear()} havanna. All rights reserved.</p>
          <p className="px-5 hidden lg:block">|</p>
          <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
