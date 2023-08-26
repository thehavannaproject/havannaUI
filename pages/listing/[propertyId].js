import { useRouter } from "next/router";
import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import Listing from "@components/organisms/Dashboard/Listing/Listing";
import PropertyDetails from "@components/organisms/Dashboard/Listing/Mobile/PropertyDetails";

const index = () => {
  const router = useRouter();
  const { propertyId } = router.query;
  return (
    <>
      <div>
        <DashboardLayout>
          <Listing />
        </DashboardLayout>
      </div>
      <div>
        <DashboardMobileLayout className="!px-0" title={propertyId}>
          <PropertyDetails />
        </DashboardMobileLayout>
      </div>
    </>
  );
};

export default index;
