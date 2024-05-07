import React from "react";

import Avatar from "../../../assets/Avatar.png";

const Instructor = ({ instructor }) => {
  const {
    name,
    email,
    description,
    specialization,
    rating,
    experience,
    courses,
  } = instructor;
  return (
    <div className="instructor flex flex-col items-start gap-6">
      <h2 className="text-2xl text-[#222] font-bold">Instructor</h2>

      <div className="container flex flex-col items-start gap-4">
        <div className="info-Instructor flex items-end gap-3">
          <img
            src={Avatar}
            alt=""
            className="w-[60px] h-[60px] object-contain"
          />
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-2xl font-bold text-[#222]">{name}</h3>
            <span className="text-base">{specialization}</span>
          </div>
        </div>

        <div className="nore-info">
          <div className="more-info flex items-center">
            <span className="font-medium text-[#222] bg-[#ecdeff] px-[15px] py-[10px] border-r-[2px] border-r-[#9747FF]">
              {rating} Instructor Rating
            </span>
            <span className="font-medium text-[#222] bg-[#ecdeff] px-[15px] py-[10px] ">
              {experience} years of experience
            </span>

            <span className="font-medium text-[#222] bg-[#ecdeff] px-[15px] py-[10px] ">
              {courses || 0} Courses
            </span>
          </div>
        </div>

        <div className="desc">
          <p className="text-lg font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
