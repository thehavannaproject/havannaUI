import React from 'react'
import Footer from '@layout/Footer'
import Header from '@layout/Header/Header'
// import Header from '@layout/Header'
const BaseLayout = ({ children }) => {
    return (
        <div className='relative'>
            <Header/>
            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default BaseLayout
