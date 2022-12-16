import NavItem from '@components/molecules/NavItem'
import React from 'react'

const MobileHeader = () => {
  return (
    <div>
         <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn -mt-3">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <NavItem title="Buy" url="/products/buy" />
            </li>
            <li>
              <NavItem title="Sell" url="/products/sell" />
            </li>
            <li>
              <NavItem title="Company" url="/company" />
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
  )
}

export default MobileHeader