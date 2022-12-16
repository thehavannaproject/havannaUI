import Image from 'next/image'
import React from 'react'
import SlantBox from '../../../blocks/slantBox'
import Button from '../../../elements/button'
import Header from '../../../layout/Header/Header'
import TabSection from '../components/TabSection'
import TopImage1 from "../../../../public/images/webp/buy-top.webp"
import { handleScrollTo } from '../../../../utils/handleScrollTo'
import * as Animate from "react-reveal"

const BuyTopSection = () => {

    return (
        <section className={`relative w-full bg-gray`}>
            <Header />
            <TabSection />
            <div className='container mx-auto px-4 pt-6 lg:pt-10'>
                <div className="flex flex-wrap flex-row">
                    <div className="w-full lg:w-6/12 relative pt-6 lg:pt-16 pb-20">
                        <Animate.Fade bottom>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary">
                                You invest, we take care of the rest.
                            </h1>
                            <p className="text-default text-base lg:text-lg mt-4 md:mt-6 lg:mt-8 w-full lg:w-10/12 ">
                                Not everyone can be a property sole owner but everyone can be a co-owner. Join thousand of others investing in fractional real estate assets.                        </p>
                            <div className="pt-14 lg:pt-16 flex">
                                <Button title="SEE LISTING" isLink={false} onClick={() => handleScrollTo("properties")} />
                            </div>
                        </Animate.Fade>
                    </div>
                    <div className="relative w-full lg:w-5/12 pl-6 self-end flex">
                        <div className='relative'>
                            <Animate.Fade bottom>
                                <div className='absolute w-52 lg:w-96 h-full left-1 lg:left-8 -top-6 lg:-top-16'>
                                    <SlantBox className="slant-gradient" height="h-full" width="w-full" />
                                </div>
                                <div className="">
                                    <Image src={TopImage1} alt="Havanna Image 1" />
                                </div>
                            </Animate.Fade>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BuyTopSection
