import { useRouter } from "next/router";
import { useEffect } from "react";

// import axios from "axios";
// import { baseUrl } from "config";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "@components/store/Auth";
import { getUserDetails } from "@components/Api";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const Token = localStorage.getItem("token");
    if (!Token) {
      router.push("/auth/login");
    }
  }, []);

  useEffect(() => {
    getUserDetails(localStorage.getItem("userEmail")).then((data) =>{ console.log(data); sessionStorage.setItem("userDetails", JSON.stringify(data))})
  }, []);

  


  return (
    <div className="flex ">
      <div className=" smallLaptop:min-w-[21%] ">
        <SideBar />
      </div>
      <div className="smallLaptop:min-w-[79%] ">
        <div className="fixed smallLaptop:min-w-[79%]  bg-HavannaGreen-light">
          <NavBar />
        </div>
        <div className="bg-HavannaGreen-light h-full mt-20">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
