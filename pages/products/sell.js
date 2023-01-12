import React from "react";

import BaseLayout from "@components/layout/BaseLayout/BaseLayout";
import DownloadSection from "@components/organisms/LandingPages/home/downloadSection";
import FaqsSection from "@components/organisms/LandingPages/home/FaqsSection/Faq";
import HowItWorksSellSection from "@components/organisms/products/components/howItWorksSellSection";
import SellTopSection from "@components/organisms/products/sellTopSection";

const Sell = () => {
  return (
    <BaseLayout>
      <SellTopSection />
      <HowItWorksSellSection />
      <FaqsSection />
      <DownloadSection />
    </BaseLayout>
  );
};

export default Sell;
