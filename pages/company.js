import React from 'react'
import MainWrapper from '../components/layout/mainWrapper'
import ContactSection from '../components/pages/company/contactSection'
import EmpowerSection from '../components/pages/company/empowerSection'
import TopSection from '../components/pages/company/topSection'

const Company = () => {
    return (
        <MainWrapper>
            <TopSection />
            <EmpowerSection />
            <ContactSection />
            
       </MainWrapper>
    )
}

export default Company
