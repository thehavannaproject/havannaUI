import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import * as Yup from "yup";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import { GetListingById, getCustomerWallet } from "@components/api";
import { AuthService } from "@components/api/auth";

const InvestNow = () => {
  const router = useRouter();
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState([]);
  const [singleListing, setSingleListing] = useState({});
  const [hide, setHide] = useState(true);
  const [count, setCount] = useState(0)

  const investPropertySchema = Yup.object().shape({
    slotCount: Yup.string().max(3).required("This field is compulsory").test(
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

  const { propertyId } = router.query;

  const getCustomerWallets = () => {
    setLoading(true);
    getCustomerWallet(userDetails?.customerId).then((data) => {
      if (data) {
        setLoading(false);
        setWallet(data);
      }
    });
  };

  const getListingById = () => {
    GetListingById(propertyId)
      .then((res) => {
        setSingleListing(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCustomerWallets();
    getListingById();
  }, [propertyId]);

  const handleSubmit = (values) => {
    router.push({
      pathname: '/listing/transactionsummary', // Replace with your target page
      query: {propertyId:propertyId, data: JSON.stringify(values) },
    })
  }

  return (
    <section>
      <div className="bg-[#F3FCFB] font-mulish pb-10">
        <div className="flex pt-8 gap-[28.38px] ml-[44.38px] ">
          <Icon
            className="mt-1 cursor-pointer"
            name="investArrow"
            onClick={() => {
              router.back();
            }}
          />
          <div>
            <h1 className="font-bold text-[28px] leading-9 "> Invest Now</h1>
          </div>
        </div>
        <div className="bg-white w-[800px] ml-20 shadow-xl mt-[60px] py-10 justify-center rounded-xl">
          <div className="flex justify-center gap-[25.64px]">
            <h1>Wallet Balance</h1>
            <div>
              {hide ? (
                <EyeIcon className="cursor-pointer text-HavannaGreen-secondary" onClick={() => setHide(false)} width={32} />
              ) : (
                <EyeSlashIcon className="cursor-pointer text-HavannaGreen-secondary" onClick={() => setHide(true)} width={32} />
              )}
            </div>
          </div>
          {loading ? (
            <p className="w-[227px] h-9 m-auto animate-pulse" />
          ) : (
            <div className="flex justify-center gap-[9.33px] mt-6">
              <div>
                {hide ? (
                  <h1 className=" mt-6 font-bold text-36 leading-[44px] text-[#4F5457] flex">
                    <Icon className="mt-[11px]" name="naira" /> &nbsp; {wallet?.availableBalance?.toLocaleString()}
                  </h1>
                ) : (
                  <p className=" mt-6 font-bold text-36 leading-[44px] text-[#4F5457]">******</p>
                )}
              </div>
              {/* <p className="font-bold text-36 leading-[44px] text-[#4F5457]  ">{wallet?.availableBalance?.toLocaleString()}</p> */}
            </div>
          )}
          <div className="flex justify-center">
            <hr className="border-[1.5px] w-[227px]  border-HavannaGreen-secondary" />
          </div>

          <div className="mt-[60px]">
            <Formik enableReinitialize initialValues={{ propertyName: singleListing?.name, slotPrice: 50, slotCount: count, amount: (count * 50 || 0) }} onSubmit={(values) => handleSubmit(values)} validationSchema={investPropertySchema}>
              {({ values }) => (
                <Form className="px-10">
                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      Property Name
                    </label>
                    <FormikCustomInput
                      className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                      id="propertyName"
                      inputClassName="placeholder:text-14 outline-none"
                      name="propertyName"
                      placeholder="Edala Homes"
                      readOnly
                      required
                      type="text"
                      value={values.propertyName}
                    />
                  </div>
                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      Slot Price
                    </label>
                    <FormikCustomInput
                      className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                      id="SlotPrice"
                      inputClassName="placeholder:text-14 outline-none"
                      name="SlotPrice"
                      placeholder="Slot Price"
                      readOnly
                      required
                      type="number"
                      value={values.slotPrice}
                    />
                  </div>
                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      Slots
                    </label>
                    <FormikCustomInput
                      className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                      id="slotCount"
                      inputClassName="placeholder:text-14 outline-none"
                      name="slotCount"
                      placeholder="Enter how many slots e.g 10"
                      required
                      type="number"
                    />
                  </div>
                  <div className="mt-4 ">
                    <label className="font-bold text-base" htmlFor="">
                      Amount
                    </label>
                    <FormikCustomInput
                      className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                      id="amount"
                      inputClassName="placeholder:text-14 outline-none"
                      name="amount"
                      readOnly
                      required
                      type="text"
                      value={values.amount}
                    />
                  </div>

                  {/* <CustomLink destination="/listing/transactionsummary"> */}
                    <div>
                      <CustomButton
                        customClass={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-[60px] 
                          text-white bg-HavannaGreen-primary `}
                        title="Continue"
                      />
                    </div>
                  {/* </CustomLink> */}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestNow;
