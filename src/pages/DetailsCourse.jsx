import React from "react";

import ThumbnailCourse from "../components/common/DetailsCourseComponents/ThumbnailCourse";
import DetailsCourseContent from "../components/common/DetailsCourseComponents/DetailsCourseContent";
import Salary from "../components/common/DetailsCourseComponents/Salary";

const DetailsCourse = () => {
  return (
    <div className="detailsCourse relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="container flex gap-[50px] flex-col items-center justify-center">
        <div className="w-full">
          <ThumbnailCourse />
        </div>

        <div className="flex w-full gap-[50px]">
          <DetailsCourseContent />

          <Salary />
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
