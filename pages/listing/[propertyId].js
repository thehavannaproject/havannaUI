import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetListingById } from "@components/shared/api";
import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import PropertyDetails from "@components/organisms/Dashboard/Listing/Mobile/PropertyDetails";
import DesktopPropertyDetails from "@components/organisms/Dashboard/Listing/DesktopPropertyDetails";
import BaseLayout from "@components/layout/BaseLayout/BaseLayout";

const index = () => {
  const [singleListing, setSingleListing] = useState([]);
  const [token, setToken] = useState("")
  const router = useRouter();
  const { propertyId } = router.query;


  console.log(token)  
  

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
    setToken(localStorage.getItem('token'))
  }, [propertyId]);

  return (
    <>
    {token ? (
      <>
      <div className="hidden tablet:block">
          <DashboardLayout>
            <DesktopPropertyDetails singleListing={singleListing} />
          </DashboardLayout>
  
      </div>
          <div className="tablet:hidden">
          <DashboardMobileLayout className="!px-0" title="Invest">
            <PropertyDetails singleListing={singleListing} />
          </DashboardMobileLayout>
        </div>
      </>
      
      ) : (
        <BaseLayout>
        <div className="px-5 py-6 smallLaptop:px-[120px]">
            <DesktopPropertyDetails singleListing={singleListing} />
        </div>
          </BaseLayout>
      )}
      </>
  );
};

export default index;
