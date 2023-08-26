import React, { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import { getAllTransactionHistory } from "@components/Api";
import Skeleton from "@components/atoms/Skeleton";

const TransactionHistory = () => {
  const [transHistory, setTransHistory] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    setUserDetails(userDetails);
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllTransactionHistory(userDetails.id).then((data) => {
      if (data) {
        setLoading(false);
        setTransHistory(data);
      }
    });
  }, []);

  return (
    <>
      <h1 className="font-bold text-20 leading-[26px] pl-6 mt-[60px] text-HavannaBlack-primary">Recent Transactions</h1>
      {loading ? (
        <Skeleton className="h-[200px] w-full" />
      ) : (
        <div>
          {transHistory.map((transact, index) => (
            <div className="flex justify-between font-mulish mt-8 px-6" key={index}>
              <div className="flex gap-4">
                <p className={`w-4 h-4 rounded-full mt-1 ${transact.transactionType === "Credit" ? "bg-HavannaGreen-secondary" : "bg-HavannaRed-primary"}`} />
                <div>
                  <h1 className="font-medium text-16 text-HavannaBlack-primary">{transact.transactionType}</h1>
                  <p className="font-normal text-12 mt-1 text-[#8F8F8F]">{moment(transact.transactionDate).format("ddd, D MMM yyyy")}</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-16">₦ {transact.amount.toLocaleString()}</p>
              </div>
            </div>
          ))}
          <div className="pb-10 text-center pt-14 font-mulish">
            <h1 className="font-bold text-16 leading-[22px] text-HavannaGreen-primary ">View all Transactions</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionHistory;
