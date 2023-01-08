import React from "react";

import MainWrapper from "@components/layout/mainWrapper";
import DownloadSection from "@components/organisms/LandingPages/home/downloadSection";
import FaqsSection from "@components/organisms/LandingPages/home/faqsSection";
import HowItWorksSellSection from "@components/organisms/products/components/howItWorksSellSection";
import SellTopSection from "@components/organisms/products/sellTopSection";

const Sell = () => {
  return (
    <MainWrapper>
      <SellTopSection />
      <HowItWorksSellSection />
      <FaqsSection />
      <DownloadSection />
    </MainWrapper>
  );
};

export default Sell;
