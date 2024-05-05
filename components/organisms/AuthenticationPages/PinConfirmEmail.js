import { Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Icon from "@components/atoms/Icons";
import { forgotPassword, verifyPhoneOtp } from "@components/api";
import { maskEmail } from "@components/shared/libs/helpers";
import CustomLink from "@atoms/CustomLink/CustomLink";
import Logo from "@images/svg/Logo.svg";
import "react-toastify/dist/ReactToastify.css";

const PinConfirmEmail = () => {
  //   const [open, setOpen] = useState(false);
  let [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = Array(6)
    .fill()
    .map(() => useRef());
  const mergeOtp = otp.join("");

  const router = useRouter();
  const { email } = router.query;

  const handleOtpChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);
    if (event.target.value !== "" && index < newOtp.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handleOtp = () => {
    const data = {
      verification_code: mergeOtp,
      verification_reference: localStorage.getItem("reference"),
    };
    verifyPhoneOtp(data)
      .then((response) => {
        response === "invalid token" ? toast.error("Sorry, couldn't verify OTP at the moment, Please try again later") : toast.success("OTP verification is successful");
      })
      .catch((error) => console.log(error));
  };

  const resendCode = () => {
    forgotPassword(email)
      .then((res) => {
        if (res.success === true) {
          toast.success(res.data, { theme: "colored" });
          setTimer(60);
        } else {
          toast.error(res.errorMessage, { theme: "colored" });
        }
      })
      .catch((error) => {
        error;
        toast.error("oops, something went wrong");
      });
  };

  return (
    <section
      className={` smallLaptop:pt-28 min-h-screen   pt-[31px] smallLaptop:pb-32 tablet:px-0
       font-mulish
     smallLaptop:bg-HavannaGreen-primary bg-HavannaGreen-light`}
    >
      <div className=" ">
        <div className="pl-[30px] smallLaptop:hidden">
          <CustomLink destination="/auth/login">
            {" "}
            <Icon name="vectorStroke" />{" "}
          </CustomLink>
        </div>
        <div className="smallLaptop:flex hidden justify-center">
          <Link href="/">
            <a>
              <span className="sr-only">Havanna</span>
              <Image alt="Havanna" className="h-7 md:w-auto tablet:h-8 lg:h-9 ml-30  " src={Logo} />
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div
            className=" smallLaptop:bg-white tablet:mt-[154px] py-[60px] mt-8 
            rounded-[20px] tablet:rounded-[32px] h-[600px]
             w-full tablet:w-[800px] smallLaptop:px-[120px] px-6  tablet:px-[10%]"
          >
            <ToastContainer />
            <Formik
              initialValues={{
                otp: "",
              }}
              onSubmit={handleOtp}
            >
              {() => (
                <Form>
                  <div className=" ">
                    <div>
                      <h1 className="font-bold text-20 smallLaptop:text-36 text-center leading-[26px] smallLaptop:leading-10 ">Confirm your email address</h1>
                      <p className="font-normal smallLaptop:font-medium text-base pt-3 pb-8 smallLaptop:pb-16 leading-4 smallLaptop:leading-6 text-center ">
                        Enter the code that was sent to {maskEmail(email)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-[40px] justify-center  ">
                    <input
                      className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                      maxLength={1}
                      name="otp"
                      onChange={(e) => handleOtpChange(0, e)}
                      ref={refs[0]}
                      type="number"
                    />
                    <input
                      className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                      maxLength={1}
                      name="otp1"
                      onChange={(e) => handleOtpChange(1, e)}
                      ref={refs[1]}
                      type="number"
                    />
                    <input
                      className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                      maxLength={1}
                      name="otp2"
                      onChange={(e) => handleOtpChange(2, e)}
                      ref={refs[2]}
                      type="number"
                    />
                    <input
                      className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                      maxLength={1}
                      name="otp3"
                      onChange={(e) => handleOtpChange(3, e)}
                      ref={refs[3]}
                      type="number"
                    />
                    <input
                      className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                      maxLength={1}
                      name="otp4"
                      onChange={(e) => handleOtpChange(4, e)}
                      ref={refs[4]}
                      type="number"
                    />
                    <input
                      className="border-2 w-[60px] h-[60px] rounded-lg text-center"
                      maxLength={1}
                      name="otp5"
                      onChange={(e) => handleOtpChange(5, e)}
                      ref={refs[5]}
                      type="number"
                    />
                  </div>
                  <div className="ml-14 mt-10">
                    {timer > 0 ? (
                      <p>Resend code in {timer}s</p>
                    ) : (
                      <p className="text-18 text-HavannaGreen-primary font-bold" onClick={resendCode}>
                        I didn’t get the code. Kindly resend.
                      </p>
                    )}
                  </div>
                  {/* <div className="mt-10 ">
                    <Button
                      customClass=" text-4 h-[46px] text-white bg-[#0B4340] text-center tablet:text-16 font-bold !w-full rounded-md"
                      isLoading={loading}
                      title="Submit email "
                    />
                  </div> */}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinConfirmEmail;
