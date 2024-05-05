import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { UserIcon } from "@heroicons/react/24/solid";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import { AuthService } from "@components/api/auth";
import useClickOutside from "@components/shared/hooks";
import Icon from "@atoms/Icons";

const NavBar = () => {
  const [display, setDisplay] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const authService = new AuthService();

  const router = useRouter();

  const node = useClickOutside(() => {
    setDisplay(false);
  });

  useEffect(() => {
    const userDetails = authService.getDetails("ud");
    setUserDetails(userDetails);
  }, []);

  const date = new Date();
  const year = date.toLocaleString("default", { dateStyle: "full" });

  return (
    <>
      <div className="flex h-[80px] justify-between relative bg-white pl-6 pr-[36px] py-5 border font-mulish">
        <p className="flex justify-center text-16 items-center text-HavannaBlack-neutral50 font-bold ">{year} </p>
        <div className="flex justify-center items-center">
          <Icon className="mr-10" name="bell" />
          <div
            className="flex cursor-pointer "
            onClick={() => {
              setDisplay(!display);
            }}
          >
            <div className="p-3 rounded-full  bg-HavannaGreen-light">
              <UserIcon className="text-HavannaBlack-neutral50" width={24} />
            </div>
            <div className="flex justify-center items-center">
              <p className=" ml-4 text-HavannaBlack-neutral50 text-[22px]">{userDetails?.customerName}</p>
              <FaCaretDown className="text-HavannaBlack-neutral20 mt-1  ml-2" size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute right-5 top-14" ref={node}>
        {display && (
          <div className="bg-white h-[114px] w-[144px] py-[18px] text-center pl-[30px] shadow-2xl rounded-lg  ">
            <CustomLink destination="/account/">
              <div className="flex gap-3  m-auto">
                <Icon className="w-[15.26px] h-[15.26px] " name="settingsProfile" />
                <h1 className="font-medium text-18 leading-6 font-mulish">Profile</h1>
              </div>
            </CustomLink>
            <div
              className="flex gap-3 mt-5 cursor-pointer "
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userDetails");
                localStorage.removeItem("reference");
                localStorage.removeItem("userEmail");
                router.push("/auth/login");
              }}
            >
              <Icon name="logOutProfile" />
              <h1 className="font-medium text-18 leading-6 font-mulish">Log Out</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
