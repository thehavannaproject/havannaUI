import Image from "next/image";
import { Squares2X2Icon, CreditCardIcon, BuildingOffice2Icon, RectangleStackIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Logo from "@images/logo/logo-white.svg";

const MobileNavItems = ({ onClose }) => {
  const router = useRouter();
  const routeName = router.pathname;
  return (
    <div className="flex font-mulish fixed left-0 top-0 h-screen w-screen overflow-y-scroll transition-all duration-500 z-[999]">
      <div className={` w-[65%] text-white  px-6 bg-HavannaGreen-600 `}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="h-[140px] flex">
              <Image alt="Havanna" height={30} src={Logo} width={140} />
            </div>
            <div className="mt-[60px]">
              {NavItems.map((item, index) => (
                <div
                  className={`flex gap-3 p-4 mb-6 ${routeName.includes(item.name) ? "text-HavannaGreen-600 bg-white rounded-[40px]" : "text-white"}`}
                  key={index}
                  onClick={() => router.push(item.route)}
                >
                  {item.icon}
                  <p className="text-14 font-bold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="mb-[80px] py-4 flex gap-3"
            onClick={() => {
              localStorage.clear();
              router.push("/auth/login");
            }}
          >
            <ArrowRightOnRectangleIcon width={20} />
            <p>Logout</p>
          </div>
        </div>
      </div>
      <div className=" w-[35%] bg-black bg-opacity-40 transition-all duration-500" onClick={onClose} />
    </div>
  );
};

export default MobileNavItems;

const NavItems = [
  {
    id: 0,
    title: "Dashboard",
    name: "dashboard",
    icon: <Squares2X2Icon width={20} />,
    route: "/dashboard",
  },
  {
    id: 1,
    title: "Portfolio",
    icon: <RectangleStackIcon width={20} />,
    route: "/portfolio",
    name: "portfolio",
  },
  {
    id: 2,
    title: "Listings",
    icon: <BuildingOffice2Icon width={20} />,
    route: "/listing",
    name: "listing",
  },
  {
    id: 3,
    title: "Wallet",
    icon: <CreditCardIcon width={20} />,
    route: "/wallet",
    name: "wallet",
  },
  {
    id: 4,
    title: "Account",
    icon: <UserCircleIcon width={20} />,
    route: "/account",
    name: "account",
  },
];
