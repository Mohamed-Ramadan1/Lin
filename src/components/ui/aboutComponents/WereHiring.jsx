import React from "react";

// Framer Motion
import { motion } from "framer-motion";

import avtar from "../../../assets/Avatar.png";

const Founder = [
  {
    img: avtar,
    name: "Ahmed Magdy",
    job: "Founder & CEO",
    desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    img: avtar,
    name: "Mohamed Ramadan",
    job: "Founder & CEO",
    desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    img: avtar,
    name: "Ahmed Magdy-2",
    job: "Founder & CEO",
    desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    img: avtar,
    name: "Mohamed Ramadan-2",
    job: "Founder & CEO",
    desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
];

const WereHiring = () => {
  return (
    <div className="wereHiring relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="container max-w-[1400px] m-auto flex gap-10 flex-col justify-center items-center">
        <div className="title text-center w-[70%] m-auto flex gap-3 flex-col justify-center items-center max-sm:w-full">
          <span className="text-base font-bold text-[#6941C6]">
            We’re hiring!
          </span>
          <h2 className="text-4xl font-semibold text-[#101828] max-sm:text-3xl max-sm:font-bold">
            Meet Our Founder
          </h2>
          <p className="text-base font-medium text-[#5b6c85] text-center max-sm:text-[15px]">
            [Insert Founder's Name], the visionary behind LIN, embarked on a
            journey to revolutionize the landscape of education with a simple
            yet profound belief: that everyone deserves access to quality
            learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
          {Founder.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring" }}
              key={index}
              className="card rounded-none p-6 flex gap-3 flex-col justify-center items-center bg-[#F9FAFB] "
            >
              <img
                src={item.img}
                alt=""
                className="w-[60px] h-[60px] rounded-[100px]"
              />

              <div className="info text-center">
                <h1 className="text-2xl">{item.name}</h1>
                <span className="text-base font-medium text-[#6941C6]">
                  {item.job}
                </span>
              </div>

              <p className="text-center text-[#424242]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WereHiring;
