import Image from "next/image";
import Link from "next/link";

import Icon from "@components/atoms/Icons";

import Logo from "@images/svg/Logo.svg";

const VerificationEmail = () => {
  return (
    <section
      className={`  min-h-screen justify-center flex smallLaptop:pb-32 tablet:px-0 px-6
       font-mulish
     smallLaptop:bg-HavannaGreen-primary bg-HavannaGreen-light`}
    >
      <div className="  ">
        <div className=" hidden smallLaptop:block justify-between mx-auto ">
          <Link href="/">
            <a>
              <span className="sr-only">Havanna</span>
              <Image alt="Havanna" className="h-7 smallLaptop::w-auto tablet:h-8 bigLaptop::h-9 " src={Logo} />
            </a>
          </Link>
          <div
            className="flex justify-center smallLaptop:bg-white tablet:mt-[154px]
            smallLaptop:rounded-[32px] smallLaptop:h-[450px] bigLaptop:h-[600px]
              tablet:w-[750px] bigLaptop:px-[120px]  tablet:px-[10%] items-center"
          >
            <div className="font-mulish text-center items-center   ">
              <h1 className="font-bold text-[32px] mb-3 leading-10 ">Verify your email</h1>
              <p className="font-medium text-base mb-7 pt-3 leading-6 text-center ">A verification email has been sent to your email address, (abimbolawilliams@gmail.com). </p>
              <Icon className="items-center flex justify-center   " name="envelope" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationEmail;
