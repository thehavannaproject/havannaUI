import React from "react";

import MainWrapper from "@components/layout/mainWrapper";
import DownloadSection from "@components/organisms/LandingPages/home/downloadSection";
import FaqsSection from "@components/organisms/LandingPages/home/faqsSection";
import BuyTopSection from "@components/organisms/products/buyTopSection";
import HowItWorksBuySection from "@components/organisms/products/components/howItWorksBuySection";
import PropertiesSection from "@components/organisms/products/components/propertiesSection";

const Buy = () => {
  return (
    <MainWrapper>
      <BuyTopSection />
      <HowItWorksBuySection />
      <PropertiesSection />
      <FaqsSection />
      <DownloadSection />
    </MainWrapper>
  );
};

export default Buy;
