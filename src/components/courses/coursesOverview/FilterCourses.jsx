import RatingFilterContainer from "./RatingFilterContainer";
import OptionList from "./OptionList";
const FilterCourses = ({ setCourses, setClearFilters, clearFilters }) => {
  return (
    <div className="flex flex-col gap-[10px] transition ease-in">
      <RatingFilterContainer
        titleCheckList="Course Rating"
        setCourses={setCourses}
        clearFilters={clearFilters}
      />
      <OptionList
        setCourses={setCourses}
        titleCheckList="Filter Options"
        clearFilters={clearFilters}
      />

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
