import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import TransactionSummary from "@components/organisms/Dashboard/Listing/TransactionSummarry";

const index = () => {
  return (
    <div>
      <DashboardLayout>
        <TransactionSummary />
      </DashboardLayout>
    </div>
  );
};

export default index;
