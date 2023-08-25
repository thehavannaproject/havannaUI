const TransactionDetails = () => {
  return (
    <div className="font-mulish mt-7">
      <div>
        <p className="text-center text-12 text-[#8F8F8F]">Amount</p>
        <p className="text-center text-[18px] font-bold text-[#3B3F42] mt-2">₦ 60, 000</p>
        <div className="mt-10 text-[#ADADAD] text-14">
          <div className="flex justify-between py-4 border-b">
            <p>Property </p>
            <p className="font-bold text-[#3B3F42]">Edala Homes</p>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p>Slots bought</p>
            <p className="font-bold text-[#3B3F42]">4</p>
          </div>
          <div className="flex justify-between align-middle py-4 border-b">
            <p className="flex items-center">Date </p>
            <div>
              <p className="font-bold text-[#3B3F42] text-right">
                Fri, 06 Jan 2023 <br /> 20:09:20 PM
              </p>
            </div>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p>Transaction ID</p>
            <p className="font-bold text-[#3B3F42]">BD89PO9023KO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
