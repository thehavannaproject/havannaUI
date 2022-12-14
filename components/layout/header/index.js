import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo/logo-dark.svg";
import LogoWhite from "../../../public/images/logo/logo-white.svg";
import { useRouter } from "next/router";

const NavItem = ({ title, url, className }) => {
  const router = useRouter();
  return (
    <div className={`tablet:block ${className}`}>
      <Link href={url || "/"}>
        <a
          className={`mx-10 whitespace-nowrap text-sm lg:text-base  focus:outline-none shadow-none  ${
            router.pathname?.includes(url) ? "active-link" : ""
          }`}
        >
          {title}
        </a>
      </Link>
    </div>
  );
};

const Header = ({ isDark = false }) => {
  return (
    <>
      <div className="container relative font-mulish lg:px-[90px]">
        <div className="bigLaptop:pt-14 pt-4 pl-3 pb-8 flex lg:justify-between">
          <Link href="/">
            <a>
              <span className="sr-only">Havanna</span>
              <Image
                className="h-7 md:w-auto tablet:h-8 lg:h-9"
                src={isDark ? LogoWhite : Logo}
                alt="Havanna"
              />
            </a>
          </Link>
          <nav
            className={`hidden md:flex mt-4 font-mulish text-16 font-bold  ${
              isDark ? "text-white" : "text-primary"
            }`}
          >
            <NavItem title="Invest" url="/invest" />
            <NavItem title="About Us" url="/about-us" />
            <NavItem title="Blog" url="/blog" />
          </nav>
          <nav
            className={`hidden md:flex font-mulish text-16 font-bold ${
              isDark ? "text-white" : "text-primary"
            }`}
          >
            <NavItem className="mt-4" title="Log in" url="/LogIn" />
            <NavItem
              title="Create an account"
              url="/Signup"
              className="bg-HavannaGreen-primary text-white py-[18px] px-6 rounded-lg "
            />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="block tablet:hidden  bigLaptop:hidden">
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn -mt-3">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <NavItem title="Buy" url="/products/buy" />
            </li>
            <li>
              <NavItem title="Sell" url="/products/sell" />
            </li>
            <li>
              <NavItem title="Company" url="/company" />
            </li>
            <li>
              <NavItem title="Investment Club" url="https://t.me/havannaclub" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
