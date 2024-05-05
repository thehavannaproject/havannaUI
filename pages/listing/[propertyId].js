import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetListingById } from "@components/api";
import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import PropertyDetails from "@components/organisms/Dashboard/Listing/Mobile/PropertyDetails";
import InvestPage from "@components/organisms/invest/InvestPage";

const index = () => {
  const [singleListing, setSingleListing] = useState([]);
  const router = useRouter();
  const { propertyId } = router.query;

  const getListingById = () => {
    GetListingById(propertyId)
      .then((res) => {
        setSingleListing(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getListingById();
  }, [propertyId]);

  return (
    <>
    <div className="hidden tablet:block">
        <DashboardLayout>
          <InvestPage singleListing={singleListing} />
        </DashboardLayout>

    </div>
        <div className="tablet:hidden">
        <DashboardMobileLayout className="px-0" title="Invest">
          <PropertyDetails singleListing={singleListing} />
        </DashboardMobileLayout>
      </div>
    </>
  );
};

export default index;
