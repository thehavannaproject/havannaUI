import React from "react";

import NavItem from "@components/molecules/NavItem";

const MobileHeader = () => {
  return (
    <div>
      <input id="active" type="checkbox" />
      <label className="menu-btn -mt-3" htmlFor="active">
        <span />
      </label>
      <label className="close" htmlFor="active" />
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
            <NavItem title="Create an Account" url="/sign-up" />
          </li>
          <li>
            <NavItem title="login" url="/login" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;
