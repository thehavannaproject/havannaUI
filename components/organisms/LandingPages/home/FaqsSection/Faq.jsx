import React from "react";
import * as Animate from "react-reveal";

const FaqsSection = () => {
  return (
    <section className="font-mulish px-5 py-[60px] bg-HavannaGreen-light">
      <div className="">
        <Animate.Fade bottom>
          <h2 className="text-center text-24 font-bold text-HavannaGreen-primary LEADING-8">Frequently Asked Questions (FAQS).</h2>
          <div className="w-full lg:w-9/12 rounded-xl mx-auto mt-10 md:mt-14 lg:mt-20 bg-white px-2 md:px-6 lg:px-8 py-6 lg:py-12">
            {faqsData.map((a, index) => (
              <div className="relative border-b pt-1 pb-1 lg:pb-3 px-8 lg:px-10 mb-1 lg:mb-6" key={index}>
                <input className="toggle hidden" id={`toggle${index}`} type="checkbox" />
                <label className="dropdown-faq-title block  p-4 cursor-pointer text-primary font-semibold pb-2 question text-sm-15 lg:text-base" htmlFor={`toggle${index}`}>
                  {a.question}
                </label>
                <div className="content overflow-hidden">
                  <p className="p-4 text-default font-light answer text-sm lg:text-sm-15">{a.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </Animate.Fade>
      </div>
    </section>
  );
};

export default FaqsSection;

const faqsData = [
  {
    id: 1,
    question: "How does this work?",
    answer: `Havanna allows you to invest in real estate assets that ordinarily would have been 
        impossible due to its high associated cost and start benefiting from your investment almost 
        immediately. You are also able to diversify your investment across different asset classes.`,
  },
  {
    id: 2,
    question: "Who can invest?",
    answer: `Absolutely everyone! Our investment options give everyone the opportunity 
        to invest in the Nigerian Real Estate market. Our investors 
        are from all sectors across the country and beyond.`,
  },
  {
    id: 3,
    question: "Is the ROI guaranteed?",
    answer: `Real estate is the only investment that guarantees a Return on 
        Investment. All returns are certain provided they are held for the minimum duration.`,
  },
];
