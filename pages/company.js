import React from "react";

import BaseLayout from "@components/layout/BaseLayout/BaseLayout";

import ContactSection from "../components/organisms/company/contactSection";
import EmpowerSection from "../components/organisms/company/empowerSection";
import TopSection from "../components/organisms/products/topSection";

const Company = () => {
  return (
    <BaseLayout>
      <TopSection />
      <EmpowerSection />
      <ContactSection />
    </BaseLayout>
  );
};

export default Company;
