import React from "react";

// Icons
import Featured1 from "../../../assets/FeaturedIcon01.png";
import Featured2 from "../../../assets/FeaturedIcon02.png";
import Featured3 from "../../../assets/FeaturedIcon03.png";
import Featured4 from "../../../assets/FeaturedIcon04.png";
import Featured5 from "../../../assets/FeaturedIcon05.png";
import Featured6 from "../../../assets/FeaturedIcon06.png";

const Feature = [
  {
    Icon: Featured1,
    Title: "Care about our team",
    desc: "Understand what matters to our employees. Give them what they need to do their best work.",
  },
  {
    Icon: Featured2,
    Title: "Be excellent to each other",
    desc: "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.",
  },
  {
    Icon: Featured3,
    Title: "Pride in what we do",
    desc: "Value quality and integrity in everything we do. At all times. No exceptions.",
  },
  {
    Icon: Featured4,
    Title: "Do not #!&$ the customer",
    desc: "Understand customers stated and unstated needs. Make them wildly successful.",
  },
  {
    Icon: Featured5,
    Title: "Do the impossible",
    desc: 'Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"',
  },
  {
    Icon: Featured6,
    Title: "Sweat the small stuff",
    desc: "We believe the best products come from the best attention to detail. Sweat the small stuff.",
  },
];

const OurValues = () => {
  return (
    <div className="ourValue relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px] bg-[#F9FAFB]">
      <div className="container max-w-[1400px] m-auto flex gap-10 flex-col justify-center items-center">
        <div className="title text-center w-[70%] m-auto flex gap-3 flex-col justify-center items-center max-sm:w-full">
          <span className="text-base font-bold text-[#6941C6]">Our values</span>
          <h2 className="text-4xl font-semibold text-[#101828] max-sm:text-3xl max-sm:font-bold">
            How we work at Untitled
          </h2>
          <p className="text-base font-medium text-[#5b6c85] text-center">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-7 max-2xl:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
          {Feature.map((item, index) => (
            <div
              key={index}
              className="card rounded-none p-6 flex gap-3 flex-col justify-center items-center bg-[#F9FAFB] "
            >
              <img
                src={item.Icon}
                alt=""
                className="w-[60px] h-[60px] rounded-[100px]"
                loading="lazy"
              />
              <h2 className="text-2xl text-center">{item.Title}</h2>
              <p className="text-center text-[#424242]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
