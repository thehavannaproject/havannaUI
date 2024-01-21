import Card from "@blocks/card/Card";
import * as Animate from "react-reveal";

const WhySection = () => {
  return (
    <section className="px-5 tablet:px-[120px] py-[60px] bg-HavannaGreen-light font-mulish mt-[58px]">
      <div className="">
        <div className="tablet:w-1/2">
          <Animate.Fade bottom>
            <h2 className="text-24 tablet:text-36 leading-8 text-HavannaGreen-primary text-center tablet:text-left font-bold tablet:leading-[44px]">
              Why Real Estate Asset Slots <span className="text-HavannaGreen-tertiaryMain">(REAS)</span>?
            </h2>
            <p className="mt-4 font-medium leading-6 tablet:leading-6 text-center text-16 tablet:text-left pb-4">
              Real Estate Asset Slots (REAS) are units of real estate assets such as income-producing residential or industrial properties, high-growth lands, and ongoing or
              proposed estate development projects.
            </p>
          </Animate.Fade>
        </div>

        <div className="mt-6 flex justify-between gap-[26px]">
          {CardContent.map((data, index) => (
            <div className="mt-6 text-14 leading-5" key={index}>
              <Card customClass="p-6" description={data.description} icon={data.icon} iconClass="mb-6 tablet:mt-10" title={data.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

const CardContent = [
  {
    icon: "cardIcon1",
    title: "Co-ownership",
    description:
      "Obtain fractional ownership when you purchase a slot in a real estate asset. That way, we are making you a co-owner or co-investor in the underlying real estate asset.",
  },
  {
    icon: "cardIcon2",
    title: "Affordability",
    description:
      "You don’t need a large capital to amass a fortune. Our minimal investment plans give you the flexibility to invest the right amount, at the right time, to meet your goals.",
  },
  {
    icon: "cardIcon3",
    title: "Diversification",
    description:
      "Shield yourself from highly volatile investments and diversify your portfolio with real estate. We offer you the opportunity to diversify your investment to various asset classes.",
  },
  {
    icon: "cardIcon4",
    title: "Stay hands off",
    description:
      "Avoid the hassles that come with identifying and managing investments. You may relax knowing that your investment is being professionally managed. No real estate experience is necessary, we save your time and help you make the right decisions.",
  },
];
