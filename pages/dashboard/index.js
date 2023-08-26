import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import MainDashboard from "@components/organisms/Dashboard/Dashboard/MainDashboard";
import MobileDashboard from "@components/organisms/Dashboard/Dashboard/Mobile/MobileDashboard";

const Dashboard = () => {
  return (
    <>
      <div className="hidden tablet:block">
        <DashboardLayout>
          <MainDashboard />
        </DashboardLayout>
      </div>
      <div className="tablet:hidden">
        <DashboardMobileLayout title="Dashboard">
          <MobileDashboard />
        </DashboardMobileLayout>
      </div>
    </>
  );
};

export default Dashboard;
