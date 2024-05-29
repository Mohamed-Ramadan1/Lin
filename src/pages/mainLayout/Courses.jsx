import { useEffect, useState } from "react";
import {
  CourseCard,
  CoursesPageIntro,
  FilterCourses,
  Pagination,
  ErrorMessage,
  LoadingSpinner,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [clearFilters, setClearFilters] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "courses",
    {
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "courses",
    }
  );
  useEffect(() => {
    setClearFilters(false);
    fetchData();
  }, [clearFilters, currentPage, itemsPerPage]);

  useEffect(() => {
    setClearFilters(false);
    setCourses(data);
  }, [data]);

  return (
    <div className="viewCoursePage  flex justify-center items-center px-[124px] py-[70px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="container max-w-[1400px] m-auto flex flex-col gap-10  justify-center items-center">
        <CoursesPageIntro />
        <div className="sub-container flex flex-col w-full md:flex-row md:gap-[10px]">
          <div className="basis-1/3 h-fit rounded-[10px] p-[10px] bg-[#F6F6F6] my-3">
            <FilterCourses
              setCourses={setCourses}
              setClearFilters={setClearFilters}
              clearFilters={clearFilters}
            />
          </div>

          <div className="basis-full flex flex-col gap-[20px] max-md:gap-[30px]">
            {courses &&
              !loading &&
              courses.map((course) => (
                <CourseCard course={course} key={course._id} />
              ))}
            {courses.length === 0 && !loading && (
              <div className="w-full my-10 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold  ">No courses found</h1>
              </div>
            )}
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage errorMessage={error} />}
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
