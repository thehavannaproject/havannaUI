import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";

import Account from "@organisms/Dashboard/Account";

const index = () => {
  return (
    <div>
      <DashboardLayout>
        <Account />
      </DashboardLayout>
    </div>
  );
};

export default index;
