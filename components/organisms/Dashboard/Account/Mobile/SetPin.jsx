import { Form, Formik } from "formik";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import * as Yup from "yup";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import { SetTransactionPin } from "@components/api";
import { AuthService } from "@components/api/auth";


const SetPin = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud")
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  console.log(userDetails)

  const pinSchema = Yup.object().shape({
    pin: Yup.string().min(4, "Pin must be 4 digits").max(4, "Pin cannot exceed 4 digits").required("This field is compulsory"),
    confirmPin: Yup.string()
    .required("This field is compulsory")
    .test('match', 'Pins do not match', function (value) {
      return value === this.parent.pin;
    }),
  });
  const handleSubmit = (values) => {
    const payload = {
      transactionPin: String(values?.pin),
      email: userDetails?.emailAddress 
    };
    SetTransactionPin(payload).then((res) => {console.log(res);
      setShowSuccessModal(true)
    
    }).catch((error) => {console.log(error)});
  };

  return (
    <div className="font-mulish text-[#4F5457] px-6">
      <p className="pt-5 text-14 text-[#3B3F42] font-bold">Set Your Transaction PIN</p>
      <div className="mt-7">
        <Formik initialValues={{ pin: "", confirmPin: "" }} onSubmit={(values) => handleSubmit(values)} validationSchema={pinSchema}>
          <Form>
            <div>
              <label className="font-bold text-14">Set Pin</label>
              <FormikCustomInput
                className={`rounded-[4px] h-[48px] mt-3 border-2`}
                id="pin"
                inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                name="pin"
                required
                type="number"
              />
            </div>

            <div className="mt-6">
              <label className="font-bold text-14">Confirm Pin</label>
              <FormikCustomInput
                className={`rounded-[4px] h-[48px] mt-3 border-2`}
                id="confirmPin"
                inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                name="confirmPin"
                type="number"
              />
            </div>
            <div>
              <div className="mt-10 ">
                <CustomButton
                  customClass="rounded-[8px] smallLaptop:w-[240px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary"
                  title=" Set Transaction PIN"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>

      <CustomModal cardClassName="w-full" toggleVisibility={setShowSuccessModal} visibility={showSuccessModal}>
        <div className="bg-white h-[240px] mx-6 rounded-xl font-mulish">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-[#3B3F42] text-18 font-bold mb-6">Transaction PIN Set</h1>
            <CheckCircleIcon color="#39876B" width={40} />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default SetPin;
