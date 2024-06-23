import React, { useEffect } from "react";
import { useRouter } from "next/router";

import ResetConfirmation from "@components/organisms/AuthenticationPages/ResetPassword/ResetConfirmation";

const index = () => {
  const router = useRouter();
  const {token} = router.query;
  useEffect(() => {
    if(!token) {
      router.push("/")
    } 
   }, [])
  return (
    <div>
      <ResetConfirmation />
    </div>
  );
};

export default index;
