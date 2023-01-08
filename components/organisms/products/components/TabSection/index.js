import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
const TabSection = () => {
  const router = useRouter();

  return (
    <div className="py-4 w-full bg-white mb-8">
      <div className="container mx-auto px-4">
        <div className="space-x-10 text-sm lg:text-base">
          <Link href="/products/buy">
            <a className={`${router.pathname === "/products/buy" ? "text-primary font-semibold tab-active" : "text-gray-500"}`}>Buy</a>
          </Link>

          <Link href="/products/sell">
            <a className={`${router.pathname === "/products/sell" ? "text-primary font-semibold tab-active" : "text-gray-500"}`}>Sell</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
