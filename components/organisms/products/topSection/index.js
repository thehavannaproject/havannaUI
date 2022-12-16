import React from 'react'
import Header from '../../../layout/Header/Header'
import styles from "./topSection.module.css"

import SlantBox from '../../../blocks/slantBox'
import BuyImage from "../../../../public/images/webp/buy.webp"
import SellImage from "../../../../public/images/webp/sell.webp"
import Link from 'next/link'
import Image from 'next/image'
import * as Animate from "react-reveal"

const Card = ({ title, image, linkUrl }) => {
    return <Link href={linkUrl || "/"}>
        <a>
            <div className={`${styles.card} pt-12 lg:pt-16`}>
                <div className={`${styles.cardContent}`}>
                    <div className="flex flex-row justify-between items-center pb-4 pl-14 lg:pl-24 ">
                        <p className="text-xl lg:text-2xl font-semibold text-primary">{title}</p>
                        <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.042 8.24251C26.4325 7.85198 26.4325 7.21882 26.042 6.82829L19.678 0.464333C19.2875 0.0738082 18.6543 0.0738082 18.2638 0.464333C17.8733 0.854857 17.8733 1.48802 18.2638 1.87855L23.9206 7.5354L18.2638 13.1923C17.8733 13.5828 17.8733 14.2159 18.2638 14.6065C18.6543 14.997 19.2875 14.997 19.678 14.6065L26.042 8.24251ZM0.653137 8.5354H25.3348V6.5354H0.653137V8.5354Z" fill="#F1BC00" />
                        </svg>
                    </div>
                    <div className="">
                        <Image src={image || BuyImage} placeholder="Opportunity Image" alt="" />
                    </div>
                </div>
            </div>
        </a>
    </Link>
}

const TopSection = () => {
    return (
        <section className={`relative w-full bg-white`}>
            <Header />
            <div className="container px-4 mx-auto pt-32 pb-20 lg:pb-24">
                <div className='text-center w-full lg:w-7/12 mx-auto'>
                    <Animate.Fade bottom>
                        <div className='relative'>
                            <div className='absolute w-full flex justify-center ml-8'>
                                <SlantBox />
                            </div>
                            <div className='relative z-10'>
                                <h1 className='text-3xl md:text-4xl lg:text-5xl text-primary font-semibold'>Build the future you want.</h1>
                            </div>

                        </div>
                        <p className='text-lg lg:text-xl w-full lg:w-10/12 mx-auto mt-6 lg:mt-8 text-default'>The future is now and it is virtual. Select the product you are interested in and take a sneak peek.</p>
                    </Animate.Fade>
                </div>
            </div>

            <div className="w-8/12 mx-auto pb-72">
                <Animate.Slide bottom>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Card title="Buy REVS" image={BuyImage} linkUrl="/products/buy" />
                        <Card title="Sell REVS" image={SellImage} linkUrl="/products/sell" />
                    </div>
                </Animate.Slide>
            </div>
        </section>
    )
}

export default TopSection
