import BaseLayout from "@components/layout/BaseLayout/BaseLayout";
import Listing from "@components/organisms/Dashboard/Listing/Listing";
import MobileListing from "@components/organisms/Dashboard/Listing/Mobile";

const invest = () => {
  return (
    <>
      <BaseLayout>
        <div className="hidden !bg-white tablet:block smallLaptop:px-[120px] pb-20 mt-10">
          <p className="text-center smallLaptop:text-24 mb-10 font-mulish font-bold">Invest in our listed properties.</p>
          <Listing />
        </div>
        <div className="tablet:hidden">
          <MobileListing />
        </div>
      </BaseLayout>
    </>
  );
};

export default invest;
