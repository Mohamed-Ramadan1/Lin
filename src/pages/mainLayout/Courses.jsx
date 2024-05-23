import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFetch";
import {
  CourseCard,
  CoursesPageIntro,
  FilterCourses,
  Pagination,
} from "../../components";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [clearFilters, setClearFilters] = useState(false);
  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setClearFilters(false);
    const fetchCourses = async () => {
      const response = await customFetch.get("courses", {
        params: {
          page: currentPage,
          limit: itemsPerPage,
        },
      });
      if (response.data.data.courses) {
        setCourses(response.data.data.courses);
        setIsMorePages(response.data.data.courses.length === itemsPerPage);
      } else {
        setCourses([]);
        setIsMorePages(false);
      }
    };
    fetchCourses();
  }, [clearFilters, currentPage, itemsPerPage]);

  return (
    <div className="viewCoursePage  flex justify-center items-center px-[124px] py-[70px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="container max-w-[1400px] m-auto flex flex-col gap-10  justify-center items-center">
        <CoursesPageIntro />
        <div className="sub-container flex flex-col w-full md:flex-row md:gap-[10px]">
          <div className="basis-1/3 h-fit rounded-[10px] p-[10px] bg-[#F6F6F6] my-3">
            <FilterCourses
              setCourses={setCourses}
              setClearFilters={setClearFilters}
            />
          </div>

          <div className="basis-full flex flex-col gap-[20px] max-md:gap-[30px]">
            {courses &&
              courses.map((course) => (
                <CourseCard course={course} key={course._id} />
              ))}
            {courses.length === 0 && (
              <div className="w-full my-10 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold  ">No courses found</h1>
              </div>
            )}
          </div>
        </div>
        <div className="w-full ">
          <Pagination
            currentPage={currentPage}
            isMorePages={isMorePages}
            onPrevPage={() => setCurrentPage((prev) => prev - 1)}
            onNextPage={() => setCurrentPage((prev) => prev + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
