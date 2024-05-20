import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";
import { EnrolledCourseCard, Pagination } from "../../components";
import { Link } from "react-router-dom";

const MyEnrolledCourses = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [courses, setCourses] = useState([]);
  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
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
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        // setCourses(response.data.data.courses);
        if (response.data.data.courses) {
          setCourses(response.data.data.courses);
          setIsMorePages(response.data.data.courses.length === itemsPerPage);
        } else {
          setCourses([]);
          setIsMorePages(false);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchMyCourses();
    setLoading(false);
  }, [currentPage, itemsPerPage, token]);

  return (
    <>
      <div className="container w-full max-w-[1400px]  m-auto flex gap-10  justify-start items-start my-3">
        {courses.length > 0 && (
          <div className="grid w-full sm:grid-cols-3  sm:gap-4 md:grid-cols-3 ">
            {courses &&
              courses.map((course) => (
                <EnrolledCourseCard course={course} key={course._id} />
              ))}
          </div>
        )}
        {/* No courses display centerd text */}
        {courses.length === 0 && (
          <div className="w-full my-10 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold  ">No courses enrolled yet</h1>

            <Link
              to="/courses"
              className="text-blue-500 ml-2 mt-2 font-bold text-2xl underline"
            >
              Start Explore
            </Link>
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
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-end w-[50%]">
          <Pagination
            currentPage={currentPage}
            isMorePages={isMorePages}
            onPrevPage={() => setCurrentPage((prev) => prev - 1)}
            onNextPage={() => setCurrentPage((prev) => prev + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default MyEnrolledCourses;

{
  /* <div className="container w-full max-w-[1400px]  m-auto flex gap-10  justify-start items-start my-3">
{blogs.length > 0 && (
  <div className="grid w-full sm:grid-cols-3  sm:gap-4 md:grid-cols-3 ">
    {blogs &&
      blogs.map((blog) => (
        <BlogCart
          blog={blog}
          key={blog._id}
          setIsChanged={setIsChanged}
        />
      ))}
  </div>
)} */
}
