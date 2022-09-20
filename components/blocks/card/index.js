import React from 'react'
import SlantBox from '../slantBox'
import styles from "./card.module.css"

const Card = ({ bgColor, title, description, tag }) => {
    return <div className={`${bgColor === "green" ? styles.cardGreen : styles.cardYellow} pt-8 pb-12 px-8 `}>
        <div className="text-dark font-bold text-sm-15 lg:text-base pt-4 lg:pt-7 relative">
            <div className="relative">
                <SlantBox width='w-10' height="h-10" bgColor={bgColor === "green" ? "bg-secondary" : "bg-primary"} />

                <p className='text-2xl font-semibold absolute top-4 left-1 text-white'>{tag}</p>
            </div>
            <p className="text-sm lg:text-sm-15 mt-6 lg:mt-10">{title}</p>
        </div>
        <p className={`text-default text-xs lg:text-sm pt-4 lg:pt-6 ${styles.cardDescription}`}>
            {description}
        </p>
    </div>
}


export default Card
