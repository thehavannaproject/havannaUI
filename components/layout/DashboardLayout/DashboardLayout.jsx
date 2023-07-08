import { useRouter } from "next/router";
import { useEffect } from "react";

import axios from "axios";
import { baseUrl } from "config";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@components/store/Auth";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();


  useEffect(() => {
    const Token = localStorage.getItem("token");
    if (!Token) {
      router.push("/auth/login");
    }
  }, []);

  
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    axios({
      method: "GET",
      url: `${baseUrl}/account/customer/details/${userEmail}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        dispatch(setCurrentUser(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
