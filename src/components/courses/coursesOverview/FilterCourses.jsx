import RatingFilterContainer from "./RatingFilterContainer";
import OptionList from "./OptionList";
const FilterCourses = ({ setCourses, setClearFilters }) => {
  return (
    <div className="flex flex-col gap-[10px] transition ease-in">
      <RatingFilterContainer
        titleCheckList="Course Rating"
        setCourses={setCourses}
      />
      <OptionList setCourses={setCourses} titleCheckList="Filter Options" />
      <button
        className="btn bg-blue-800 hover:bg-blue-500 text-white"
        onClick={() => setClearFilters(true)}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterCourses;
