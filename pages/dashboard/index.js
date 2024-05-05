import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCustomerPortfolio, getCustomerWallet } from "@components/shared/api";
import { AuthService } from "@components/shared/api/auth";
import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import MainDashboard from "@components/organisms/Dashboard/Dashboard/MainDashboard";
import MobileDashboard from "@components/organisms/Dashboard/Dashboard/Mobile/MobileDashboard";
import { setPortfolio } from "@components/store/Customer";
import { setWalletBalance } from "@components/store/Wallet";

const Dashboard = () => {
  const dispatch = useDispatch();
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
 

  const _getCustomerWallet = () => {
    getCustomerWallet(userDetails?.customerId).then((res) => { dispatch(setWalletBalance(res))})
  }
  const _getCustomerPortfolio = () => {
    getCustomerPortfolio(userDetails?.customerId).then((res) => { dispatch(setPortfolio(res))})
  }

  useEffect(() => {
    _getCustomerWallet();
    _getCustomerPortfolio();
  }, []);

  return (
    <>
      <div className="hidden tablet:block">
        <DashboardLayout>
          <MainDashboard />
        </DashboardLayout>
      </div>
      <div className="tablet:hidden">
        <DashboardMobileLayout title="Dashboard">
          <MobileDashboard />
        </DashboardMobileLayout>
      </div>
    </>
  );
};

export default Dashboard;
