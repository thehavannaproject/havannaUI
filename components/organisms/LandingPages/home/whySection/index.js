import React from 'react'
import SlantBox from '../../../../blocks/slantBox'
import styles from "./whySection.module.css"
import * as Animate from "react-reveal"

const Card = ({ bgColor, title, description }) => {
    return <div className={`${bgColor === "green" ? styles.cardGreen : styles.cardYellow} py-6 px-8 `}>
        <Animate.Fade bottom>
            <div className="text-dark font-bold text-sm-15 lg:text-base pt-3 lg:pt-7 flex items-center">
                <div className="ml-1">
                    <SlantBox width='w-5' height="h-7" bgColor={bgColor === "green" ? "bg-secondary" : "bg-primary"} />
                </div>
                <p className="pl-4 text-sm lg:text-sm-15">{title}</p>
            </div>
            <p className={`text-default text-xs lg:text-sm mt-6 ${styles.cardDescription}`}>
                {description}
            </p>
        </Animate.Fade>
    </div>
}

const WhySection = () => {
    return (
        <section className="bg-white pt-24 lg:pt-28 pb-28 lg:pb-32 relative">
            <div className="container px-4 mx-auto">
                <div className="w-full lg:w-6/12">
                    <Animate.Fade bottom>
                        <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary w-10/12 ${styles.title}`}>
                            Why Real Estate Virtual Slots (REVS)
                        </h2>
                        <p className="text-default text-sm-15 md:text-base lg:text-lg mt-5 lg:mt-10">Real Estate Virtual Slots (REVS) are units of real estate assets such as
                            income-producing residential or industrial properties, high-growth lands,
                            and ongoing or proposed estate development projects.
                        </p>
                    </Animate.Fade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pt-12 xl:pt-20">
                    <Card
                        bgColor="green"
                        title="Co-Ownership"
                        description={`Obtain fractional ownership when you purchase a slot in a real estate asset. That way, 
                        we are making you a co-owner or co-investor in the underlying real estate asset.`}
                    />
                    <Card
                        bgColor="yellow"
                        title="Wealth Building"
                        description={`You don’t need a large capital to amass a fortune. Our minimal investment 
                        plans give you the flexibility to invest the right amount, 
                        at the right time, to meet your goals.
                        `}
                    />
                    <Card
                        bgColor="green"
                        title="Diversify without limits"
                        description={`Shield yourself from the stock market’s volatility and diversify 
                        your portfolio with real estate. We offer you the opportunity to diversify 
                        your investment to various asset classes.
                        `}
                    />
                    <Card
                        bgColor="yellow"
                        title="Stay hands off"
                        description={`Avoid the hassles that come with identifying and managing investments. You may relax 
                        knowing that your investment is being professionally managed. No real estate 
                        experience is necessary - we save your time and help you make the right decisions.
                        `}
                    />
                </div>
            </div>
        </section>
    )
}

export default WhySection
