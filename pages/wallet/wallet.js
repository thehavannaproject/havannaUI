import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import Wallet from "@components/organisms/Dashboard/Wallet";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout>
        <Wallet />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
