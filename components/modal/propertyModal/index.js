import React from 'react'
import styles from "./propertyModal.module.css"
import PropertyImage1 from "../../../public/images/webp/properties/land1.webp"
import Button from '../../elements/button'
import Image from 'next/image'


const Row = ({ name, value }) => {
    return <div className='flex flex-row justify-between text-xs lg:text-sm'>
        <p>{name}</p>
        <p>{value}</p>
    </div>
}

const PropertyModal = ({show, selectedData, handleClose }) => {
    return (
        <div className={`w-full h-screen z-10 fixed top-0 left-0 ${styles.modalWrapper}`}>
            <div className='flex flex-wrap justify-end'>
                <div className={`w-11/12 md:w-8/12 lg:w-5/12 h-screen overflow-auto bg-white px-6 md:px-8 lg:px-14 property-modal-card ${show ? "slide-in" : "slide-out"}`}>
                    <div className='cursor-pointer pt-6 md:pt-8'>
                        <div className='flex justify-end'>
                            <button className='focus:outline-none' onClick={handleClose}>
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="2.3741" y1="1.40251" x2="20.4711" y2="19.4995" stroke="#11D100" strokeWidth="2" />
                                <line y1="-1" x2="25.5931" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 19.7642 2.10962)" stroke="#11D100" strokeWidth="2" />
                            </svg>
                            </button>
                           
                        </div>

                        <div className={`py-6 ${styles.cardTitle}`}>
                            <p className='text-primary text-sm lg:text-sm-15'>
                                {selectedData.name} <span className='px-1'>.</span> {selectedData.type}
                            </p>
                            <p className='mt-1 text-primary font-semibold text-base lg:text-lg'>
                                {selectedData.price}
                            </p>
                        </div>

                        <div className=''>
                            <Image src={selectedData.image || PropertyImage1} alt="Property" />
                        </div>

                        <div className='mt-8'>
                            <p className='font-semibold text-sm-15 lg:text-base pb-2'>
                                About Investment
                            </p>
                            <p className='font-light text-xs lg:text-sm'>
                                {selectedData.description}
                            </p>
                        </div>

                       
                        <div className={`mt-8 py-6 md:py-8 px-6 md:px-8 bg-white space-y-4 text-default ${styles.propertyType}`}>
                            <Row name="Price Per Slot" value={selectedData.pricePerSlot} />
                            <Row name="Minimum ROI" value={selectedData.minimumROI} />
                            <Row name="Duration" value={selectedData.duration} />
                        </div>

                        <div className="pt-8 pb-28 flex justify-end">
                                <Button title="INVEST" isLink={true} href={selectedData.linkUrl} />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyModal
