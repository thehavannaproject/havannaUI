import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import MenuHeader from "@components/layout/DashboardLayout/MenuHeader";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import { GetListingById, getCustomerWallet } from "@components/shared/api";
import { AuthService } from "@components/shared/api/auth";
import PopUpModalTemplate from "@components/atoms/PopUpModalTemplate";
import InvestmentSummary from "./InvestmentSummary";


const InvestmentForm = () => {
  const router = useRouter();
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [showSummary, setShowSummary] = useState(false);
  const [wallet, setWallet] = useState([]);
  const [singleListing, setSingleListing] = useState([]);
  const [count, setCount] = useState(0);
  const [investForm, setInvestForm] = useState({});
  const [gotoAccountModal, setGotoAccountModal] = useState(false);

  const { profile } = useSelector((state) => state.Account);

  const { listingId } = router.query;

  const investPropertySchema = Yup.object().shape({
    slotCount: Yup.number().min(1, "Slot count must be greater than 0")
    .max(100, "Slot count cannot exceed 100").required("This field is compulsory").test(
      "slotCount",
      "Number of slots entered is greater than available slots",
      (value) => { setCount(parseInt(value)); return parseInt(value) <= singleListing?.availableSlot;},
    ),
    amount: Yup.string().required("This field is compulsory").test(
      "amount",
      "You have insufficient funds in your wallet",
      (value) => parseFloat(value) <= wallet?.availableBalance
    ),
  });

  useEffect(() => {
    getCustomerWallet(userDetails?.customerId)
      .then((data) => {
        if (data) {
          setWallet(data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const getListingById = () => {
    GetListingById(listingId)
      .then((res) => {
        setSingleListing(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getListingById();
  }, [listingId]);

  useEffect(() => {
    if (profile?.customerId && !profile?.phoneNumber) {
      setGotoAccountModal(true);
    } else {
      setGotoAccountModal(false);
    }
  }, [profile?.phoneNumber])

  return (
    <>
      <div className="font-mulish mb-20">
        <div className="wallet-bg text-white  bg-HavannaGreen-secondary h-[142px] rounded-lg mt-5">
          <div className="flex gap-3 items-center pt-5 ml-3">
            <Icon name="mobileWallet" />
            <div>
              <h1 className="text-14 font-bold">Wallet Balance</h1>
              <p className="text-12 font-normal mt-1">Total money in your wallet</p>
              <p className="mt-2 text-20 font-bold">{wallet?.availableBalance ? `₦ ${parseFloat(wallet?.availableBalance)?.toLocaleString()}` : "₦ 0"}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Formik
            enableReinitialize
            initialValues={{
              propertyName: singleListing?.name || "Not Avaliable",
              slotPrice: singleListing?.listingDetails?.unitCost || 0,
              slotCount: count,
              amount: count * singleListing?.listingDetails?.unitCost || 0 
            }}
            onSubmit={(values) => {
              setInvestForm(values)
              setShowSummary(true);
            }}
            validationSchema={investPropertySchema}
          >
            {({ values }) => (
              <Form>
                <div>
                  <label className="font-bold text-14 text-[#3B3F42]">Property Name</label>
                  <FormikCustomInput
                    className={`rounded-md w-full h-[48px] mt-1 border border-HavannaGreen-secondary font-medium font-mulish text-16 leading-6 `}
                    id="propertyName"
                    inputClassName="placeholder:text-14 outline-none "
                    name="propertyName"
                    readOnly
                    type="text"
                    value={values.propertyName}
                  />
                </div>
                <div className="mt-5">
                  <label className="font-bold text-14 text-[#3B3F42]">Slot Price</label>
                  <FormikCustomInput
                    className={`rounded-md w-full h-[48px] mt-1 border border-HavannaGreen-secondary font-medium font-mulish text-16 leading-6 `}
                    id="slotPrice"
                    inputClassName="placeholder:text-14 outline-none "
                    name="slotPrice"
                    readOnly
                    type="text"
                    value={`₦ ${values.slotPrice.toLocaleString()}`}
                  />
                </div>
                <div className="mt-5">
                  <label className="font-bold text-14 text-[#3B3F42]">Number of Slot</label>
                  <FormikCustomInput
                    className={`rounded-md w-full h-[48px] mt-1 border border-HavannaGreen-secondary font-medium font-mulish text-16 leading-6 `}
                    id="slotCount"
                    inputClassName="placeholder:text-14 outline-none "
                    name="slotCount"
                    type="number"
                     value={values.slotCount}
                  />
                </div>
                <div className="mt-5">
                  <label className="font-bold text-14 text-[#3B3F42]">Amount</label>
                  <FormikCustomInput
                    className={`rounded-md w-full h-[48px] mt-1 border border-HavannaGreen-secondary font-medium font-mulish text-16 leading-6 `}
                    id="amount"
                    inputClassName="placeholder:text-14 outline-HavannaGreen-secondar"
                    name="amount"
                    readOnly
                    type="text"
                    value={`₦ ${values.amount.toLocaleString()}`}
                  />
                </div>
                <div className="mt-16">
                  <CustomButton customClass="bg-HavannaGreen-primary text-white w-full rounded-[4px]" title="Continue" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <CustomModal cardClassName="w-full" toggleVisibility={setShowSummary} visibility={showSummary}>
        <MenuHeader onClose={() => setShowSummary(false)} title="Summary">
          <div className="bg-white text-black px-6 pt-4 font-mulish !w-full h-screen">
            <InvestmentSummary investForm={investForm} listingId={listingId} />
          </div>
        </MenuHeader>
      </CustomModal>

      <CustomModal cardClassName="w-[348px]" toggleVisibility={() => setGotoAccountModal(true)} visibility={gotoAccountModal}>
          <div className="bg-white text-black px-6 pt-4 flex justify-center items-center font-mulish h-[250px] rounded-lg  ">
            <PopUpModalTemplate description="Kindly complete your account information to proceed. " destination="/account" linkTitle="Go to Account" title="Notice" />
          </div>
        </CustomModal>
    </>
  );
};

export default InvestmentForm;
