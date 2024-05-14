import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
// import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import { ListingInvestment, getCustomerPortfolio, getCustomerProfile } from "@components/shared/api";
import { AuthService } from "@components/shared/api/auth";
import PopUpModalTemplate from "@components/atoms/PopUpModalTemplate";
import { setProfile } from "@components/store/Account";
import TransactionSuccessfulModal from "@components/atoms/TransactionSuccessfulModal";
// import TransactionDetails from "./TransactionDetails";

const InvestmentSummary = ({ investForm, listingId }) => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [showModal, setShowModal] = useState(false);
  const [showpopupModal, setShowPopupModal] = useState(false);
  const [transactionSuccessModal, setTransactionSuccessModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [portfolio, setPorfolio] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCustomerProfile(userDetails?.customerId)
      .then((response) => {
        dispatch(setProfile(response));
      })
      .catch((error) => console.log(error));
  }, []);

  const { profile } = useSelector((state) => state.Account);

  useEffect(() => {
    getCustomerPortfolio(userDetails?.customerId)
      .then((data) => {
        if (data) {
          setPorfolio(data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const makeInvestment = () => {
    const payload = {
      listingId: listingId,
      portfolioId: portfolio?.id,
      customerId: userDetails?.customerId,
      amount: investForm?.amount,
      unit: investForm?.slotCount,
      transactionPin: otp,
      email: userDetails?.emailAddress,
      investmentType: 0,
    };
    

    ListingInvestment(payload)
      .then((res) => {
        console.log(res)
        if(res.responseCode === 200) {
          setOtp("")
          toast.success(res.data);
          setTransactionSuccessModal(true);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.errorMessage);
      });
  };

  useEffect(() => {
    if (otp && otp.length == 4) {
      makeInvestment();
    }
  }, [otp]);

  return (
    <div className="font-mulish mt-7">
      <div>
        <p className="text-center text-[18px] font-bold text-[#3B3F42]">₦ {investForm?.amount?.toLocaleString()}</p>
        <div className="mt-10 text-[#ADADAD] text-14">
          <div className="flex justify-between py-4 border-b">
            <p>Amount to pay</p>
            <p className="font-bold text-[#3B3F42]">₦ {investForm?.amount?.toLocaleString()}</p>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p>Havanna processing fee</p>
            <p className="font-bold text-[#3B3F42]">₦ 0.00</p>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p>Property </p>
            <p className="font-bold text-[#3B3F42]">{investForm?.propertyName}</p>
          </div>
          <div className="flex justify-between py-4 border-b">
            <p>Slots bought</p>
            <p className="font-bold text-[#3B3F42]">{investForm?.slotCount}</p>
          </div>
        </div>

        <div className="mt-16">
          <CustomButton
            customClass="bg-HavannaGreen-primary text-white w-full text-14 rounded-[4px]"
            onClick={() => (profile?.transactionPinCreated ? setShowModal(true) : setShowPopupModal(true))}
            title={`Pay ₦ ${investForm?.amount.toLocaleString()}`}
          />
        </div>
      </div>
      <CustomModal cardClassName="absolute bottom-0 w-full" toggleVisibility={setShowModal} visibility={showModal}>
        <div className="w-full pt-8 bg-white text-black font-mulish h-[70vh] rounded-t-xl">
          <p className="text-center text-18 font-bold text-[#3B3F42]">Enter your PIN code</p>
          <OtpInput
            containerStyle="px-6 text-20 mt-[48px] flex justify-between"
            numInputs={4}
            onChange={(e) => {
              setOtp(e);
            }}
            renderInput={(props) => (
              <input type="number" {...props} style={{ width: "42px", height: "42px", border: "1.3px solid #ADADAD", outline: "none", textAlign: "center", borderRadius: "4px" }} width={42} />
            )}
            renderSeparator={<span />}
            value={otp}
          />
        </div>
      </CustomModal>

      <CustomModal cardClassName="w-full" toggleVisibility={setShowPopupModal} visibility={showpopupModal}>
        <div className="bg-white text-black px-6 pt-4 font-mulish !w-full h-screen">
          <PopUpModalTemplate description="Set your transaction pin to continue investment" destination="/account?tab=security" linkTitle="Set Pin" title="Transaction Pin" />
        </div>
      </CustomModal>

      {transactionSuccessModal && <TransactionSuccessfulModal route="/listing" />}
    </div>
  );
};

export default InvestmentSummary;
