import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";
import {
  EnrolledCourseCard,
  Pagination,
  EmptyItems,
  ErrorMessage,
  LoadingSpinner,
  ProfilePageContainer,
} from "../../components";
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
      <ProfilePageContainer>
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
          <EmptyItems
            headerText={"No courses enrolled yet"}
            linkText={" Start Explore"}
            toUrl="/courses"
          />
        )}

        {/* Loading spinner */}

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage errorMessage={error} />}
      </ProfilePageContainer>
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
