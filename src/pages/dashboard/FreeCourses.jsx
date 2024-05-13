import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import CoursesHeader from "../layout/dashboard/CoursesHeader";
// import CourseContainer from "../layout/dashboard/CourseContainer";
// import CourseElement from "../layout/dashboard/CourseElement";
// import { customFetch } from "../utils/customFetch";

import CoursesHeader from "../../layout/dashboard/CoursesHeader";
import CourseContainer from "../../layout/dashboard/CourseContainer";
import CourseElement from "../../layout/dashboard/CourseElement";
import { customFetch } from "../../utils/customFetch";

function FreeCourses() {
  const { token } = useSelector((state) => state.userReducers);
  const [courses, setCourses] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await customFetch.get("/admin/freeCourses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCourses(res.data.data.courses);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
    setLoading(false);
  }, [token, isChanged]);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold md-3">
        Dashboard / <span className="text-blue-600">free courses</span>
      </h1>
      <br />

      {/* table manage table courses table  */}
      <CourseContainer tableHeader={"Free Courses"}>
        <CoursesHeader />
        {courses &&
          courses.map((course, index) => (
            <CourseElement
              key={course._id}
              course={course}
              index={index + 1}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {loading && !error && !courses && (
          <p className="text-3xl text-bold text-center">Loading...</p>
        )}
        {error && !courses && (
          <p className="text-3xl text-bold text-center">{error}</p>
        )}
        {!courses && !loading && !error && (
          <p className="text-3xl text-bold text-center">No Courses Found</p>
        )}
      </CourseContainer>
    </div>
  );
}

export default FreeCourses;
