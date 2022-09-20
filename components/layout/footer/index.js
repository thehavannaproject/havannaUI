import Image from 'next/image'
import React from 'react'
import styles from "./footer.module.css"
import Logo from "../../../public/images/logo/logo-white.svg"
import FooterImage from "../../../public/images/webp/footer-image.webp"
import Link from 'next/link'
import SlantBox from '../../blocks/slantBox'


const Column = ({ title, links = [], isTargetLink = false }) => {
    return (
        <div className="">
            <h3 className="text-white text-sm-15 lg:text-base font-semibold mb-6">
                {title}
            </h3>

            <ul className="space-y-6 text-sm-15 lg:text-base">
                {links.map((link) => (
                    <li key={link.id} className="text-white">
                        <Link href={link.url}>
                            <a target={isTargetLink ? "_blank" : ""} rel="noopener noreferrer">
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
            id: "j2",
            url: "/company",
            linkName: "About",
        },
        {
            id: "j3",
            url: "/career",
            linkName: "Career",
        },
    ];

    const columnData3 = [
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
    ];
    return (
        <div className={`bg-primary ${styles.footer}`}>
            <div className="container relative mx-auto px-4">
                <div className="pt-20 lg:pt-24 pb-20 lg:pb-36 flex flex-wrap justify-between">
                    <div className="w-full lg:w-4/12">
                        <div className="">
                            <Image src={Logo} alt="Havanna" />
                        </div>
                        <div className="mt-2 w-6/12">
                            <p className="text-white font-semibold text-base lg:text-lg pb-4">make money the <span className="text-secondary">easy</span> way with real estate.</p>

                            <Link href="mailto:hello@havanna.com">
                                <a className="text-light-green hover:transition-all hover:text-white text-sm-15 lg:text-base">
                                    hello@havanna.com
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12 pt-8 lg:pt-4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8">
                            <Column title="Products" links={columnData1} />
                            <Column title="Company" links={columnData2} />
                            <Column title="Connect" links={columnData3} />
                        </div>
                    </div>

                    <div className="w-7/12 lg:w-3/12 pt-12 lg:pt-0 hidden lg:block">
                        <div className="relative">
                            <SlantBox className="absolute -top-5 right-10 z-10" />
                            <div className="">
                                <Image src={FooterImage} alt="Footer Image" />
                            </div>
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

    )
}

export default Footer
