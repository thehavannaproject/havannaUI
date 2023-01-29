import React from 'react'

import DashBoardCard from "@components/blocks/DashBoardCard/index.js"

import wallet from "@images/dashboardSvg/Wallet.svg"

const MiddlePage = () => {
    return (

        <section className='font-mulish pt-[38px] pl-8 pr-[46px] bg-HavannaGreen-light h-[1037px]  '>
            <div className='flex justify-between pb-[46px]'>
                <div>
                    <h1 className='font-bold text-24 leading-8'>Hello Bimbo!</h1>
                    <p className='font-normal text-16 leading-6 '>Maintain and grow your investments here.</p>
                </div>

                <div>
                    <button className='bg-HavannaGreen-primary text-white w-[200px] h-[52px] rounded-lg '>Add money +</button>
                </div>
            </div>
            <div className='text-white font-mulish bigLaptop:flex smallLaptop:flex gap-[45px]   '>
                <DashBoardCard description="what up" images='wallet' price="20" title="Life is bigger than " />
                <DashBoardCard description="what up" images='wallet' price="20" title="Life is bigger than " />
                <DashBoardCard description="what up" images='wallet' price="20" title="Life is bigger than " />
            </div>
            <div className='flex justify-between mb-10'>
                <p className='font-bold text-[22px] leading-7 '>Properties</p>
                <p className='font-bold text-16 leading-[22px] '>See all</p>
            </div>
            <div className='bg-white text-center h-[400px] rounded-xl shadow-lg '>
                <p className='font-bold text-20 leading-[26px] '>You dont own any properties yet.</p>
                <button className='bg-HavannaGreen-primary text-white rounded-lg w-[328px]   h-[54px] mt-6 '>Explore properties</button>

            </div>
        </section>

    )
}

export default MiddlePage