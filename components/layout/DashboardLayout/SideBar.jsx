import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import CustomLink from "@components/atoms/CustomLink/CustomLink";

import Icon from "@atoms/Icons";

import Logo from "@images/logo/logo-dark.svg";

const SideBar = () => {
  const router = useRouter();
  const routerName = router.pathname;

  const SideBarData = [
    {
      id: 1,
      title: "Dashboard",
      link: "/dashboard",
      icon: "dashboard",
      name: "dashboard",
      //
      //   isVisible: !merchantData?.merchantGetStores?.data[0]?.isApproved || storeStat?.storeStats?.data?.products?.total === 0,
    },
    {
      id: 2,
      title: "Portfolio",
      icon: "unionDashboard",
      link: "/portfolio",
      isVisible: false,
      name: "portfolio",
    },
    {
      id: 4,
      title: "Listing",
      icon: "listing",
      link: "/listing/listing",
      isVisible: true,
      name: "listing",
    },
    {
      id: 3,
      title: "Wallet",
      icon: "wallet",
      link: "/wallet/wallet",
      isVisible: true,
      name: "wallet",
    },

    {
      id: 4,
      title: "Account",
      icon: "Union",
      link: "/account",
      isVisible: true,
      name: "account",
    },
  ];

  return (
    <>
      <div className=" w-full fixed max-w-[21%] border-r-[1px]">
        <div className="border-b-[1px] py-4 pl-6">
          <Link href="/">
            <a>
              <Image height={38} src={Logo} width={128.29} />
            </a>
          </Link>
        </div>
        <div className=" mx-6 text-20">
          {SideBarData.map((data, index) => (
            <div className={`hover:bg-green-50 ${routerName.includes(data.name) ? "bg-green-50 border-l-4 border-l-[#0E5854] " : ""} `} key={index}>
              <CustomLink destination={data.link}>
                <div className={` px-6 cursor-pointer py-4 mt-6 h-[58px] flex text-HavannaGreen-primary justify-between `}>
                  <p>{data.title}</p>
                  <Icon className="text-black" fill={routerName.includes(data.name) ? "#0E5854" : "#6B7276" } name={data.icon} />
                </div>
              </CustomLink>
            </div>
          ))}

          <div
            className="smallLaptop:mt-[50px] mt-[50px] ml-6 flex gap-[101.5px] font-mulish"
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/auth/login");
            }}
          >
            <p className="text-[#B82323]">Log out</p>
            <Icon className="" name="vectorClose" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
