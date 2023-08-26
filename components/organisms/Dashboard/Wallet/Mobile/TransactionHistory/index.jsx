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
        <div className="flex text-[#8F8F8F] justify-between pt-6">
          {transactionHistory.map((item, index) => (
            <p
              className={`w-full text-center py-[6px] text-12 ${activeTab === index ? "bg-HavannaGreen-secondary text-white" : "border border-[#8F8F8F]"}`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              {item.title}
            </p>
          ))}
        </div>
        <div className="mt-7">{transactionHistory[activeTab].component}</div>
      </div>
    </>
  );
};

export default TransactionHistory;
