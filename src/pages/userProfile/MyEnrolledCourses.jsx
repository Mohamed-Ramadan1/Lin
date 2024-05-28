import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  EnrolledCourseCard,
  Pagination,
  EmptyItems,
  ErrorMessage,
  LoadingSpinner,
  ProfilePageContainer,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

const MyEnrolledCourses = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "users/me/courses",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "courses",
    }
  );

  useEffect(() => {
    fetchData();
  }, [currentPage, itemsPerPage, token]);

  console.log(data);
  return (
    <>
      <ProfilePageContainer>
        {data.length > 0 && (
          <div className="grid w-full sm:grid-cols-3  sm:gap-4 md:grid-cols-3 ">
            {data &&
              data.map((course) => (
                <EnrolledCourseCard course={course} key={course._id} />
              ))}
          </div>
        )}

        {data.length === 0 && !loading && (
          <EmptyItems
            headerText={"No courses enrolled yet"}
            linkText={" Start Explore"}
            toUrl="/courses"
          />
        )}

        {/* Loading spinner */}
        {loading && <LoadingSpinner />}

        {error && !loading && <ErrorMessage errorMessage={error} />}
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
