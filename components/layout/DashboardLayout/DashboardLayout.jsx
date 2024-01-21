// import { useRouter } from "next/router";
import { useEffect } from "react";

// import axios from "axios";
// import { baseUrl } from "config";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "@components/store/Auth";
import { useRouter } from "next/router";
// import { getUserDetails } from "@components/api";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const Token = localStorage.getItem("ud");
    if (!Token) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <>
      <div className="hidden tablet:block">
        <div className="flex">
          <div className="w-[19%] ">
            <SideBar />
          </div>
          <div className="w-[81%]">
            <div className="sticky  top-0 z-50 w-full ">
              <NavBar />
            </div>
            <div className=" bg-HavannaGreen-light">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
