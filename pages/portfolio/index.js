import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import MobilePorfolio from "@components/organisms/Dashboard/Properties/MobilePorfolio";
import PropertiesDashBoard from "../../components/organisms/Dashboard/Properties/PropertiesDashBoard";

const index = () => {
  return (
    <>
      <div className="hidden tablet:block">
        <DashboardLayout>
          <PropertiesDashBoard />
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
