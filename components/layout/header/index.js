import React from "react";
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/images/logo/logo-dark.svg";
import LogoWhite from "../../../public/images/logo/logo-white.svg";
import { useRouter } from "next/router";

const NavItem = ({ title, url }) => {
    const router = useRouter()
    return (
        <div className="md:block ">
            <Link
                href={url || "/"}
            >
                <a className={`lg:ml-10 whitespace-nowrap text-sm lg:text-base focus:outline-none shadow-none ${router.pathname?.includes(url) ? "active-link" : ""}`}>
                    {title}
                </a>
            </Link>
        </div>
    );
};

const Header = ({ isDark = false }) => {
    return (
        <>
            <div className="container relative mx-auto px-4">
                <div className="pt-5 pb-8 flex justify-between items-center lg:justify-start">
                    <div className="sm:mt-3 flex justify-start items-center md:flex-1 w-5/12 lg:w-auto">
                        <Link href="/">
                            <a>
                                <span className="sr-only">Havanna</span>
                                <Image className="h-7 md:w-auto md:h-8 lg:h-9" src={isDark ? LogoWhite : Logo} alt="Havanna" />
                            </a>
                        </Link>

                        <nav className={`hidden md:flex items-center md:flex-1 lg:w-0 ml-12 ${isDark ? "text-white" : "text-primary"}`}>
                            <NavItem title="Products" url="/products" />
                            <NavItem title="Company" url="/company" />
                        </nav>
                    </div>
                </div>


            </div>

            {/* Mobile Menu */}
            <div className="block lg:hidden">
                        <input type="checkbox" id="active" />
                        <label htmlFor="active" className="menu-btn -mt-3"><span></span></label>
                        <label htmlFor="active" className="close"></label>
                        <div className="wrapper">
                            <ul>
                                <li><NavItem title="Buy" url="/products/buy" /></li>
                                <li><NavItem title="Sell" url="/products/sell" /></li>
                                <li><NavItem title="Company" url="/company" /></li>
                                <li><NavItem title="Investment Club" url="https://t.me/havannaclub" /></li>
                            </ul>
                        </div>
                    </div>
        </>
    );
};

export default Header;
