import React from "react";
import Image from "next/image";
import Logo from "@images/logo/logo-dark.svg";
import LogoWhite from "@images/logo/logo-white.svg";
import MobileHeader from "./MobileHeader";
import NavItem from "@components/molecules/NavItem";
import CustomLink from "@components/atoms/CustomLink/CustomLink";

const Header = ({ isDark = false }) => {
  return (
    <>
      <div className=" relative font-mulish px-4 py-3 tablet:px-10 tablet:py-5 smallLaptop:px-[120px] smallLaptop:py-8">
        <div className=" tablet:flex tablet:justify-between">
          <CustomLink destination="/">
            <span className="sr-only">Havanna</span>
            <Image src={isDark ? LogoWhite : Logo} alt="Havanna" />
          </CustomLink>
          <div className="hidden tablet:block mt-3">
            <div className={`tablet:flex tablet:gap-8 smallLaptop:gap-16  font-mulish text-16 font-bold  ${isDark ? "text-white" : "text-primary"}`}>
              <NavItem title="Invest" url="/invest" />
              <NavItem title="About Us" url="/about-us" />
              <NavItem title="Blog" url="/blog" />
            </div>
          </div>
          <div className={`hidden md:flex font-mulish text-16 font-bold ${isDark ? "text-white" : "text-primary"}`}>
            <NavItem className=" smallLaptop:mr-6 tablet:mr-4 !flex !justify-center !items-center" title="Log in" url="/login" />
            <NavItem title="Create an account" url="/sign-up" className="bg-HavannaGreen-primary text-white px-6 rounded-lg !flex !justify-center !items-center" />
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
