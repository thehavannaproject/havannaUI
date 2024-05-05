import { Form, Formik } from "formik";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import FormikCustomInput from "@components/atoms/CustomInput/FormikCustomInput";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import { AuthService } from "@components/shared/api/auth";
import { UpdateUserPassword } from "@components/shared/api";
import { REGEX } from "@components/shared/libs/helpers";

const UpdatePassword = () => {
  const authService = new AuthService();
  const userDetails = authService.getDetails("ud");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    const payload = {
      emailAddress: userDetails.emailAddress,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    };
    UpdateUserPassword(payload)
      .then((res) => {
        if(res.responseCode === 200) {
          setShowSuccessModal(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  
  return (
    <div className="font-mulish text-[#4F5457] px-6">
      <p className="pt-5 text-14 text-[#3B3F42]">Update your password by creating a new one.</p>
      <div className="mt-7">
        <Formik
          initialValues={{ oldPassword: "", newPassword: "", confirmPassword: "" }}
          onSubmit={(values) => handleSubmit(values)}
          validate={(values) => {
            const errors = {};
            if (!REGEX.password.test(values.newPassword)) {
              errors.newPassword = "Password must be greater than 8 and must contain at least 1 uppercase, number and special character";
            }
            if(values.newPassword !== values.confirmPassword) {
              errors.confirmPassword = "Password does not match";
            }
            return errors;
          }}
        >
          <Form>
            <div>
              <label className="font-bold text-14">Current Password</label>
              <FormikCustomInput
                className={`rounded-[4px] h-[48px] mt-3 border-2`}
                inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                name="oldPassword"
                type="password"
              />
            </div>
            <div className="mt-6">
              <label className="font-bold text-14">New Password</label>
              <FormikCustomInput
                className={`rounded-[4px] h-[48px] mt-3 border-2`}
                inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                name="newPassword"
                type="password"
              />
            </div>
            <div className="mt-6">
              <label className="font-bold text-14">Confirm New Password</label>
              <FormikCustomInput
                className={`rounded-[4px] h-[48px] mt-3 border-2`}
                inputClassName="placeholder:text-14 outline-none placeholder:text-citiGray-300 "
                name="confirmPassword"
                type="password"
              />
            </div>
            <div>
              <div className="mt-10 ">
                <CustomButton
                  customClass="rounded-[8px] smallLaptop:w-[240px] w-[100%]  text-white h-[58px] bg-HavannaGreen-primary"
                  isLoading={loading}
                  title=" Update Password"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>

      <CustomModal cardClassName="w-full" toggleVisibility={() => setShowSuccessModal(false)} visibility={showSuccessModal}>
        <div className="bg-white h-[240px] mx-6 rounded-xl font-mulish">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-[#3B3F42] text-18 font-bold mb-6">Password Updated</h1>
            <CheckCircleIcon color="#39876B" width={40} />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default UpdatePassword;
