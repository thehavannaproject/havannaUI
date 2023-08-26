import { Form, Formik } from "formik";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";

const UpdatePin = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <div className="font-mulish text-[#4F5457] px-6">
      <p className="pt-5 text-14 text-[#3B3F42] font-bold">Set Your Transaction PIN</p>
      <div className="mt-7">
        <Formik initialValues={{ pin: "" }}>
          <Form>
            <div>
              <label className="font-bold text-14">Current Pin</label>
              <FormikCustomInput
                className={`rounded-[4px] h-[48px] mt-3 border-2`}
                inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                name="password"
                type="password"
              />
            </div>
            <div className="mt-6">
              <label className="font-bold text-14">New Pin</label>
              <FormikCustomInput
                className={`rounded-[4px] h-[48px] mt-3 border-2`}
                inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                name="password"
                type="password"
              />
            </div>

            <div className="mt-6">
              <label className="font-bold text-14">Confirm Pin</label>
              <FormikCustomInput
                className={`rounded-[4px] h-[48px] mt-3 border-2`}
                inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                name="password"
                type="password"
              />
            </div>
            <div>
              <div className="mt-10 ">
                <CustomButton
                  customClass="rounded-[8px] smallLaptop:w-[240px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary"
                  onClick={() => setShowSuccessModal(true)}
                  title=" Update Transaction PIN"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>

      <CustomModal toggleVisibility={() => setShowSuccessModal(false)} visibility={showSuccessModal}>
        <div className="bg-white h-[240px] mx-6 rounded-xl font-mulish">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-[#3B3F42] text-18 font-bold mb-6">Transaction PIN Updated</h1>
            <CheckCircleIcon color="#39876B" width={40} />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default UpdatePin;
