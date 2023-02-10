import Image from "next/image";
import Link from "next/link";

import Icon from "@atoms/Icons";

import Logo from "@images/logo/logo-dark.svg";

const SideBar = () => {
  const SideBarData = [
    {
      id: 1,
      title: "Dashboard",
      link: "#",
      icon: "dashboard",
      titleMenu: [
        {
          icon: "stopWatch",
          name: "Get Started",
          //   key: DashboardMenu.GET_STARTED,
          link: "/dashboard/get-started",
          //   isVisible: !merchantData?.merchantGetStores?.data[0]?.isApproved || storeStat?.storeStats?.data?.products?.total === 0,
        },
        {
          icon: "shield",
          name: "Complete KYC",
          //   key: DashboardMenu.KYC,
          link: "/dashboard/kyc",
          //   isVisible: !merchantData?.merchantGetStores?.data[0]?.isApproved,
        },
      ],
      //   isVisible: !merchantData?.merchantGetStores?.data[0]?.isApproved || storeStat?.storeStats?.data?.products?.total === 0,
    },
    {
      id: 2,
      title: "My Properties",
      icon: "home",
      titleMenu: [
        {
          icon: "home",
          name: "Home",
          //   key: DashboardMenu.GET_STARTED,
          link: "/dashboard/PropertiesDashboard",
          isVisible: false,
        },
      ],
      isVisible: false,
    },
    {
      id: 3,
      title: "Wallet",
      icon: "wallet",
      titleMenu: [
        {
          icon: "receiptAdd",
          name: "Add Products",
          //   key: DashboardMenu.ADD_PRODUCT,
          link: "/dashboard/add-product",
          isVisible: true,
        },
        {
          icon: "receiptEdit",
          name: "Manage Products",
          link: "/dashboard/manage-product",
          isVisible: true,
        },
        {
          icon: "receiptEdit",
          name: "Manage Bookings",
          link: "/dashboard/manage-bookings",
          isVisible: true,
        },
      ],
      isVisible: true,
    },

    {
      id: 4,
      title: "Account",
      icon: "Union",
      titleMenu: [
        {
          icon: "walletAdd",
          name: "Fund Wallet",
          key: "",
          link: "#",
          isVisible: false,
        },
        {
          icon: "arrowUpDown",
          name: "View Transactions",
          link: "/dashboard/wallet/view-transactions",
          isVisible: true,
        },
        {
          icon: "walletMinus",
          name: "Withdrawal",
          key: "",
          link: "#",
          isVisible: false,
        },
      ],
      isVisible: true,
    },
  ];

  return (
    <>
      <div className=" h-screen border-r-[1.5px]">
        <div className="border-b-[1.5px] py-4 pl-6">
          <Link href="/">
            <a>
              <Image src={Logo} width={172} />
            </a>
          </Link>
        </div>
        <div className="mt-[130px] mx-6 text-20">
          {SideBarData.map((data, index) => (
            <div className="hover:bg-green-50 border-l-4  hover:border-l-[#0E5854] " key={index}>
              <div className={` px-6 cursor-pointer py-4 mt-10 flex text-HavannaGreen-primary justify-between ${data.link ? " " : ""}`}>
                <p>{data.title}</p>
                <Icon name={data.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
