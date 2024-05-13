import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// import { customFetch } from "../utils/customFetch";
// import CoursesHeader from "../layout/dashboard/CoursesHeader";
// import CourseContainer from "../layout/dashboard/CourseContainer";
// import CourseElement from "../layout/dashboard/CourseElement";

import { customFetch } from "../../utils/customFetch";
import CoursesHeader from "../../layout/dashboard/CoursesHeader";
import CourseContainer from "../../layout/dashboard/CourseContainer";
import CourseElement from "../../layout/dashboard/CourseElement";

function PaiedCourses() {
  const { token } = useSelector((state) => state.userReducers);
  const [courses, setCourses] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsChanged(false);
      try {
        setLoading(true);
        const res = await customFetch.get("/admin/paidCourses", {
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
    <>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">
          Dashboard / <span className="text-blue-600">Paid courses</span>{" "}
        </h1>
        {/* table manage table courses table  */}
        <CourseContainer tableHeader={"Paid Courses"}>
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
          {/* handel no courses case */}
          {courses && courses.length === 0 && (
            <tr>
              <td colSpan="10" className="text-center p-5">
                No Courses Found
              </td>
            </tr>
          )}

          {/* handel loading case */}
          {loading && (
            <tr>
              <td colSpan="10" className="text-center p-5">
                Loading...
              </td>
            </tr>
          )}

          {/* handel error case */}
          {error && (
            <tr>
              <td colSpan="10" className="text-center p-5">
                Error Fetching Courses
              </td>
            </tr>
          )}
        </CourseContainer>
      </div>
    </>
  );
}

export default PaiedCourses;
