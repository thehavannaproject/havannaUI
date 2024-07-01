import React from "react";
// import { useRouter } from "next/router";

import VerificationSuccess from "@components/organisms/AuthenticationPages/VerificationEmail/VerificationSuccess";

const VerifyEmail = () => {
  // const router = useRouter();
  // const {token} = router.query;

  // useEffect(() => {
  //   if(!token) {
  //     router.push("/")
  //   } 
  //  }, [])
  return <VerificationSuccess />;
};

export default VerifyEmail;
