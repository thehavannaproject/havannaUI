import { useRouter } from 'next/router';
import React from 'react'

import CustomLink from '../atoms/CustomLink/CustomLink';

const NavItem = ( {title, url, className} ) => {
    const router = useRouter();
    return (
      <div className={`tablet:block ${className}`}>
        <CustomLink destination={url || "/"}>
          <a
            className={`whitespace-nowrap text-sm lg:text-base focus:outline-none shadow-none  ${
              router.pathname?.includes(url) ? "active-link" : ""
            }`}
          >
            {title}
          </a>
        </CustomLink>
      </div>
    );
  };

export default NavItem