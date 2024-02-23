import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import InvestNow from "@components/organisms/Dashboard/Listing/InvestNow";
import MobileInvestForm from "@components/organisms/Dashboard/Listing/Mobile/InvestmentForm";
// import InvestmentSummary from "@components/organisms/Dashboard/Listing/Mobile/InvestmentSummary";

const index = () => {
  return (
    <div>
      <div className="hidden smallLaptop:block">
        <DashboardLayout>
          <InvestNow />
        </DashboardLayout>
      </div>
      <div className="smallLaptop:hidden">
        <DashboardMobileLayout className="px-0" title="Invest">
          <MobileInvestForm />
        </DashboardMobileLayout>
      </div>
    </div>
  );
};

export default index;
