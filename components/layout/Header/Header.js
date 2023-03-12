import Image from "next/image";
import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import NavItem from "@components/molecules/NavItem";

import Logo from "@images/logo/logo-dark.svg";
import LogoWhite from "@images/logo/logo-white.svg";

import MobileHeader from "./MobileHeader";

const Header = ({ isDark = false }) => {
  return (
    <>
      <div className="hidden bg-HavannaGreen-light tablet:sticky tablet:w-full tablet:top-0 tablet:z-50 tablet:block relative font-mulish px-4 py-3 tablet:px-10 tablet:py-5 smallLaptop:px-[120px] smallLaptop:py-8">
        <div className=" tablet:flex tablet:justify-between">
          <CustomLink destination="/">
            <span className="sr-only">Havanna</span>
            <Image alt="Havanna" src={isDark ? LogoWhite : Logo} />
          </CustomLink>
          <div className=" tablet:block mt-3">
            <div className={`tablet:flex tablet:gap-8  smallLaptop:gap-16  font-mulish text-16 font-bold  ${isDark ? "text-white" : "text-primary"}`}>
              <NavItem className="hover:text-HavannaGreen-tertiaryMain" title="Invest" url="/invest" />
              <NavItem className="hover:text-HavannaGreen-tertiaryMain" title="About Us" url="/about-us" />
              <NavItem className="hover:text-HavannaGreen-tertiaryMain" title="Blog" url="/blog" />
            </div>
          </div>
          <div className={`hidden md:flex font-mulish text-16 font-bold ${isDark ? "text-white" : "text-primary"}`}>
            <NavItem className=" smallLaptop:mr-6 tablet:mr-4 !flex !justify-center !items-center" title="Log in" url="/auth/login" />
            <NavItem className="bg-HavannaGreen-primary text-white px-6 rounded-lg !flex !justify-center !items-center" title="Create an account" url="/auth/sign-up" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="block tablet:hidden  bigLaptop:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
