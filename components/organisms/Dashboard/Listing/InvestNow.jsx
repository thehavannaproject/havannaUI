import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";

import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import CustomButton from "@components/atoms/CustomButton/CustomButton";

const InvestNow = () => {
  const router = useRouter();

  return (
    <section>
      <div className="bg-[#F3FCFB] font-mulish">
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
            <h1>wallet Balance</h1>
            <Icon name="eyeIconSolid" />
          </div>
          <div className="flex justify-center gap-[9.33px] mt-6">
            <Icon className="mt-[11px]" name="naira" />
            <p className="font-bold text-36 leading-[44px] text-[#4F5457]  ">100,000.00</p>
          </div>
          <div className="flex justify-center">
            <hr className="border-[1.5px] w-[227px]  border-HavannaGreen-secondary" />
          </div>

          <div className="mt-[60px]">
            <Formik initialValues={{ propertyName: "", slotPrice: "", slot: "", amount: "" }}>
              <Form className="px-10">
                <div className="mt-4 ">
                  <label className="font-bold text-base" htmlFor="">
                    Property Name
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                    id="propertyName"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                    name="propertyName"
                    placeholder="Edala Homes"
                    required
                    type="text"
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
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                    name="SlotPrice"
                    placeholder="Slot Price"
                    required
                    type="number"
                  />
                </div>
                <div className="mt-4 ">
                  <label className="font-bold text-base" htmlFor="">
                    Slots
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-2 
                        border-2  `}
                    id="slots"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                    name="slots"
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
                    id="propertyName"
                    inputClassName="placeholder:text-14 outline-none
                         placeholder:text-citiGray-300 "
                    name="propertyName"
                    placeholder="Auto filled"
                    required
                    type="text"
                  />
                </div>

                <CustomLink destination="/listing/transactionsummary">
                  <div>
                    <CustomButton
                      customClass={`rounded-[4px] smallLaptop:w-[100%] h-[60px] mt-[60px] 
                          text-white bg-HavannaGreen-primary `} title="Continue"
                    />
                  </div>
                </CustomLink>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestNow;
