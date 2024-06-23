import { useEffect } from "react";
import { useRouter } from "next/router";

import ResetPassword from "@components/organisms/AuthenticationPages/ResetPassword/ResetPassword";

const resetPassword = () => {
  const router = useRouter();
  const {token} = router.query;
  useEffect(() => {
    if(!token) {
      router.push("/")
    } 
   }, [])
  return <ResetPassword />;
};

export default resetPassword;
