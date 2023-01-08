
import OpportunityCard from "@blocks/card/OpportunityCard"
import * as Animate from "react-reveal";

// import opportunity1 from "@images/homepage/opportunity1.png"
import opportunity2 from "@images/homepage/opportunity2.png"

const OpportunitySection = () => {
  return (
    <section className="font-mulish px-5 tablet:px-[120px] py-[60px] bg-HavannaGreen-light">
      <div className="smallLaptop:flex">
        <Animate.Fade bottom>
          <div className=" smallLaptop:flex smallLaptop:justify-center smallLaptop:items-center">
            <div>
              <h2 className="text-24 font-bold text-HavannaGreen-primary text-center smallLaptop:text-left smallLaptop:text-36">Opportunities made for <span className="text-HavannaGreen-tertiaryMain">you</span>.</h2>
              <p className="font-medium text-14 tablet:text-16 leading-5 text-center smallLaptop:text-left mt-4">Real Estate Asset Slots (REAS) are units of real estate assets such as income-producing residential or industrial properties, high-growth lands, and ongoing or proposed estate development projects.</p>
            </div>
          </div>
          
          <div className="smallLaptop:flex smallLaptop:ml-10" >
            {Opportunities.map((data, index) => (
              <div className="flex justify-center mt-6 smallLaptop:ml-10" key={index}>
                <OpportunityCard description={data.description} image={data.image} title={data.title}/>
              </div>
            ))}
          </div>
          
        </Animate.Fade>
      </div>
    </section>
  );
};

export default OpportunitySection;

const Opportunities = [
  {
    title: "Land REAS",
    image: opportunity2,
    description: "Land REAS are backed by lands that appreciate in value."
  },
  {
    title: "Property REAS",
    image: opportunity2,
    description: "Property REAS are backed by revenue generating real estate assets."
  }
]
