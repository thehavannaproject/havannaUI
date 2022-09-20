import React from 'react'
import DownloadSection from '../../components/blocks/downloadSection'
import FaqsSection from '../../components/blocks/faqsSection'
import MainWrapper from '../../components/layout/mainWrapper'
import HowItWorksSellSection from '../../components/pages/products/components/howItWorksSellSection'
import SellTopSection from '../../components/pages/products/sellTopSection'

const Sell = () => {
    return (
        <MainWrapper>
            <SellTopSection />
            <HowItWorksSellSection />
            <FaqsSection />
            <DownloadSection />

        </MainWrapper>
    )
}

export default Sell
