import React from "react";
import MainWrapper from "../components/layout/mainWrapper";
// import ContactSection from "../components/organisms/company/contactSection";
import TopSection from "../components/organisms/products/topSection";
import SignIn from "../components/organisms/signIn/SignIn";

const LogIn = () => {
  return (
    <MainWrapper>
      <TopSection />
      <SignIn />
    </MainWrapper>
  );
};

export default LogIn;
