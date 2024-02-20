import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import TransactionHistory from "@components/organisms/Dashboard/Wallet/TransactionHistory";

const TransHistory = () => {
  return (
    <>
      <div className="hidden tablet:block">
        <DashboardLayout>
          <TransactionHistory />
        </DashboardLayout>
      </div>
      {/* <div className="tablet:hidden">
        <DashboardMobileLayout title="Wallet">
          <MobileWallet />
        </DashboardMobileLayout>
      </div> */}
    </>
  );
};

export default TransHistory;
