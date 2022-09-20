import DownloadSection from "../components/blocks/downloadSection";
import FaqsSection from "../components/blocks/faqsSection";
import MainWrapper from "../components/layout/mainWrapper";
import FutureSection from "../components/pages/home/futureSection";
import OpportunitySection from "../components/pages/home/opportunitySection";
import StartSection from "../components/pages/home/startSection";
import TopSection from "../components/pages/home/topSection";
import WhySection from "../components/pages/home/whySection";

export default function Home() {
  return (
    <MainWrapper>
      <TopSection />
      <WhySection />
      <StartSection />
      <OpportunitySection />
      <FutureSection />
      <FaqsSection />
      <DownloadSection />
    </MainWrapper>
  )
}
