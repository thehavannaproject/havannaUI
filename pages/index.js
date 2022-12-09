import DownloadSection from "../components/organisms/LandingPages/home/downloadSection";
import FaqsSection from "../components/organisms/LandingPages/home/faqsSection";
import MainWrapper from "../components/layout/mainWrapper";
import OpportunitySection from "../components/organisms/LandingPages/home/opportunitySection";
import MailListingSection from "../components/organisms/LandingPages/home/mailListSection"
import StartSection from "../components/organisms/LandingPages/home/startSection"
import TopSection from "../components/organisms/LandingPages/home/topSection";
import WhySection from "../components/organisms/LandingPages/home/whySection";
import FutureSection from "../components/organisms/LandingPages/home/futureSection";
import HavannaProvides from "../components/organisms/LandingPages/home/HavannaProvision";

export default function Home() {
  return (
    <MainWrapper>
      <TopSection />
      <HavannaProvides/>
      <WhySection />
      <StartSection />
      <OpportunitySection />
      <FutureSection />
      <MailListingSection/>
      <FaqsSection />
      {/* <DownloadSection /> */}
    </MainWrapper>
  )
}
