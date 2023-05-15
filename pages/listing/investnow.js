import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import InvestNow from "@components/organisms/Dashboard/Listing/InvestNow";

const index = () => {
  return (
    <div>
      <DashboardLayout>
        <InvestNow />
      </DashboardLayout>
    </div>
  );
};

export default index;
