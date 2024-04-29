// Framer Motion
import { motion } from "framer-motion";

// Image
import WhatWeOfferImage from "../../../assets/WhatWeOfferImage.jpg";

import OfferBox from "./OfferBox";

const WhatWeOffer = () => {
  return (
    <div className="whatWeOffer relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px] bg-[#F9FAFB]">
      <div className="container grid gap-10 max-md:gap-4 grid-cols-2 max-md:grid-cols-1  max-w-[1400px] m-auto">
        <div className="image w-full max-h-[700px] h-full  max-md:h-[200px] ">
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween" }}
            src={WhatWeOfferImage}
            alt="what we offer"
            className="w-full h-full object-cover max-sm:rounded-[20px]"
            loading="lazy"
          />
        </div>

        <div className="content py-[20px] flex flex-col items-start justify-around gap-[30px]">
          <div className="flex flex-col items-start gap-[10px]">
            <span className="text-base font-bold text-[#6941C6]">
              What We Offer
            </span>
            <h2 className="text-6xl font-semibold text-[#101828] text-start max-sm:text-3xl">
              Empowering Education Discover Our Story
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <OfferBox headerText="400+" contentText="Diverse Course Catalog" />
            <OfferBox headerText="600%" contentText="Expert Instructors" />
            <OfferBox headerText="10k" contentText="Flexible Learning" />
            <OfferBox headerText="200+" contentText="Certification" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
