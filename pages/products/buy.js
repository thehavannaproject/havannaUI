import React from "react";

import BaseLayout from "@components/layout/BaseLayout/BaseLayout";
import DownloadSection from "@components/organisms/LandingPages/home/downloadSection";
import FaqsSection from "@components/organisms/LandingPages/home/FaqsSection/Faq";
import BuyTopSection from "@components/organisms/products/buyTopSection";
import HowItWorksBuySection from "@components/organisms/products/components/howItWorksBuySection";
// import PropertiesSection from "@components/organisms/products/components/propertiesSection";

const Buy = () => {
  return (
    <BaseLayout>
      <BuyTopSection />
      <HowItWorksBuySection />
      {/* <PropertiesSection /> */}
      <FaqsSection />
      <DownloadSection />
    </BaseLayout>
  );
};

export default Buy;
