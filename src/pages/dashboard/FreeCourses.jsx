import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { customFetch } from "../../utils/customFetch";
import {
  PageIntro,
  PageContainer,
  CourseElement,
  CoursesHeader,
} from "../../components";

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
      <PageIntro pageName="Free Courses" />
      <br />

      {/* table manage table courses table  */}
      <PageContainer tableHeader={"Free Courses"}>
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
      </PageContainer>
    </div>
  );
}

export default FreeCourses;
