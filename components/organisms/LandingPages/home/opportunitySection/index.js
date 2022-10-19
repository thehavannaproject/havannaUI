import Image from 'next/image'
import React from 'react'
import SlantBox from '../../../../blocks/slantBox'
import styles from "./opportunitySection.module.css"
import BuyImage from "../../../../../public/images/webp/buy.webp"
import SellImage from "../../../../../public/images/webp/sell.webp"
import Link from 'next/link'
import * as Animate from "react-reveal"

const Card = ({ title, image, linkUrl }) => {
    return <Link href={linkUrl || "/"}>
        <a>
            <div className={`${styles.card} pt-10 lg:pt-16`}>
                <div className={`${styles.cardContent}`}>
                    <div className="flex flex-row justify-between items-center pb-4 pl-14 lg:pl-20 ">
                        <p className="text-xl lg:text-2xl font-semibold text-primary">{title}</p>
                        <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.042 8.24251C26.4325 7.85198 26.4325 7.21882 26.042 6.82829L19.678 0.464333C19.2875 0.0738082 18.6543 0.0738082 18.2638 0.464333C17.8733 0.854857 17.8733 1.48802 18.2638 1.87855L23.9206 7.5354L18.2638 13.1923C17.8733 13.5828 17.8733 14.2159 18.2638 14.6065C18.6543 14.997 19.2875 14.997 19.678 14.6065L26.042 8.24251ZM0.653137 8.5354H25.3348V6.5354H0.653137V8.5354Z" fill="#F1BC00" />
                        </svg>
                    </div>
                    <div className="" style={{fontSize: 0}}>
                        <Image src={image || BuyImage} placeholder="Opportunity Image" alt="" />
                    </div>
                </div>
            </div>

        </a>
    </Link>
}

const OpportunitySection = () => {
    return (
        <section className={`pt-24 lg:pt-28 pb-28 lg:pb-32 relative ${styles.bg}`}>
            <div className="container px-4 mx-auto">
                <Animate.Fade bottom>
                    <div className="flex justify-center w-full">
                        <div className="relative">
                            <div className='absolute -top-1 -right-1'><SlantBox /></div>
                            <div className='z-10 relative'>
                                <h2 className="text-2xl lg:text-3xl text-primary font-semibold">Opportunities made for you</h2>
                            </div>
                        </div>
                    </div>

                
                    <div className="w-8/12 lg:w-8/12 mx-auto mt-16 lg:mt-20 xl:mt-28">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <Card title="Buy REAS" image={BuyImage} linkUrl="/products/buy" />
                            <Card title="Sell REAS" image={SellImage} linkUrl="/products/sell" />
                        </div>
                    </div>
                </Animate.Fade>
            </div>
        </section>
    )
}

export default OpportunitySection
