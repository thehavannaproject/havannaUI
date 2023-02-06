import Image from "next/image";

import Logo from "@images/logo/logo-dark.svg";

const SideBar = () => {
  return (
    <>
      <div className="w-[300px] h-screen border">
        <div className="border-b-2">
          <Image src={Logo} width={172} />
        </div>

        <div className="mt-[130px] ml-10">
          <p className="mt-10">Dashboard</p>
          <p className="mt-8">My Properties</p>
          <p className="mt-8">Wallet</p>
          <p className="mt-8">Account</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
