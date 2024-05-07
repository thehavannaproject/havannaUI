import { useState } from "react";
import moment from "moment";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import EmptyState from "@components/atoms/EmptyState/EmptyState";
import TransactionHistory from "./TransactionHistory";

const RecentInvestment = ({tranHistory}) => {
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);

  return (
    <div className="font-mulish">
      <div>
        <h1 className="font-bold text-14 text-[#3B3F42]">Recent Investment</h1>
        <div className="hidden h-[200px] mt-3 flex justify-center items-center bg-[#F5F5F5] rounded-lg">
          <p className="text-[#6B7276] text-14 ">You don’t have any recent transations.</p>
        </div>
        <div className="mt-7">
          {tranHistory?.transactionDtos?.length > 0 ? (
          <div>
            {tranHistory?.transactionDtos?.slice(0, 5).map((transact,index) => (
              <div className="flex justify-between mt-6" key={index}>
                <div className="flex gap-3 justify-center items-center">
                  <p className={`w-3 h-3 rounded-full  bg-HavannaGreen-primary  ${transact.type === "Deposit" ? "bg-HavannaGreen-secondary" : "bg-HavannaRed-primary"}`} />
                  <div>
                    <p className="text-[#4F5457] text-14">Withdrawal Made</p>
                    <p className="text-[#8F8F8F] text-12 mt-1">{moment(transact.transactionDate).format("ddd, D MMM yyyy")}</p>
                  </div>
                </div>
                <p className="text-14 text-[#4F5457]">₦ {transact.amount.toLocaleString()}</p>
              </div>
            ))}
          </div>

          ) : (
            <EmptyState description="No Transactions done yet"/>
          )}

          {tranHistory?.transactionDtos?.length > 5 && (
            <div className="mt-8">
              <CustomButton
                customClass="text-14 font-bold w-full py-4 text-HavannaGreen-primary border-2 border-HavannaGreen-primary text-HavannaGreen-primary rounded-lg"
                onClick={() => setShowTransactionHistory(true)}
                title="View all transactions"
              />
            </div>
          )}
        </div>
      </div>
      <CustomModal cardClassName="h-screen w-full" visibility={showTransactionHistory}>
        <MenuHeader onClose={() => setShowTransactionHistory(false)} title="Transaction History">
          <div className="bg-white h-screen">
            <TransactionHistory tranHistory={tranHistory} />
          </div>
        </MenuHeader>
      </CustomModal>
    </div>
  );
};

export default RecentInvestment;
