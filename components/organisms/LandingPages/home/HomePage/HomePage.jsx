// import DownloadSection from "@components/organisms/LandingPages/home/downloadSection";
import FaqsSection from "@components/organisms/LandingPages/home/FaqsSection/Faq";
import FutureSection from "@components/organisms/LandingPages/home/FutureSection/FutureSection";
import MailListingSection from "@components/organisms/LandingPages/home/MailListSection/MailListSection";
import OpportunitySection from "@components/organisms/LandingPages/home/OpportunitySection/OpportunitySection";
import StartSection from "@components/organisms/LandingPages/home/StartSection/StartSection";
import TopSection from "@components/organisms/LandingPages/home/TopSection/TopSection";
import WhySection from "@components/organisms/LandingPages/home/WhySection/WhySection";

import HavannaProvision from "../HavannaProvision/HavannaProvision";


const HomePage = () => {
  return (
    <div>
      <TopSection />
      <HavannaProvision/>
      <WhySection />
      <StartSection />
      <OpportunitySection />
      <FutureSection />
      <MailListingSection />
      <FaqsSection />
      {/* <DownloadSection /> */}
    </div>
  )
}

export default HomePage;