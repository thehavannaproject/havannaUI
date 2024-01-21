import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { BuildingOffice2Icon, CreditCardIcon, RectangleStackIcon, Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/solid";
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
      icon: <Squares2X2Icon className={`${routerName.includes("dashboard") ? "#0E5854" : "#6B7276"}`} />,
      name: "dashboard",
    },
    {
      id: 2,
      title: "Portfolio",
      icon: <RectangleStackIcon className={`${routerName.includes("portfolio") ? "#0E5854" : "#6B7276"}`} />,
      link: "/portfolio",
      name: "portfolio",
    },
    {
      id: 4,
      title: "Listing",
      icon: <BuildingOffice2Icon className={`${routerName.includes("listing") ? "#0E5854" : "#6B7276"}`} />,
      link: "/listing",
      name: "listing",
    },
    {
      id: 3,
      title: "Wallet",
      icon: <CreditCardIcon className={`${routerName.includes("wallet") ? "#0E5854" : "#6B7276"}`} />,
      link: "/wallet",
      name: "wallet",
    },

    {
      id: 4,
      title: "Account",
      icon: <UserCircleIcon className={`${routerName.includes("account") ? "#0E5854" : "#6B7276"}`} />,
      link: "/account",
      name: "account",
    },
  ];

  return (
    <>
      <div className="fixed w-[19%] border bg-white h-screen font-mulish">
        <div className="border-b-[1px] py-4 pl-3 smallLaptop:pl-6">
          <Link href="/">
            <a>
              <Image height={38} src={Logo} width={128.29} />
            </a>
          </Link>
        </div>
        <div className="mx-2 smallLaptop:mx-6 smallLaptop:text-20">
          {SideBarData.map((data, index) => (
            <div
              className={`hover:bg-HavannaGreen-light ${
                routerName.includes(data.name) ? "bg-HavannaGreen-light border-l-4 border-l-HavannaGreen-600 text-HavannaGreen-600 " : "text-HavannaBlack-neutral50"
              } `}
              key={index}
            >
              <CustomLink destination={data.link}>
                <div className={`px-3 smallLaptop:px-6 text-20 cursor-pointer font-mulish py-4 mt-6 h-[58px] flex  font-medium justify-between `}>
                  <p>{data.title}</p>
                  {data.icon}
                </div>
              </CustomLink>
            </div>
          ))}

          <div
            className="mt-[50px] ml-6 flex justify-between cursor-pointer font-mulish"
            onClick={() => {
              localStorage.clear();
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
