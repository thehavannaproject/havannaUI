import React, { useEffect, useRef, useState } from "react";
import Icon from "@components/atoms/Icons";
import { getCustomerWallet } from "@components/Api";
import Skeleton from "@components/atoms/Skeleton";
import FundWallet from "./FundWallet";

const Wallet = () => {
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(true);
  const [wallet, setWallet] = useState([]);

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    setUserDetails(userDetails);
  }, []);

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutsideModal);

    return () => {
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    getCustomerWallet(userDetails.id).then((data) => {
      if (data) {
        setLoading(false);
        setWallet(data);
      }
    });
  }, []);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-HavannaGreen-light h-full w-full relative">
      <section className=" font-mulish">
        <hr className="" />
        <div className=" bg-white w-[900px] h-[551px] mx-[4%] shadow-xl rounded-xl mt-[52px] mb-[342px] text-center">
          <div className="">
            <div className="flex gap-[25.64px] justify-center pt-6">
              <h1 className="text-[#4F5457] font-bold text-24 leading-8 ">Wallet Balance</h1>
              <Icon name="eyeIconSolid" onClick={() => setHide(!hide)} />
            </div>
            {loading ? (
              <Skeleton className="w-[227px] h-9 m-auto" />
            ) : (
              <div>{hide && <h1 className=" mt-6 font-bold text-36 leading-[44px] text-[#4F5457]  ">₦ {wallet[0]?.availableBalance.toLocaleString()}</h1>}</div>
            )}

            <hr className="w-[25%]  border-HavannaGreen-secondary m-auto border" />
          </div>
          <p className="font-medium mt-[120px] text-20 leading-[26px] text-[#3B3F42]">You don’t have any recent transaction</p>
          <div className="flex justify-center items-center mt-10">
            <button
              className="text-16  items-center h-14 rounded-lg gap-3 flex justify-center w-[300px] font-bold leading-6 font-mulish text-white bg-HavannaGreen-primary"
              onClick={handleButtonClick}
            >
              <p>Fund wallet</p>
              <Icon name="walletWhite" />
            </button>
          </div>
        </div>
        <div>{isModalOpen && <FundWallet isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}</div>
      </section>
    </div>
  );
};

export default Wallet;
