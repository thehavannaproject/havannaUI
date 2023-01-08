import Image from 'next/image';
import React from 'react'

import NavItem from '@components/molecules/NavItem'

import CustomLink from '@atoms/CustomLink/CustomLink';

import Logo from "@images/logo/logo-dark.svg";
import LogoWhite from "@images/logo/logo-white.svg";


const MobileHeader = ({isDark = false}) => {
  return (
    <>
      <div className='flex justify-between px-4 py-[36px] bg-HavannaGreen-100'>
        <CustomLink destination="/">
          <span className="sr-only">Havanna</span>
          <Image
            alt="Havanna"
            src={isDark ? LogoWhite : Logo}
            width={120}
          />
        </CustomLink>
        <div>
          <input id="active" type="checkbox" />
          <label className="menu-btn -mt-3" htmlFor="active">
            <span />
          </label>
          <label className="close" htmlFor="active" />
          <div className="wrapper bg-white">
            <ul>
              <li>
                <NavItem title="Invest" url="/products/buy" />
              </li>
              <li>
                <NavItem title="About Us" url="/products/sell" />
              </li>
              <li>
                <NavItem title="Blog" url="/company" />
              </li>
              <li>
                <NavItem title="Investment Club" url="https://t.me/havannaclub" />
              </li>
              <li>
                <NavItem title="Create an Account" url="/" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </> 
  )
}

export default MobileHeader