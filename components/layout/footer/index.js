import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import Logo from "../../../public/images/logo/logo-white.svg";
import Link from "next/link";

const Column = ({ title, links = [], isTargetLink = false }) => {
  return (
    <div className="">
      <h3 className="text-HavannaGreen-tertiaryMain font-mulish text-[22px] lg:text-base font-bold mb-6">
        {title}
      </h3>

      <ul className="space-y-6 font-medium text-[22px] lg:text-base">
        {links.map((link) => (
          <li key={link.id} className="text-white">
            <Link href={link.url}>
              <a
                target={isTargetLink ? "_blank" : ""}
                rel="noopener noreferrer"
              >
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
    <div className={`bg-primary px-5 text-center font-mulish ${styles.footer}`}>
      <div className=" ">
        <div className="pt-20  lg:pt-24 pb-20 lg:pb-36  ">
          <div className="w-full  lg:w-4/12">
            <div className="">
              <Image src={Logo} alt="Havanna" />
            </div>
            <div className="mt-2">
              <p className="text-white font-bold text-[22px] lg:text-lg pb-4">
                make money the <span className="text-secondary">easy</span> way
                with real estate.
              </p>

              <Link href="mailto:hello@havanna.com">
                <a className="text-light-green hover:transition-all hover:text-white text-[22px] font-medium  lg:text-base">
                  hello@havanna.com
                </a>
              </Link>
            </div>
          </div>

          <div className=" lg:w-5/12  lg:pt-4">
            <div
              className="flex flex-wrap-reverse justify-between
             items-start gap-5 mt-10  "
            >
              <Column title="Products" links={columnData1} />
              <Column title="Terms & Privacy " links={columnData2} />
              <Column title="Company" links={columnData3} />
              <Column title="Connect" links={columnData4} />
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
