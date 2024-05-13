import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";
import { EnrolledCourseCard } from "../../components";

const MyEnrolledCourses = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        setLoading(true);
        const response = await customFetch.get("users/me/courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCourses(response.data.data.courses);
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchMyCourses();
    setLoading(false);
  }, []);

  return (
    <div className="container w-full max-w-[1400px]  m-auto flex gap-10  justify-start items-start my-3">
      {courses &&
        courses.map((course) => (
          <EnrolledCourseCard course={course} key={course._id} />
        ))}

      {/* No courses display centerd text */}
      {!courses && (
        <div className="w-full flex justify-center items-center">
          <h1 className="text-2xl font-bold">No courses enrolled yet</h1>
        </div>
      )}

      {/* Loading spinner */}
      {loading && (
        <div className="w-full flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      {/* Error message */}

      {error && (
        <div className="w-full flex justify-center items-center">
          <h1 className="text-2xl font-bold text-red-500">{error}</h1>
        </div>
      )}
    </div>
  );
};

export default MyEnrolledCourses;
