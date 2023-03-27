import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import KycVerification from "@components/organisms/Dashboard/Kyc/KycVerification";

const index = () => {
  return (
    <div>
      <DashboardLayout>
        <KycVerification />
      </DashboardLayout>
    </div>
  );
};

export default index;
