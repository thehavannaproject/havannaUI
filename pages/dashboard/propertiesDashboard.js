import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";

import PropertiesDashBoard from "../../components/organisms/Dashboard/Properties/PropertiesDashBoard";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout>
        <PropertiesDashBoard />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
