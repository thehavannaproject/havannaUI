import { HomeOutlined } from "@ant-design/icons";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

const RecentInvestment = () => {
  return (
    <div className="mt-8 font-mulish">
      <div>
        <p className="text-14 font-bold text-[#3B3F42]">Recent Investment</p>
        <div className="bg-[#F5F5F5] hidden flex justify-center flex-col items-center py-[37px] mt-3 rounded-lg">
          <p className="text-14 text-[#6B7276]">You haven’t invested in any property yet.</p>
          <CustomLink customClass="bg-HavannaGreen-primary rounded-md text-14 font-bold w-fit mt-4 !text-white py-3 px-8" destination="#">
            Invest Now
          </CustomLink>
        </div>
      </div>
      <div className="border-[1.5px] border-[#6FC3A4] mt-3 rounded-lg py-6 px-4">
        <div className="flex justify-between border-[1.3px] border-[#D6D6D6] rounded-[4px] px-3 py-[14px]">
          <div className="flex gap-2">
            <HomeOutlined className="text-[#39876B]" size={20} />
            <p className="text-14 font-bold">Total Investment</p>
          </div>
          <p className="text-14 font-bold text-[#39876B]">2</p>
        </div>
        <div className="flex justify-between border-[1.3px] border-[#D6D6D6] rounded-[4px] px-3 py-[14px] mt-4">
          <div className="flex gap-2">
            <Icon name="keyOutlined" />
            <p className="text-14 font-bold">Total Slots Bought</p>
          </div>
          <p className="text-14 font-bold text-[#39876B]">12</p>
        </div>
      </div>
    </div>
  );
};

export default RecentInvestment;
