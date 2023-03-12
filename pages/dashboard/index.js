import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import MainDashboard from "@components/organisms/Dashboard/Dashboard/MainDashboard";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout>
        <MainDashboard />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
