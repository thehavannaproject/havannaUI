import React from 'react'
import SlantBox from '../../../blocks/slantBox'
import styles from "./contactSection.module.css"
import WhatsAppIcon from "../../../../public/images/svg/whatsapp.svg"
import ArrowIcon from "../../../../public/images/svg/arrow.svg"
import Image from 'next/image'
import Link from 'next/link'
import * as Animate from "react-reveal"

const Card = ({ title, text, showLink = false, linkUrl, footer }) => {
    return (
        <div className='bg-white'>
            <div className='py-10 px-8 relative'>
                <p className='text-primary font-semibold text-sm-15 lg:text-base'>{title}</p>
                <p className='font-light pt-2 text-sm-15 lg:text-base'>{text}</p>

                {showLink && <div className='absolute right-8 top-14'>
                    <div className='flex flex-col'>
                        <Link href="https://web.wahtsapp.com">
                            <a>
                                <Image src={WhatsAppIcon} alt="Whatsapp" />
                            </a>
                        </Link>

                        <div className='-ml-3 mt-1'>
                            <Image src={ArrowIcon} alt="Whatsapp" />
                        </div>

                    </div>
                </div>}
            </div>

            <div className={`${styles.cardFooter} flex justify-between px-8 py-2 text-xs font-light lg:text-sm`}>
                <p>Get response within 24 hours</p>
                {
                    showLink && <p className={styles.tapText}>Tap icon</p>
                }

            </div>
        </div>
    )
}

const ContactSection = () => {
    return (
        <section className={`pt-24 lg:pt-32 pb-40 relative ${styles.bg}`}>
            <div className="container px-4 mx-auto">
                <Animate.Fade bottom>
                    <div className="flex justify-center w-full">
                        <div className="relative">
                            <div className='absolute -top-1 -right-1'><SlantBox /></div>
                            <div className='z-10 relative'>
                                <h2 className="text-2xl lg:text-3xl text-primary font-semibold">Got questions/Enquiries?</h2>
                            </div>
                        </div>
                    </div>
                    <p className='text-center mt-4 lg:mt-6'>We will love to attend to all your questions and enquiries</p>

                    <div className="w-full lg:w-11/12 mx-auto mt-14 lg:mt-20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
                            <Card
                                title="Send us an email"
                                text="hello@havannah.com"
                                footer="Get response with 24 hours"
                            />
                            <Card
                                title="Place a call"
                                text="+234 816 084 5819"
                                footer="Get response immediately"
                            />
                            <Card
                                title="Reach out via WhatsApp"
                                text="+234 816 084 5819"
                                footer="Get response immediately"
                                showLink={true}
                            />
                        </div>
                    </div>
                </Animate.Fade>
            </div>
        </section>
    )
}

export default ContactSection
