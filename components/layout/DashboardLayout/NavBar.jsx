import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@atoms/Icons";

const NavBar = () => {
  const [display, setDisplay] = useState();
  const [userDetails, setUserDetails] = useState({});

  const router = useRouter();

    useEffect(() => {
      const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
      setUserDetails(userDetails);
    }, []);

  const date = new Date();
  const year = date.toLocaleString("default", { dateStyle: "full" });


  return (
    <>
      <div className="flex smallLaptop:h-[80px] justify-between relative bg-white !z-[999] pl-6 pr-[36px] py-5 shadow-md  border-b-[1px]">
        <p className="flex justify-center text-16 items-center text-HavannaGreen-300">{year} </p>
        <div className="flex">
          <Icon className="mr-[45px] pt-3" name="bell" />
          <div
            className="flex cursor-pointer "
            onClick={() => {
              setDisplay(!display);
            }}
          >
            <Icon name="user" />
            <p className="pt-3 ml-2">{userDetails.firstName + " " + userDetails.lastName}</p>
            <Icon className="mt-5 ml-3 " name="angleDown" />
          </div>
        </div>
      </div>
      <div className="flex justify-end left-[820px] absolute z-10 ">
        {display ? (
          <div className="bg-white h-[114px] w-[144px] py-[18px] text-center pl-[30px] shadow-2xl rounded-lg  ">
            <CustomLink destination="/account/">
              <div className="flex gap-3  m-auto  ">
                <Icon className="w-[15.26px] h-[15.26px] " name="settingsProfile" />
                <h1 className="font-medium text-18 leading-6 font-mulish">Profile</h1>
              </div>
            </CustomLink>
            <div
              className="flex gap-3 mt-5 cursor-pointer "
              onClick={() => {
                localStorage.removeItem("token");
                router.push("/auth/login");
              }}
            >
              <Icon name="logOutProfile" />
              <h1 className="font-medium text-18 leading-6 font-mulish">Log Out</h1>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavBar;
