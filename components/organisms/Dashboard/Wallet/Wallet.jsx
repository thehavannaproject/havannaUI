import React, { useEffect, useRef, useState } from "react";
import { BanknotesIcon, ChevronLeftIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import Icon from "@components/atoms/Icons";
import { getAllTransactionHistory, getCustomerWallet } from "@components/shared/api";
import Skeleton from "@components/atoms/Skeleton";
import { AuthService } from "@components/shared/api/auth";
import { setTransactionHistory } from "@components/store/Wallet";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import TransactionProcessingModal from "@components/atoms/TransactionProcessingModal";
import FundWallet from "./FundWallet";
import MiniTransactionHistory from "./TransactionHistory/MiniTransactionHistory";
import Withdrawal from "./Mobile/Withdrawal/Withdrawal";

const Wallet = ({ type }) => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(true);
  const [wallet, setWallet] = useState([]);
  const [tranHistory, setTranHistory] = useState([]);
  const dispatch = useDispatch();

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

  const getTransactionHistory = () => {
    getAllTransactionHistory(userDetails?.customerId).then((data) => {
      setTranHistory(data.result.data);
      dispatch(setTransactionHistory(data.result.data));
    });
  };

  const getCustomerWallets = () => {
    setLoading(true);
    getCustomerWallet(userDetails?.customerId).then((data) => {
      if (data) {
        setLoading(false);
        setWallet(data);
      }
    });
  };

  useEffect(() => {
    getCustomerWallets();
    getTransactionHistory();
  }, []);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-HavannaGreen-light relative">
      <section className=" font-mulish">
        <hr className="" />
        <div className="grid grid-cols-2 lg:flex">
          <div className=" bg-white lg:w-[900px] h-[580px] mx-[4%] shadow-xl rounded-xl mt-[52px] mb-[342px] text-center">
            <div className="">
              <div className="flex gap-[25.64px] justify-center pt-6">
                <h1 className="text-[#4F5457] font-bold text-24 leading-8 ">{type === "returns" ? "Returns" : "Wallet Balance"}</h1>
                <div>
                  {hide ? (
                    <EyeIcon className="cursor-pointer text-HavannaGreen-secondary" onClick={() => setHide(false)} width={32} />
                  ) : (
                    <EyeSlashIcon className="cursor-pointer text-HavannaGreen-secondary" onClick={() => setHide(true)} width={32} />
                  )}
                </div>
                {/* <Icon className="cursor-pointer" name="eyeIconSolid" onClick={() => setHide(!hide)} /> */}
              </div>
              {loading ? (
                <Skeleton className="w-[227px] h-9 m-auto animate-pulse" />
              ) : (
                <div>
                  {hide ? (
                    <h1 className=" mt-6 font-bold text-36 leading-[44px] text-[#4F5457]  ">₦ {parseFloat(wallet?.availableBalance)?.toLocaleString()}</h1>
                  ) : (
                    <p className=" mt-6 font-bold text-36 leading-[44px] text-[#4F5457]  ">******</p>
                  )}
                </div>
              )}

              <hr className="w-[25%]  border-HavannaGreen-secondary m-auto border" />
            </div>

            {tranHistory?.transactionDtos?.length === 0 ? (
              <div>
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
            ) : (
              <MiniTransactionHistory transHistory={tranHistory?.transactionDtos} />
            )}
          </div>
          <div className="py-10 px-11 bg-white mt-[52px] shadow-xl rounded-xl h-fit mr-11 font-mulish">
            <div>
              <h1 className="text-HavannaBlack-neutral20 font-bold text-16">Fund Wallet</h1>
              <p className="mt-3 text-HavannaBlack-neutral50 font-medium">
                {type == "returns" ? "Fund your wallet from your accumulated income." : "Fund your wallet and invest."}
              </p>
              <div className="flex justify-center items-center mt-8">
                <button
                  className="text-16  items-center h-[52px] rounded-lg gap-3 flex justify-center w-[300px] font-bold leading-6 font-mulish text-white bg-HavannaGreen-primary"
                  onClick={handleButtonClick}
                >
                  <p>Fund wallet</p>
                  <Icon name="walletWhite" />
                </button>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-HavannaBlack-neutral20 font-bold text-16">Withdraw money</h1>
              <p className="mt-3 text-HavannaBlack-neutral50 font-medium">
                {type == "returns" ? "Withdraw money from your accumulated income." : "Withdraw money from your wallet."}
              </p>
              <div className="flex justify-center items-center mt-8">
                <button
                  className="text-16  items-center h-[52px] rounded-lg gap-3 flex justify-center w-[300px] font-bold leading-6 font-mulish text-HavannaGreen-primary border-[3px] border-HavannaGreen-primary"
                  onClick={() => setWithdrawModal(true)}
                >
                  <p>Withdraw money</p>
                  <BanknotesIcon width={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && <FundWallet isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setShowSuccessModal={setShowSuccessModal} />}

        <CustomModal cardClassName="w-screen" toggleVisibility={setShowSuccessModal} visibility={showSuccessModal}>
          <div className=" bg-white py-10 px-11 h-screen w-full flex justify-center items-center font-mulish rounded-xl shadow-md">
          <TransactionProcessingModal setShowSuccessModal={setShowSuccessModal} />
          </div>
        </CustomModal>

        
        <CustomModal cardClassName=" w-[532px]" toggleVisibility={setWithdrawModal} visibility={withdrawModal}>
          <div className=" bg-white py-10 px-11 font-mulish rounded-xl shadow-md">
            <div className="flex text-HavannaBlack-neutral20">
              <ChevronLeftIcon className="cursor-pointer" onClick={() => setWithdrawModal(false)} width={32} />
              <p className=" text-20 font-bold">Withdraw Money </p>
            </div>
            <Withdrawal />
          </div>
        </CustomModal>
      </section>
    </div>
  );
};

export default Wallet;
