import moment from "moment";

const CreditHistory = ({tranHistory}) => {
  return (
    <div className="font-mulish">
      {tranHistory?.transactionDtos?.filter((item) => item.type === "Deposit").map((transact,index) => (
        <div className="flex justify-between mt-6" key={index}>
          <div className="flex gap-3 justify-center items-center">
            <p className="w-3 h-3 rounded-full  bg-HavannaGreen-primary" />
            <div>
              <h1 className="font-medium text-14 text-HavannaBlack-primary">{transact.transactionType}</h1>
              <p className="font-normal text-12 mt-1 text-[#8F8F8F]">{moment(transact.transactionDate).format("ddd, D MMM yyyy")}</p>
            </div>
          </div>
          <div>
            <p className="text-14 text-[#4F5457">₦ {transact.amount.toLocaleString()}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default CreditHistory;
