import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CoursesHeader from "../layout/dashboard/CoursesHeader";
import CourseContainer from "../layout/dashboard/CourseContainer";
import CourseElement from "../layout/dashboard/CourseElement";
import { Link } from "react-router-dom";
function FreeCourses() {
  const { token } = useSelector((state) => state.userReducers);
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://graduation-project-backend-5vtx.onrender.com/api/v1/admin/freeCourses",
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
  console.log(courses);
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-semibold md-3">
          Dashboard / <span className="text-blue-600" >free courses</span>{" "}
        </h1> <br/>
        <Link className="bg-blue-500 text-white p-2 rounded mt-5" to={"/dashboard/createCourses"}> add new course</Link>
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
              />
            ))}
        </CourseContainer>
      </div>
    </>
  );
}

export default FreeCourses;
