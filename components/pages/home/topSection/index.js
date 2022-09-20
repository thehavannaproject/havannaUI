import React from 'react'
import Button from '../../../elements/button'
import Header from '../../../layout/header'
import styles from "./topSection.module.css"
import * as Animate from "react-reveal"
import TopImage1 from "../../../../public/images/webp/top.webp"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import SlantBox from '../../../blocks/slantBox'

const TestimonySlider = dynamic(
    () => import("./../../../carousel/testimonySlider"),
    // No need for SSR, when the module includes a library that only works in the
    // browser.
    { ssr: false }
);

const TopSection = () => {
    return (
        <section className={`relative w-full pb-28 lg:pb-32 ${styles.bg}`}>
            <Header />
            <div className="pl-4 md:pl-20 lg:pl-32 pr-4 md:pr-10 lg:pr-14 px-4 mx-auto pt-12 lg:pt-20 pb-10 lg:pb-6">
                <div className="flex flex-wrap flex-row">
                    <div className="w-full lg:w-5/12 relative pt-6 lg:pt-10">
                        <Animate.Fade bottom>
                            <h1 className="text-4xl lg:text-4xl xl:text-6xl font-semibold text-primary w-11/12">
                                Now, Everyone can Invest  in Real Estate!
                            </h1>
                            <p className="text-default text-base lg:text-lg mt-4 lg:mt-6 pr-0 lg:pr-6">
                                Real estate investment is considered the safest way to secure your future but seems inaccessible to all. Havanna is here to bridge the gap.
                            </p>
                            <div className="pt-14 lg:pt-16 flex">
                                <Button title="START NOW" isLink={true} href="/products" />
                            </div>
                        </Animate.Fade>
                    </div>
                    <div className="relative w-full lg:w-7/12 pl-0 lg:pl-6 mt-16 lg:-mt-12">
                        <Animate.Zoom>
                            <div className=''>
                                <Image src={TopImage1} alt="Havanna Image 1" />
                            </div>
                        </Animate.Zoom>
                    </div>
                </div>
            </div>

            {/* <div className='container w-10/12 lg:w-5/12 mx-auto pb-12'>
                <Animate.Fade bottom>
                    <div className='flex space-x-2 justify-center'>
                        <SlantBox width="w-5" height="h-6" />
                        <SlantBox width="w-5" height="h-6" bgColor={"bg-primary"} />
                    </div>
                    <div className='block relative mt-6 lg:mt-14'>
                        <TestimonySlider />
                    </div>
                </Animate.Fade>
            </div> */}
        </section>
    )
}

export default TopSection
