import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";

import CustomLink from "@components/atoms/CustomLink/CustomLink";

import Icon from "@atoms/Icons";

import Logo from "@images/logo/logo-dark.svg";

const SideBar = () => {
  // const router = useRouter();
  // const routerName=router.pathname

  const SideBarData = [
    {
      id: 1,
      title: "Dashboard",
      link: "/dashboard",
      icon: "dashboard",
      //

      //   isVisible: !merchantData?.merchantGetStores?.data[0]?.isApproved || storeStat?.storeStats?.data?.products?.total === 0,
    },
    {
      id: 2,
      title: "My Properties",
      icon: "home",
      link: "/dashboard/propertiesDashboard",
      isVisible: false,
    },
    {
      id: 3,
      title: "Wallet",
      icon: "wallet",
      link: "/",
      isVisible: true,
    },

    {
      id: 4,
      title: "Account",
      icon: "Union",
      link: "/account/kyc",
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
              <CustomLink destination={data.link}>
                <div className={` px-6 cursor-pointer py-4 mt-10 flex text-HavannaGreen-primary justify-between ${data.link ? " " : ""}`}>
                  <p>{data.title}</p>
                  <Icon name={data.icon} />
                </div>
              </CustomLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
