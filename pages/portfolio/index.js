import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import MobilePorfolio from "@components/organisms/Dashboard/Porfolio/MobilePorfolio";
import DesktopPortfolio from "../../components/organisms/Dashboard/Porfolio/DesktopPortfolio";

const index = () => {
  return (
    <>
      <div className="hidden tablet:block">
        <DashboardLayout>
          <DesktopPortfolio />
        </DashboardLayout>
      </div>
      <div className="tablet:hidden">
        <DashboardMobileLayout>
          <MobilePorfolio />
        </DashboardMobileLayout>
      </div>
    </>
  );
};
export default index;
