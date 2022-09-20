import React from 'react'
import Footer from '../footer'

const MainWrapper = ({ children }) => {
    return (
        <div className='relative'>
            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default MainWrapper
