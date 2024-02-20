import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import InvestPage from "@components/organisms/invest/InvestPage";

const index = () => {
  return (
    <>
        <DashboardLayout>
          <InvestPage />
        </DashboardLayout>
    </>
  );
};

export default index;
