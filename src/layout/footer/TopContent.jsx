import React from "react";

const TopContent = () => {
  return (
    <div className="content-top relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px] bg-[#222]">
      <div className="container max-w-[1400px] m-auto gap-10 flex justify-between items-start max-md:flex-col">

        <div className="info w-[50%] max-lg:w-[100%] flex flex-col items-start gap-[32px]">

          <h1 className="text-4xl font-bold text-[#fff]">
            Start learning with 67.1k students around the world.
          </h1>

          <div className="btns flex flex-wrap justify-start items-start gap-[20px]">
            <a href="" className="px-[24px] py-[10px] text-[#fff] bg-[#9747FF]">
              Join the Family
            </a>
            <a href="" className="px-[24px] py-[10px] text-[#fff] bg-[#2C2C2C]">
              Browse all courses
            </a>
          </div>
        </div>

        <div className="info flex gap-[70px] flex-wrap items-center justify-between">

          <div className="flex flex-col gap-[10px] items-start">
            <h1 className="text-4xl text-[#fff] font-bold ">6.3k</h1>
            <span className="text-xl text-slate-200" >Online courses</span>
          </div>

          <div className="flex flex-col gap-[10px] items-start">
            <h1 className="text-4xl text-[#fff] font-bold ">26k</h1>
            <span className="text-xl text-slate-200" >Certified Instructor</span>
          </div>

          <div className="flex flex-col gap-[10px] items-start">
            <h1 className="text-4xl text-[#fff] font-bold ">99.9%</h1>
            <span className="text-xl text-slate-200" >Sucess Rate</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopContent;
