import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import Listing from "@components/organisms/Dashboard/Listing/Listing";

const index = () => {
  return (
    <div>
      <DashboardLayout>
        <Listing />
      </DashboardLayout>
    </div>
  );
};

export default index;
