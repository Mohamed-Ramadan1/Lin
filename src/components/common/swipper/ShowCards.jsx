// Components
import { BtnSeeMore } from "../../ui/BtnSeeMore";
import { CardCoursPay } from "./CardCoursPay";

import "./SwiperStyle.css";

export const ShowCards = ({ CategoryName }) => {
  return (
    <div className="showCards relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px] bg-[#222]">
      <div className="container overflow-hidden  flex gap-10 flex-col justify-center items-start">
        <div className="title max-w-[1400px] m-auto w-full flex items-center justify-between">
          <h1 className="py-[5px] px-[10px] border-l-[3px] border-[#D5FF40] text-[#fff] text-[25px] font-bold">
            {CategoryName}
          </h1>

          <BtnSeeMore />
        </div>

        <div className="cards w-full flex justify-start items-start gap-[30px] max-w-[1400px] m-auto">
          <CardCoursPay />
          <CardCoursPay />
          <CardCoursPay />
          <CardCoursPay />
          <CardCoursPay />
          <CardCoursPay />
          <CardCoursPay />
          <CardCoursPay />
          <CardCoursPay />
          <CardCoursPay />
        </div>
      </div>
    </div>
  );
};
