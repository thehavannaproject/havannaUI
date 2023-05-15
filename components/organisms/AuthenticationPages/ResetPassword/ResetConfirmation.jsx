import Image from "next/image";
import Link from "next/link";

import Icon from "@components/atoms/Icons";

import CustomLink from "@atoms/CustomLink/CustomLink";

import Logo from "@images/svg/Logo.svg";

import "react-toastify/dist/ReactToastify.css";

const ResetConfirmation = () => {
  return (
    <section
      className={` smallLaptop:pt-28 min-h-screen  pt-[31px] smallLaptop:pb-32 tablet:px-0
       font-mulish
     smallLaptop:bg-HavannaGreen-primary bg-HavannaGreen-light`}
    >
      <div className=" ">
        <div className="pl-[30px] smallLaptop:hidden">
          <CustomLink destination="/auth/login">
            {" "}
            <Icon name="vectorStroke" />{" "}
          </CustomLink>
        </div>
        <div className="smallLaptop:flex hidden justify-center">
          <Link href="/">
            <a>
              <span className="sr-only">Havanna</span>
              <Image alt="Havanna" className="h-7 md:w-auto tablet:h-8 lg:h-9 ml-30  " src={Logo} />
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div
            className=" smallLaptop:bg-white text-center tablet:mt-[154px] py-[202px] mt-8 
            rounded-[20px] tablet:rounded-[32px] h-[600px]
             w-full tablet:w-[800px] bigLaptop:px-[186px] px-6 smallLaptop:px-[176px] tablet:px-[10%]"
          >
            <h1>You’ve reset your password</h1>
            <p className="pt-3  ">Well done. Now you can continue with Havanna.</p>
            <CustomLink destination="/auth/login">
              <button className="bg-HavannaGreen-primary mt-[60px] text-white  w-full h-[60px] rounded-lg  ">Okay</button>
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetConfirmation;
