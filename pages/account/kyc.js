import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import Account from "@components/organisms/Dashboard/Account/Account";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout>
        <Account />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
