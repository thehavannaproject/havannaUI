import Image from 'next/image'
import React from 'react'
import styles from "./futureSection.module.css"
import FutureImage from "../../../../public/images/webp/future.webp"
import SlantBox from '../../../blocks/slantBox'
import * as Animate from "react-reveal"

const FutureSection = () => {
    return (
        <section className={`pt-24 lg:pt-28 pb-20 lg:pb-32 relative bg-primary ${styles.bg}`}>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap flex-row items-center pb-20">
                    <div className="w-full lg:w-5/12">
                        <Animate.Fade bottom>
                            <h2 className="font-bold text-secondary text-2xl md:text-3xl lg:text-4xl">Build the future you want.</h2>

                            <p className="text-white mt-6 lg:mt-10 text-sm-15 md:text-base lg:text-lg">
                                Real estate is a highly sought-after asset class among professional investors.
                                We&apos;ve simply placed it within everyone’s grasp. Be a real
                                estate pro without needing to be a millionaire.
                            </p>
                        </Animate.Fade>
                    </div>

                    <div className="w-10/12 lg:w-6/12 xl:w-7/12 pt-20 lg:pt-8 relative mx-auto xl:mx-0">
                        <Animate.Slide bottom>
                            <div className="absolute right-12 top-12 lg:-top-4">
                                <SlantBox bgColor="bg-white" width="w-14 lg:w-20" height="h-14 lg:h-20" />
                            </div>
                            <div className="relative z-10">
                                <Image src={FutureImage} alt="Future" />
                            </div>
                            <div className="absolute -mt-16 lg:-mt-20 -ml-4 lg:-ml-8">
                                <SlantBox width="w-20 lg:w-28" height="h-20 lg:h-28" />
                            </div>
                        </Animate.Slide>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FutureSection
