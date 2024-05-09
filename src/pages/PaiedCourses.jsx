import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CoursesHeader from "../layout/dashboard/CoursesHeader";
import CourseContainer from "../layout/dashboard/CourseContainer";
import CourseElement from "../layout/dashboard/CourseElement";

function PaiedCourses() {
  const { token } = useSelector((state) => state.userReducers);
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "http://localhost:3000/api/v1/admin/paidCourses",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCourses(res.data.data.courses);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
    setLoading(false);
  }, [token]);
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
              />
            ))}
        </CourseContainer>
      </div>
    </>
  );
}

export default PaiedCourses;
