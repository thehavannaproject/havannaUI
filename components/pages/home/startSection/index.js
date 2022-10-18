import Image from 'next/image'
import React from 'react'
import * as Animate from "react-reveal"
import SlantBox from '../../../blocks/slantBox'

import StartImage from "../../../../public/images/webp/start.webp"
import GrowthImage from "../../../../public/images/webp/growth.webp"

const StartSection = () => {
    return (
        <section className={`relative w-full bg-white`}>
            <div className="container px-4 mx-auto pt-10 lg:pt-20 pb-28 lg:pb-36 flex flex-row flex-wrap justify-between items-center">

                <div className='w-full lg:w-6/12 relative mt-10 md:mt-0 order-2 lg:order-1'>
                    <div className='w-10/12 md:w-9/12 lg:mx-auto relative'>
                        <div className='left-40 absolute -top-5 z-10'>
                            <Animate.Fade bottom>
                                <SlantBox />
                            </Animate.Fade>
                        </div>

                        <Image src={StartImage} alt="Start Investing" />

                        <div className='absolute bottom-32 -right-4'>
                            <Animate.Fade top>
                            <Image src={GrowthImage} width={90} height={90} alt="Growth" />
                            </Animate.Fade>
                        </div>

                        <div className='absolute -mt-2 right-10'>
                            <Animate.Fade top>
                                <SlantBox bgColor={"bg-primary"} height={"h-4"} />
                            </Animate.Fade>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-5/12  order-1 lg:order-2'>
                    <Animate.Fade bottom>
                        <div className='relative'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-primary'>
                                Start your way into Real Estate through REAS
                            </h1>
                        </div>
                        <p className='w-full mt-6 lg:mt-10 text-sm-15 lg:text-default leading-7'>
                            REAS is a very good way to start your journey into Real Estate investements.
                            If you have always wanted to become a Real Estate Investor but you
                            dont know how and where to start, consider starting with REAS.
                            <br /><br />
                            <span className="font-semibold">
                                Land REAS are backed by lands that appreciate in value annually.
                                Property REAS are backed by revenue generating
                                real estate properties
                            </span>
                        </p>
                    </Animate.Fade>
                </div>
            </div>
        </section>
    )
}

export default StartSection
