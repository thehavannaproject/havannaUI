import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import InvestPages from "@components/organisms/Dashboard/Listing/InvestPages";

const index = () => {
  return (
    <div>
      <DashboardLayout>
        <InvestPages />
      </DashboardLayout>
    </div>
  );
};

export default index;
