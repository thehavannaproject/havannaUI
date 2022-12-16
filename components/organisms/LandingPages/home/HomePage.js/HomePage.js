import React from 'react'
import FaqsSection from '../faqsSection'
import FutureSection from '../futureSection'
import OpportunitySection from '../opportunitySection/OpportunitySection'
import StartSection from '../startSection'
import TopSection from '../topSection/TopSection'
import WhySection from '../whySection'
import MailListSection from '../MailListSection/MailListSection'
import HavannaProvision from '../HavannaProvision/HavannaProvision'

const HomePage = () => {
  return (
    <div>
        <TopSection />
        <HavannaProvision/>
        <WhySection />
        <StartSection />
        <OpportunitySection />
        <FutureSection />
        <MailListSection/>
        <FaqsSection />
    </div>
  )
}

export default HomePage