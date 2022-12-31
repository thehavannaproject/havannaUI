import React from "react";

import FaqsSection from "../faqsSection";
import FutureSection from "../futureSection";
import HavannaProvision from "../HavannaProvision/HavannaProvision";
import MailListSection from "../MailListSection/MailListSection";
import OpportunitySection from "../opportunitySection/OpportunitySection";
import StartSection from "../startSection";
import TopSection from "../topSection/TopSection";
import WhySection from "../whySection";

const HomePage = () => {
  return (
    <div>
      <TopSection />
      <HavannaProvision />
      <WhySection />
      <StartSection />
      <OpportunitySection />
      <FutureSection />
      <MailListSection />
      <FaqsSection />
    </div>
  );
};

export default HomePage;
