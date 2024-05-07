// Framer Motion
import { motion } from "framer-motion";
import CoursesPageIntro from "../components/common/ViewCoursesComponents/CoursesPageIntro";
// Components
import CardCourse from "../components/common/ViewCoursesComponents/CardCourse";
import FilterCourses from "../components/common/ViewCoursesComponents/FilterCourses";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCourses } from "./../store/courseSlice";
import { Link } from "react-router-dom";

const ViewCourses = () => {
  const dispatch = useDispatch();
  const { courses, error, loading } = useSelector(
    (state) => state.courseReducers
  );

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  return (
    <div className="viewCoursePage relative flex justify-center items-center px-[124px] py-[70px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="container max-w-[1400px] m-auto flex flex-col gap-10  justify-center items-center">
        <CoursesPageIntro />
        <div className="sub-container flex flex-col w-full md:flex-row md:gap-[10px]">
          <div className="basis-1/3 h-fit rounded-[10px] p-[10px] bg-[#F6F6F6] my-3">
            <FilterCourses />
          </div>

          <div className="basis-full flex flex-col gap-[20px] max-md:gap-[30px]">
            {courses &&
              courses.map((course) => (
                <Link key={course._id} to={`/courses/${course._id}`}>
                  <CardCourse course={course} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourses;
