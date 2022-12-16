import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const NavItem = ({ title, url, className }) => {
    const router = useRouter();
    return (
      <div className={`tablet:block ${className}`}>
        <Link href={url || "/"}>
          <a
            className={`whitespace-nowrap text-sm lg:text-base focus:outline-none shadow-none  ${
              router.pathname?.includes(url) ? "active-link" : ""
            }`}
          >
            {title}
          </a>
        </Link>
      </div>
    );
  };

export default NavItem