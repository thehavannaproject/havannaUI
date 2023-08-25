const AccountTier = ({ tierNo }) => {
  return (
    <div className="font-mulish mt-[52px] card-shadow rounded-xl px-4">
      <div className="py-8">
        <div className="flex flex-col justify-center items-center">
          <p className="w-10 h-10 rounded-full border-2 text-18 font-bold text-HavannaGreen-primary flex justify-center items-center border-HavannaGreen-primary">1</p>
          <p className="mt-3 px-8 py-1 text-14 text-white bg-HavannaGreen-primary rounded-[60px]">Your Tier</p>
        </div>
        <div className="mt-10 ">
          <div>
            <h4 className="text-14 text-[#3B3F42] font-bold">Available</h4>
            <div className="mt-3 text-[#4F5457]">
              <div className="flex justify-between">
                <p className="text-12 ">Tier {tierNo} deposit limit</p>
                <p className="text-14">₦ {tierNo == "1" ? "300,000.00" : "500,000.00"}</p>
              </div>
              <div className="flex mt-4 justify-between">
                <p className="text-12 ">Tier {tierNo} withdrawal limit</p>
                <p className="text-14">₦ {tierNo == "1" ? "100,000.00" : "200,000.00"}</p>
              </div>
            </div>
          </div>
          {tierNo == "1" && (
            <div className="mt-8">
              <h4 className="text-14 text-[#3B3F42] font-bold">Tier 1 Requirements</h4>
              <p className="text-12 text-[#4F5457] mt-3">No requirements</p>
            </div>
          )}
        </div>

        {tierNo == "2" && (
          <div className="mt-8">
            <h4 className="text-14 text-[#3B3F42] font-bold">Tier 2 Requirements</h4>
            <div className="mt-3">
              <h4 className="text-[#4F5457] text-14">Identity card</h4>
              <div className="mt-2 flex justify-between">
                <p className="w-1/2 text-12 text-[#8F8F8F]">International passport, Voters card, Drivers license, e.t.c</p>
                <p className="text-14 text-HavannaGreen-primary font-bold">Verify</p>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="text-[#4F5457] text-14">BVN</h4>
              <div className="mt-2 flex justify-between">
                <p className="text-12 text-[#8F8F8F]">Verification not completed</p>
                <p className="text-14 text-HavannaGreen-primary font-bold">Verify</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountTier;
