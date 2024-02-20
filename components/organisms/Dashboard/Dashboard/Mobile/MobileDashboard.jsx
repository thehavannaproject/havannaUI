import { Carousel } from "antd";
import { useEffect, useState } from "react";
import Icon from "@components/atoms/Icons";
import { AuthService } from "@components/api/auth";
import { getCustomerWallet } from "@components/api";
import QuickActions from "./QuickActions";
import RecentInvestment from "./RecentInvestment";
import CurrentListings from "./CurrentListings";

const MobileDashboard = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    getCustomerWallet(userDetails?.customerId)
      .then((data) => {
        if (data) {
          setWallet(data);
        }
      })
      .catch((error) => console.log(error));

    //  getCustomerPortfolio(userDetails?.customerId)
    //   .then((data) => {
    //     if (data) {
    //       setPorfolio(data);
    //     }
    //   })
    //   .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="font-mulish pt-2">
        <div className="flex justify-center w-fit m-auto card-shadow gap-1 py-[6px] px-[10px] rounded-lg ">
          <Icon name="mobileMenu2" />
          <p className="text-[#6B7276] text-12 font-medium">Complete setting up your profile</p>
        </div>
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
                <p className="mt-2 text-20 font-bold">{wallet?.availableBalance ? `₦ ${parseFloat(wallet?.availableBalance)?.toLocaleString()}` : "₦ "}</p>
              </div>
            </div>
          </div>
          <div className="wallet-bg text-white bg-HavannaGreen-secondary h-[142px] rounded-lg mt-5">
            <div className="flex gap-3 items-center pt-5 ml-3">
              <Icon name="mobileWallet" />
              <div>
                <h1 className="text-14 font-bold">Wallet Balance</h1>
                <p className="text-12 font-normal mt-1">Total money in your wallet</p>
                <p className="mt-2 text-20 font-bold">{wallet?.availableBalance ? `₦ ${parseFloat(wallet?.availableBalance)?.toLocaleString()}` : "₦ "}</p>
              </div>
            </div>
          </div>
        </Carousel>

        <QuickActions />
        <RecentInvestment />
        <CurrentListings />
      </div>
    </>
  );
};

export default MobileDashboard;
