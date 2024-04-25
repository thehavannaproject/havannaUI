import React, { useEffect, useState } from "react";
import { Field, Formik, Form } from "formik";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import BalanceCard from "@components/blocks/DashBoardCard/BalanceCard";
import { AddBankInfo, BankAccountNameEnquiry, GetAllBanks } from "@components/api";
import { AuthService } from "@components/api/auth";

const BankAccount = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [isBankAdded, setIsBankAdded] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bankList, setBankList] = useState([]);
  const [bankName, setBankName] = useState("");
  const [acctName, setAcctName] = useState({});
  const [acctNo, setAcctNo] = useState("");
  const { profile } = useSelector((state) => state.Account);


  const getAllBanks = () => {
    GetAllBanks().then((res) => {
      setBankList(res);
    });
  };

  const getAcctName = () => {
    if (bankName && acctNo.length === 10) {
      const data = {
        accountNumber: acctNo,
        bankCode: bankName,
      };
      BankAccountNameEnquiry(data).then((res) => {
        setAcctName(res);
      });
    }
  };

  const handleSubmit = (values) => {
    setLoading(true);
    const bank = bankList.filter((item) => item.code === values.bankName)[0].name
    const payload = {
      customerId: userDetails.customerId,
      bankName: bank,
      bankCode: values.bankName,
      accountNumber: values.accountNumber,
      bvn: values.bvn,
      accountName: acctName.account_name,
      bvnVerified: false,
    };
    AddBankInfo(payload).then((res) => {
      console.log(res)
      if(res.responseCode === 200) {
        setIsBankAdded(true);
        setLoading(false);
      }
    })
  };

  useEffect(() => {
    getAcctName();
  }, [bankName, acctNo]);

  useEffect(() => {
    getAllBanks();
  }, []);

  return (
    <div className="font-mulish">
      {isBankAdded || profile.bankDetails ? (
        <div className="tablet:w-[680px] tablet:px-[70px] py-[30px] text-white">
          <BalanceCard
            balance={profile.bankDetails.accountName}
            className="tablet:mt-[72px]"
            description={profile.bankDetails.accountNumber}
            icon={
              <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" onClick={() => setDeleteModal(true)}>
                <TrashIcon className=" text-HavannaGreen-secondary" width={24} />
              </div>
            }
            title={profile.bankDetails.bankName}
          />
        </div>
      ) : (
        <div className="bg-white font-mulish rounded-xl pt-10 m-auto tablet:w-[880px] tablet:shadow-lg tablet:px-10 tablet:py-10">
          <div className="mb-10 tablet:mb-[60px]">
            <h1 className="tablet:text-center text-20 tablet:text-[32px] font-bold text-HavannaBlack-neutral20">Add Bank Account</h1>
          </div>
          <Formik
            initialValues={{ bankName: "", accountNumber: "", bvn: "" }}
            onSubmit={handleSubmit}
            validate={(values) => {
              const errors = {};

              if (!/^\d+$/.test(values.accountNumber) || values.accountNumber.length !== 10) {
                errors.accountNumber = "Account number is invalid";
              }
              return errors;
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <div>
                  <label className="font-bold text-base" htmlFor="bankName">
                    Select Bank
                  </label>
                  <Field
                    as="select"
                    className={`rounded-[4px] px-3 w-full h-[60px] mt-2 border-2 outline-none `}
                    name="bankName"
                    onChange={(e) => {
                      setFieldValue("bankName", e.target.value);
                      setBankName(e.target.value);
                    }}
                    required
                  >
                    <option value="">Select Options</option>
                    {bankList.map((bank, ind) => (
                      <option key={ind} value={bank.code}>
                        {bank.name}
                      </option>
                    ))}
                  </Field>
                </div>
                <div className="mt-4 tablet:mt-[52px]">
                  <label className="font-bold text-base" htmlFor="accountNumber">
                    Account Number
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] w-full h-[60px] mt-2 border-2 outline-none `}
                    maxlength={10}
                    name="accountNumber"
                    onChange={(e) => {
                      setFieldValue("accountNumber", e.target.value);
                      setAcctNo(e.target.value);
                    }}
                    required
                    type="text"
                  />
                </div>
                  <p className="text-[22px] mt-4 text-HavannaGreen-secondary font-bold uppercase">{acctName.account_name}</p>
                <div className="mt-4 tablet:mt-[52px]">
                  <label className="font-bold text-base" htmlFor="bvn">
                   BVN
                  </label>
                  <FormikCustomInput
                    className={`rounded-[4px] w-full h-[60px] mt-2 border-2 outline-none `}
                    maxlength={11}
                    name="bvn"
                    required
                    type="text"
                  />
                </div>
                <div className="mt-10 mb-24">
                  <CustomButton customClass="rounded-[8px]  w-full text-16 text-white h-[60px] bg-HavannaGreen-primary" isLoading={loading} title="Add bank account" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}

      <div>
        <CustomModal toggleVisibility={setDeleteModal} visibility={deleteModal}>
          <div className="w-[523px] bg-white py-10 px-11 font-mulish rounded-xl">
            <h1 className="text-20 font-bold text-HavannaBlack-neutral20 text-center">Delete Bank Account</h1>
            <p className="mt-3 text-HavannaBlack-neutral20 font-medium text-16 text-center">Are you sure you want to delete this bank account?</p>
            <div className="grid grid-cols-2 gap-7 mt-10">
              <CustomButton customClass="border border-HavannaGreen-primary !h-[58px] w-full text-16 text-HavannaGreen-primary rounded-lg" title="Yes, delete" />
              <CustomButton customClass="bg-HavannaGreen-primary !h-[58px] w-full text-16 text-white rounded-lg" onClick={() => setDeleteModal(false)} title="No, don't delete" />
            </div>
          </div>
        </CustomModal>
      </div>
    </div>
  );
};

export default BankAccount;
