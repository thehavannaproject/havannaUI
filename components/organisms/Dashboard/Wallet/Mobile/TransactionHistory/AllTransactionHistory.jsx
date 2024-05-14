import moment from "moment";
import { useState } from "react";
import CustomPagination from "@components/atoms/CustomPagination/CustomPagination";

const AllTransactionHistory = ({ tranHistory }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 15;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let subset = tranHistory?.transactionDtos?.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="font-mulish">
      {subset.map((transact, index) => (
        <>
          <div className="flex justify-between mt-6" key={index}>
            <div className="flex gap-3 justify-center items-center">
              <p className={`w-3 h-3 rounded-full  bg-HavannaGreen-primary  ${transact.type === "Deposit" ? "bg-HavannaGreen-secondary" : "bg-HavannaRed-primary"}`} />
              <div>
                <p className="text-[#4F5457] text-14">{transact?.type} Made</p>
                <p className="text-[#8F8F8F] text-12 mt-1">{moment(transact.transactionDate).format("ddd, D MMM yyyy")}</p>
              </div>
            </div>
            <p className="text-14 text-[#4F5457]">{transact.type === "Withdrawal" ? `₦ -${transact.amount.toLocaleString()}` : `₦ ${transact.amount.toLocaleString()}`}</p>
          </div>
        </>
      ))}
      <div>
        {subset?.length >= 10 && (
          <div className="mt-[52px] mb-[60px]">
            <CustomPagination initialPage={currentPage} onChange={handlePageChange} pageCount={Math.ceil(tranHistory?.transactionDtos?.length / 10)} />
          </div>
        )}

      </div>
    </div>
  );
};

export default AllTransactionHistory;
