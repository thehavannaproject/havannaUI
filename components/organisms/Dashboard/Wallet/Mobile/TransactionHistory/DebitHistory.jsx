import moment from "moment";

const DebitHistory = ({tranHistory}) => {
  return (
    <div className="font-mulish">
{tranHistory?.transactionDtos?.filter((item) => item.type === "Deposit").map((transact,index) => (
        <div className="flex justify-between mt-6" key={index}>
          <div className="flex gap-3 justify-center items-center">
            <p className="w-3 h-3 rounded-full  bg-[#B82323]" />
            <div>
              <p className="text-[#4F5457] text-14">Withdrawal Made</p>
              <p className="text-[#8F8F8F] text-12 mt-1">{moment(transact.transactionDate).format("ddd, D MMM yyyy")}</p>
            </div>
          </div>
          <p className="text-14 text-[#4F5457]">₦ -{transact.amount.toLocaleString()}</p>
        </div>

      ))}
    </div>
  );
};

export default DebitHistory;
