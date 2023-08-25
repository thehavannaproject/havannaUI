import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import MobileAccount from "@components/organisms/Dashboard/Account/Mobile";

import Account from "@organisms/Dashboard/Account";

const index = () => {
  return (
    <>
      <div>
        <DashboardLayout>
          <Account />
        </DashboardLayout>
      </div>
      <div>
        <DashboardMobileLayout title="Account">
          <MobileAccount />
        </DashboardMobileLayout>
      </div>
    </>
  );
};

export default index;
