import React from 'react'
import SlantBox from '../slantBox'
import { faqsData } from './data'
import styles from "./faqsSection.module.css"
import * as Animate from "react-reveal"

const FaqsSection = () => {
    return (
        <section className={`bg-white pt-24 lg:pt-36 pb-28 lg:pb-36 relative ${styles.bg}`}>
            <div className="container px-4 mx-auto">
                <Animate.Fade bottom>
                    <div className="flex justify-center w-full">
                        <div className="relative mb-6">
                            <div className='absolute -top-1 -right-1'><SlantBox /></div>
                            <div className='z-10 relative'>
                                <h2 className="text-2xl lg:text-3xl text-primary font-semibold">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-9/12 mx-auto mt-10 md:mt-14 lg:mt-20 bg-white px-2 md:px-6 lg:px-8 py-6 lg:py-12">
                        {
                            faqsData.map((a, index) => (
                                <div key={index} className="relative pt-1 pb-1 lg:pb-3 px-8 lg:px-10 mb-1 lg:mb-6">
                                    <input type="checkbox" id={`toggle${index}`} className="toggle hidden" />
                                    <label className="dropdown-faq-title block  p-4 cursor-pointer text-primary font-semibold pb-2 question text-sm-15 lg:text-base" htmlFor={`toggle${index}`}>
                                        {a.question}
                                    </label>
                                    <div className="content overflow-hidden">
                                        <p className="p-4 text-default font-light answer text-sm lg:text-sm-15">{a.answer}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Animate.Fade>
            </div>
        </section>
    )
}

export default FaqsSection
