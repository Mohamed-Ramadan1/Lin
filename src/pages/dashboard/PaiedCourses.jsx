import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { customFetch } from "../../utils/customFetch";
import {
  PageIntro,
  PageContainer,
  CourseElement,
  CoursesHeader,
} from "../../components";

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
        <PageIntro pageName="Paid Courses" />
        {/* table manage table courses table  */}
        <PageContainer tableHeader={"Paid Courses"}>
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
        </PageContainer>
      </div>
    </>
  );
}

export default PaiedCourses;
