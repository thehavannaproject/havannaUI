import { useState } from "react";
import AllTransactionHistory from "./AllTransactionHistory";
import CreditHistory from "./CreditHistory";
import DebitHistory from "./DebitHistory";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const transactionHistory = [
    { id: 0, title: "All", component: <AllTransactionHistory /> },
    { id: 1, title: "Credit", component: <CreditHistory /> },
    { id: 2, title: "Debit", component: <DebitHistory /> },
  ];
  return (
    <>
      <div className="font-mulish px-6">
        <div className="flex text-[#8F8F8F] justify-center gap-20 pt-6 border-b">
          {transactionHistory.map((item, index) => (
            <p
            className={` ${
              item.id === activeTab ? "border-b-HavannaGreen-secondary text-HavannaGreen-secondary border-b-4 " : ""
            }  pb-2  border-b-HavannaGreen-secondary cursor-pointer text-HavannaGreen-secondary px-4 py-1`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </p>
          ))}
        </div>
        <div className="mt-7 bg-white w-[752px] px-6 py-14">{transactionHistory[activeTab].component}</div>
      </div>
    </>
  );
};

export default TransactionHistory;
