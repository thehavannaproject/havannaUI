import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import { verifyEmail } from "@components/shared/api";


const VerificationSuccess = () => {
  const router = useRouter();
 const {email, token} = router.query;
 const [error, setError] = useState(false)

 const handleEmailVerification = () => {
  const data = {
    email: email,
    token: token,
  }
   verifyEmail(data)
   .then((res) => {
    if(res.status == 200) {
      console.log(res)
       toast.success("Email verified successfully");
    } else {
      setError(true)
    }
   })
  
 }

 useEffect(() => {
  if(!email && token) {
    router.push("/")
  } else {
    handleEmailVerification();
  }
 }, [])

  return (
    <section
      className={`h-screen justify-center flex items-center smallLaptop:pb-32 tablet:px-0 px-6
       font-mulish
     smallLaptop:bg-HavannaGreen-primary bg-HavannaGreen-light`}
    >
      <div className=" flex justify-center items-center ">
        <div className="  text-HavannaBlack-neutral20 justify-between text-center mt-20 mx-auto ">
          <div
            className="flex justify-center smallLaptop:bg-white tablet:mt-[154px]
            smallLaptop:rounded-[32px] smallLaptop:h-[450px] bigLaptop:h-[600px]
              tablet:w-[750px] bigLaptop:px-[120px]  tablet:px-[10%] items-center"
          >
            <div className="font-mulish text-center items-center">
              <h1 className="font-bold text-24 smallLaptop:text-[32px] mb-3 leading-10 ">Verification {error ? "Failed" : "Successful"}</h1>
              <p className="font-medium text-base mb-7 pt-3 leading-6 text-center ">{error ? "Your email verification failed" : "Your email has been verified successfully"}</p>
              {/* <Icon className="items-center flex justify-center" name="envelope" /> */}
              <div className="mt-10 ">
                <CustomLink customClass=" text-4 h-[46px] !text-white bg-[#0B4340] flex justify-center items-center  tablet:text-16 font-bold !w-full rounded-md"  destination="/auth/login">Continue to Login</CustomLink>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSuccess;
