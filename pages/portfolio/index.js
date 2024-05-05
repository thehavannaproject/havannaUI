import { useEffect, useState } from "react";
import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import MobilePorfolio from "@components/organisms/Dashboard/Porfolio/MobilePorfolio";
import { getCustomerPortfolio } from "@components/shared/api";
import { AuthService } from "@components/shared/api/auth";
import DesktopPortfolio from "../../components/organisms/Dashboard/Porfolio/DesktopPortfolio";

const index = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [porfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCustomerPortfolio_ = async () => {
    setLoading(true);
    await getCustomerPortfolio(userDetails?.customerId)
    .then((response) => {setPortfolio(response.properties); setLoading(false);})
    .catch((error) => {console.log(error); setLoading(false);});
  }

  // useEffect(() => {
  //   if (propName) {
  //     const filteredData = porfolio.filter((val) => val.name === propName);
  //     setPortfolio(filteredData);
  //   }
  // }, [propName]);

  useEffect(() => {
    getCustomerPortfolio_()
  }, []);

  return (
    <>
      <div className="hidden tablet:block">
        <DashboardLayout>
          <DesktopPortfolio loading={loading} porfolio={porfolio} />
        </DashboardLayout>
      </div>
      <div className="tablet:hidden">
        <DashboardMobileLayout>
          <MobilePorfolio loading={loading} porfolio={porfolio}/>
        </DashboardMobileLayout>
      </div>
    </>
  );
};
export default index;
