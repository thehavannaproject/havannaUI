import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import Wallet from "@components/organisms/Dashboard/Wallet";
import MobileWallet from "@components/organisms/Dashboard/Wallet/Mobile";

const Dashboard = () => {
  return (
    <>
      <div className="hidden tablet:block">
        <DashboardLayout>
          <Wallet />
        </DashboardLayout>
      </div>
      <div className="tablet:hidden">
        <DashboardMobileLayout title="Wallet">
          <MobileWallet />
        </DashboardMobileLayout>
      </div>
    </>
  );
};

export default Dashboard;
