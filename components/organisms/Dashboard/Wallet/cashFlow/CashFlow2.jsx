import React, { useState } from "react";

import Icon from "@components/atoms/Icons";

import FundWallet from "../FundWallet";
import WithdrawFund from "./WithdrawFund";

const CashFlow2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  // const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutsideModal = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setIsModalOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutsideModal);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutsideModal);
  //   };
  // }, []);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleButtonOpen = () => {
    setWithdraw(true);
  };

  return (
    <section>
      <div className="bg-white py-10 px-11 pb-10 rounded-xl w-full font-mulish  shadow-xl  ">
        <h1 className="font-bold text-16 leading-[22px] mb-3  ">Fund Wallet</h1>
        <p className="font-medium text-16 leading-[22px]">Fund your wallet from your accumulated income.</p>
        <button className="mt-8 flex text-white rounded-lg w-full items-center justify-center m-auto gap-3 h-[52px] bg-HavannaGreen-primary " onClick={handleButtonClick}>
          <p>Fund wallet</p> <Icon name="walletWhite" />
        </button>
        <h1 className="font-bold text-16 leading-[22px] mb-3 mt-10  ">Withdraw Money</h1>
        <p className="font-medium text-16 leading-[22px]">Withdraw money from your accumulated income.</p>
        <button
          className="mt-8 flex text-HavannaGreen-primary border-2 mb-10 border-HavannaGreen-primary rounded-lg w-[100%] items-center justify-center m-auto gap-3 h-[52px] b-10  "
          onClick={handleButtonOpen}
        >
          <p>Withdraw money</p> <Icon name="cashFlowWallet" />
        </button>
      </div>
      <div>{withdraw && <WithdrawFund setWithdraw={setWithdraw} withdraw={withdraw} />}</div>
      <div>{isModalOpen && <FundWallet isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}</div>
    </section>
  );
};

export default CashFlow2;
