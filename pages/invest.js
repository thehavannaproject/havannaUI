import BaseLayout from "@components/layout/BaseLayout/BaseLayout";
import Listing from "@components/organisms/Dashboard/Listing/Listing";
import MobileListing from "@components/organisms/Dashboard/Listing/Mobile";

const invest = () => {
  return (
    <>
    <BaseLayout>
      <div className="hidden tablet:block">
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
