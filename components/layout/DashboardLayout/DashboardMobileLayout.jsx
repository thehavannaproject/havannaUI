import React from "react";
import MobileNavBar from "./MobileNavBar";

const DashboardMobileLayout = ({ children, title, className }) => {
  return (
    <>
      <div>
        <div className="sticky w-full top-0 z-50">
          <MobileNavBar title={title} />
        </div>
        <main className={`px-6 ${className}`}>{children}</main>
      </div>
    </>
  );
};

export default DashboardMobileLayout;
