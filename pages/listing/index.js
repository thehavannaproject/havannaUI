import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import Listing from "@components/organisms/Dashboard/Listing/Listing";
import MobileListing from "@components/organisms/Dashboard/Listing/Mobile";

const index = () => {
  return (
    <>
      <div className="hidden tablet:block">
        <DashboardLayout>
          <Listing />
        </DashboardLayout>
      </div>
      <div className="tablet:hidden">
        <DashboardMobileLayout title="Listing">
          <MobileListing />
        </DashboardMobileLayout>
      </div>
    </>
  );
};

export default index;
