import React, { useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import CustomModal from "./CustomModal/CustomModal";

const TransactionSuccessfulModal = ({ route }) => {
  const [showModal, setShowModal] = useState(true)
  return (
    <div>
      <CustomModal cardClassName="" toggleVisibility={() => setShowModal(true)} visibility={showModal}>
        <div className="bg-white w-[600px] h-[250px] tablet:w-[700px]  tablet:h-[400px] rounded-lg ">

            <div className="text-HavannaBlack-neutral20 flex justify-end px-4 pt-4 cursor-pointer">
              <Link href={route}>
                <XMarkIcon onClick={() => setShowModal(false) } width={24} />
              </Link>
            </div>
        <div className=" text-black px-6 h-full  flex justify-center items-center font-mulish  ">
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <p className="text-24 text-HavannaBlack-neutral20 font-bold">Transaction successful</p>
              <div className="flex justify-center items-center mt-6">
                <CheckCircleIcon className="text-HavannaGreen-secondary" width={60} />
              </div>
            </div>

          </div>
        </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default TransactionSuccessfulModal;
