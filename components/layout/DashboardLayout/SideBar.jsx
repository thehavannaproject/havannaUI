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
      title: "My Properties",
      icon: "home",
      link: "/properties",
      isVisible: false,
      name: "properties",
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
    {
      id: 4,
      title: "KYC",
      icon: "Key",
      link: "/kyc/kyc",
      isVisible: true,
      name: "kyc",
    },
  ];

  return (
    <>
      <div className=" h-fill border-r-[1px]  ">
        <div className="border-b-[1px] py-4 pl-6">
          <Link href="/">
            <a>
              <Image src={Logo} width={172} />
            </a>
          </Link>
        </div>
        <div className=" mx-6 text-20">
          {SideBarData.map((data, index) => (
            <div className={`hover:bg-green-50    ${routerName.includes(data.name) ? "bg-green-50 border-l-4 border-l-[#0E5854] " : ""} `} key={index}>
              <CustomLink destination={data.link}>
                <div className={` px-6 cursor-pointer py-4 mt-6 h-[58px] flex text-HavannaGreen-primary justify-between `}>
                  <p>{data.title}</p>
                  <Icon name={data.icon} />
                </div>
              </CustomLink>
            </div>
          ))}

          <div
            className="smallLaptop:mt-[120px] mt-[460px] flex gap-[131.5px] font-mulish"
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
