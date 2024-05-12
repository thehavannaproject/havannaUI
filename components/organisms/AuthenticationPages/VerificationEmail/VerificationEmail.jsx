import Icon from "@components/atoms/Icons";


const VerificationEmail = ({email}) => {

  return (
    <section
      className={`h-screen justify-center flex smallLaptop:pb-32 tablet:px-0 px-6
       font-mulish
     smallLaptop:bg-HavannaGreen-primary bg-HavannaGreen-light`}
    >
      <div className=" flex justify-center items-center ">
        <div className="  text-HavannaBlack-neutral20 justify-between text-center mt-20 mx-auto ">
          <div
            className="flex justify-center smallLaptop:bg-white tablet:mt-[154px]
            smallLaptop:rounded-[32px] smallLaptop:h-[450px] bigLaptop:h-[600px]
              tablet:w-[750px] bigLaptop:px-[120px]  tablet:px-[10%] items-center"
          >
            <div className="font-mulish text-center items-center">
              <h1 className="font-bold text-24 smallLaptop:text-[32px] mb-3 leading-10 ">Verify your email</h1>
              <p className="font-medium text-base mb-7 pt-3 leading-6 text-center ">A verification email has been sent to your email address, {email} </p>
              <Icon className="items-center flex justify-center" name="envelope" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationEmail;
