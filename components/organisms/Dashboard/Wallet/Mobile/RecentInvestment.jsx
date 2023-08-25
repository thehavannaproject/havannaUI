import { useState } from "react";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import TransactionHistory from "./TransactionHistory";

const RecentInvestment = () => {
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  return (
    <div className="font-mulish">
      <div>
        <h1 className="font-bold text-14 text-[#3B3F42]">Recent Investment</h1>
        <div className="hidden h-[200px] mt-3 flex justify-center items-center bg-[#F5F5F5] rounded-lg">
          <p className="text-[#6B7276] text-14 ">You don’t have any recent transations.</p>
        </div>
        <div className="mt-7">
          <div>
            <div className="flex justify-between">
              <div className="flex gap-3 justify-center items-center">
                <p className="w-3 h-3 rounded-full  bg-[#B82323]" />
                <div>
                  <p className="text-[#4F5457] text-14">Withdrawal Made</p>
                  <p className="text-[#8F8F8F] text-12 mt-1">Fri, 06 Jan 2023, 20:09:20 GMT</p>
                </div>
              </div>
              <p className="text-14 text-[#4F5457]">₦ -3,000</p>
            </div>
            {Array(4).fill(
              <div className="flex justify-between mt-6">
                <div className="flex gap-3 justify-center items-center">
                  <p className="w-3 h-3 rounded-full  bg-HavannaGreen-primary" />
                  <div>
                    <p className="text-[#4F5457] text-14">Withdrawal Made</p>
                    <p className="text-[#8F8F8F] text-12 mt-1">Fri, 06 Jan 2023, 20:09:20 GMT</p>
                  </div>
                </div>
                <p className="text-14 text-[#4F5457]">₦ -3,000</p>
              </div>
            )}
          </div>

          <div className="mt-8">
            <CustomButton
              customClass="text-14 font-bold w-full py-4 text-HavannaGreen-primary border-2 border-HavannaGreen-primary text-HavannaGreen-primary rounded-lg"
              onClick={() => setShowTransactionHistory(true)}
              title="View all transactions"
            />
          </div>
        </div>
      </div>
      <CustomModal cardClassName="h-screen" visibility={showTransactionHistory}>
        <MenuHeader onClose={() => setShowTransactionHistory(false)} title="Transaction History">
          <div className="bg-white h-screen">
            <TransactionHistory />
          </div>
        </MenuHeader>
      </CustomModal>
    </div>
  );
};

export default RecentInvestment;
