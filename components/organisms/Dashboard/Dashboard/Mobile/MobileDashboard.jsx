import { Carousel } from "antd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Icon from "@components/atoms/Icons";
import { AuthService } from "@components/shared/api/auth";
import TransactionProcessingModal from "@components/atoms/TransactionProcessingModal";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import PopUpModalTemplate from "@components/atoms/PopUpModalTemplate";
import QuickActions from "./QuickActions";
import RecentInvestment from "./RecentInvestment";
import CurrentListings from "./CurrentListings";

const MobileDashboard = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [gotoAccountModal, setGotoAccountModal] = useState(false);

  const { walletBalance } = useSelector((state) => state.Wallet);
  const { portfolio } = useSelector((state) => state.Customer);
  const { profile } = useSelector((state) => state.Account);


  useEffect(() => {
    if (profile?.customerId && !profile?.phoneNumber) {
      setGotoAccountModal(true);
    } else {
      setGotoAccountModal(false);
    }
  }, [profile?.phoneNumber])

  return (
    <>
      <div className="font-mulish pt-2">
        {profile?.customerId && !profile?.phoneNumber && (
          <div className="flex justify-center w-fit m-auto card-shadow gap-1 py-[6px] px-[10px] rounded-lg ">
            <Icon name="mobileMenu2" />
            <CustomLink destination="/account">
              <p className="text-[#6B7276] text-12 font-medium">Complete setting up your profile</p>
            </CustomLink>
          </div>
        )}
        <div className="mt-5">
          <h1 className="text-HavannaBlack-primary text-20 font-semibold">Hello {userDetails?.customerName?.split(" ")[0]}!</h1>
          <p className="mt-2 text-[#6B7276] text-14">Maintain and grow your investments here.</p>
        </div>
        <Carousel dots={{ className: "!text-HavannaGreen-secondary" }}>
          <div className="wallet-bg text-white  bg-HavannaGreen-secondary h-[142px] rounded-lg mt-5">
            <div className="flex gap-3 items-center pt-5 ml-3">
              <Icon name="mobileWallet" />
              <div>
                <h1 className="text-14 font-bold">Wallet Balance</h1>
                <p className="text-12 font-normal mt-1">Total money in your wallet</p>
                <p className="mt-2 text-20 font-bold">{walletBalance?.availableBalance ? `₦ ${parseFloat(walletBalance?.availableBalance)?.toLocaleString()}` : "₦ 0"}</p>
              </div>
            </div>
          </div>
          <div className="wallet-bg text-white bg-HavannaGreen-secondary h-[142px] rounded-lg mt-5">
            <div className="flex gap-3 items-center pt-5 ml-3">
              <Icon name="propertiesWallet" />
              <div>
                <h1 className="text-14 font-bold">Properties Value</h1>
                <p className="text-12 font-normal mt-1">Total worth of your properties</p>
                <p className="mt-2 text-20 font-bold">{walletBalance?.availableBalance ? `₦ ${parseFloat(portfolio?.balance)?.toLocaleString()}` : "₦ 0"}</p>
              </div>
            </div>
          </div>
        </Carousel>

        <QuickActions setShowSuccessModal={setShowSuccessModal}/>
        <RecentInvestment portfolio={portfolio} />
        <CurrentListings />
        {showSuccessModal && <TransactionProcessingModal setShowSuccessModal={setShowSuccessModal} />}
        <CustomModal cardClassName="w-[348px] tablet:w-[600px]" toggleVisibility={setGotoAccountModal} visibility={gotoAccountModal}>
          <div className="bg-white text-black px-6 pt-4 flex justify-center items-center font-mulish h-[250px] rounded-lg  ">
            <PopUpModalTemplate description="Kindly complete your account information to proceed. " destination="/account" linkTitle="Go to Account" title="Notice" />
          </div>
        </CustomModal>
      </div>
    </>
  );
};

export default MobileDashboard;
