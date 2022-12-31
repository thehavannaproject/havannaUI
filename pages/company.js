import React from "react";

import MainWrapper from "@components/layout/BaseLayout/BaseLayout";
import ContactSection from "@components/organisms/company/contactSection";
import EmpowerSection from "@components/organisms/company/empowerSection";
import TopSection from "@components/organisms/products/topSection";

const Company = () => {
  return (
    <MainWrapper>
      <TopSection />
      <EmpowerSection />
      <ContactSection />
    </MainWrapper>
  );
};

export default Company;
