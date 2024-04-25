import React, { useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import CustomModal from "./CustomModal/CustomModal";

const TransactionSuccessfulModal = ({ route }) => {
  const [showModal, setShowModal] = useState(true)
  return (
    <div>
      <CustomModal toggleVisibility={setShowModal} visibility={showModal}>
        <div className="bg-white rounded-xl w-[480px] h-[240px]  font-mulish">
          <div className="text-HavannaBlack-neutral20 flex justify-end p-4 cursor-pointer">
            <Link href={route}>
              <XMarkIcon onClick={() => setShowModal(false) } width={24} />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <p className="text-24 text-HavannaBlack-neutral20 font-bold">Transaction successful</p>
            <div className="flex justify-center items-center mt-6">
              <CheckCircleIcon className="text-HavannaGreen-secondary" width={60} />
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default TransactionSuccessfulModal;
