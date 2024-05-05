import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCustomerProfile } from "@components/shared/api";
import { AuthService } from "@components/shared/api/auth";
import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import DashboardMobileLayout from "@components/layout/DashboardLayout/DashboardMobileLayout";
import MobileAccount from "@components/organisms/Dashboard/Account/Mobile";
import { setProfile } from "@components/store/Account";

import Account from "@organisms/Dashboard/Account";

const AccountPage = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const dispatch = useDispatch();

  useEffect(() => {
    getCustomerProfile(userDetails?.customerId)
      .then((response) => {
        dispatch(setProfile(response));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="hidden tablet:block">
        <DashboardLayout>
          <Account />
        </DashboardLayout>
      </div>
      <div className="tablet:hidden">
        <DashboardMobileLayout title="Account">
          <MobileAccount />
        </DashboardMobileLayout>
      </div>
    </>
  );
};

export default AccountPage;
