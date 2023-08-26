const CreditHistory = () => {
  return (
    <div className="font-mulish">
      {Array(7).fill(
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
  );
};

export default CreditHistory;
