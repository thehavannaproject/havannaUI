import { useRouter } from "next/router";
import { useEffect } from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const Token = localStorage.getItem("token");
    if (!Token) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <div className="flex ">
      <div className="smallLaptop:w-[23%]">
        <SideBar />
      </div>
      <div className="w-[77%] ">
        <div className="fixed w-[77%] bg-HavannaGreen-light">
          <NavBar />
        </div>
        <div className="bg-HavannaGreen-light mt-20 h-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
