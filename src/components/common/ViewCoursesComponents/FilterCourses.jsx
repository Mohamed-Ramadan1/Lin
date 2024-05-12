import React from "react";
import CheckboxeList from "./CheckboxeList";
import OptionList from "./OptionList";

const FilterCourses = ({ setCourses }) => {
  return (
    <div className="flex flex-col gap-[10px] transition ease-in">
      <CheckboxeList titleCheckList="Video Ratings" />
      <OptionList setCourses={setCourses} titleCheckList="options" />
    </div>
  );
};

export default FilterCourses;
