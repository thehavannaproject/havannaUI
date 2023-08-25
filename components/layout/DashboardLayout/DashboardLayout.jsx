// import { useRouter } from "next/router";
import { useEffect } from "react";

// import axios from "axios";
// import { baseUrl } from "config";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "@components/store/Auth";
import { getUserDetails } from "@components/Api";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const DashboardLayout = ({ children }) => {
  // const router = useRouter();

  // useEffect(() => {
  //   const Token = localStorage.getItem("token");
  //   if (!Token) {
  //     router.push("/auth/login");
  //   }
  // }, []);

  useEffect(() => {
    getUserDetails(localStorage.getItem("userEmail")).then((data) => {
      console.log(data);
      sessionStorage.setItem("userDetails", JSON.stringify(data));
    });
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
            <div className=" bg-HavannaGreen-light ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
