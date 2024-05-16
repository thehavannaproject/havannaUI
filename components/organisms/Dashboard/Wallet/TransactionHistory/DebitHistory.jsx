import moment from "moment";
import { useState } from "react";
import CustomPagination from "@components/atoms/CustomPagination/CustomPagination";

const DebitHistory = ({ tranHistory }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 15;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let subset = tranHistory?.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
  return (
    <div className="font-mulish">
      {subset.map((transact, index) => (
        <div className="flex justify-between mt-6" key={index}>
          <div className="flex gap-3 justify-center items-center">
            <p className="w-3 h-3 rounded-full  bg-[#B82323]" />
            <div>
              <h1 className="font-medium text-14 text-HavannaBlack-primary">{transact.transactionType}</h1>
              <p className="font-normal text-12 mt-1 text-[#8F8F8F]">{moment(transact.transactionDate).format("ddd, D MMM yyyy")}</p>
            </div>
          </div>
          <div>
            <p className="text-14 text-[#4F5457">₦ - {transact.amount.toLocaleString()}</p>
          </div>
        </div>
      ))}
      {tranHistory?.length > 15 && (
        <div className="mt-[52px] mb-[60px]">
          <CustomPagination initialPage={currentPage} onChange={handlePageChange} pageCount={Math.ceil(tranHistory?.length / 15)} />
        </div>
      )}
    </div>
  );
};

export default DebitHistory;
