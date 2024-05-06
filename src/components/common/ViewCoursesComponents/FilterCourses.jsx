import React from "react";
// import InputCheckBox from '../../ui/InputCheckBox'
import CheckboxeList from "./CheckboxeList";
import OptionList from "./OptionList";

const FilterCourses = () => {
  return (
    <div className="flex flex-col gap-[10px] transition ease-in">
      <CheckboxeList titleCheckList="Video Ratings" />
      <OptionList titleCheckList="options" />
    </div>
  );
};

export default FilterCourses;
