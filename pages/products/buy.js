import React from 'react'
import DownloadSection from '../../components/blocks/downloadSection'
import FaqsSection from '../../components/blocks/faqsSection'
import MainWrapper from '../../components/layout/mainWrapper'
import BuyTopSection from '../../components/pages/products/buyTopSection'
import HowItWorksBuySection from '../../components/pages/products/components/howItWorksBuySection'
import PropertiesSection from '../../components/pages/products/components/propertiesSection'

const Buy = () => {
    return (
        <MainWrapper>
            <BuyTopSection />
            <HowItWorksBuySection />
            <PropertiesSection />
            <FaqsSection />
            <DownloadSection />

        </MainWrapper>
    )
}

export default Buy
