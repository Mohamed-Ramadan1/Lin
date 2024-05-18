import React from "react";

const data = [
  { text: "Technology & IT" },
  { text: "Business & Entrepreneurship" },
  { text: "Creative Arts" },
  { text: "Personal Development" },
  { text: "Technology & IT" },
  { text: "Technology & IT" },
  { text: "Personal Development" },
  { text: "Technology & IT" },
  { text: "Personal Development" },
  { text: "Technology & IT" },
  { text: "Technology & IT" },
  { text: "Personal Development" },
  { text: "Technology & IT" },
];

export const TopCourses = () => {
  return (
    <div className="topCourses relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="container max-w-[1400px] m-auto flex gap-[50px] flex-col justify-between items-start max-md:flex-col">
        <div className="title flex flex-col items-start gap-[15px]">
          <h1 className="text-4xl font-bold text-[#222]">
            Explore Our Top Courses
          </h1>
          <h3 className="text-2xl font-bold text-[#222]">
            Featured Topics Across{" "}
            <span className="px-[20px] py-[6px] rounded-[100px] bg-[#E7E7E7] text-[18px]">
              Categories
            </span>
          </h3>
        </div>

        <div className="categories flex transition ease-in gap-[15px] flex-wrap items-start justify-start">
          {data.map((item, index) => (
            <span
              key={index}
              className="px-[25px] py-[10px] flex items-center justify-center gap-[10px] transition ease-out  hover:bg-[#9747FF] hover:text-[#fff] bg-[#222] text-[#CBFF12] rounded-[100px] "
            >
              {item.text}
              <div className="iconText hidden">
                <svg
                  width="23px"
                  height="23px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#b8b8b8"
                >
                  <path
                    d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                    stroke="#b8b8b8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
