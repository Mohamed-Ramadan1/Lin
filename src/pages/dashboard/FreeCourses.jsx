import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  PageIntro,
  PageContainer,
  CourseElement,
  CoursesHeader,
  Pagination,
  LoadingWhile,
  Error,
  NotFoundData,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

function FreeCourses() {
  const { token } = useSelector((state) => state.userReducers);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanged, setIsChanged] = useState(false);
  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "/admin/freeCourses",
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
    setIsChanged(false);
    fetchData();
  }, [token, currentPage, itemsPerPage, isChanged]);

  return (
    <div className="p-5">
      <PageIntro pageName="Free Courses" />
      <br />

      {/* table manage table courses table  */}
      <PageContainer tableHeader={"Free Courses"}>
        <CoursesHeader />
        {loading && <LoadingWhile />}

        {!loading &&
          data.length > 0 &&
          data.map((course, index) => (
            <CourseElement
              key={course._id}
              course={course}
              setIsChanged={setIsChanged}
            />
          ))}
        {!loading && data.length === 0 && (
          <NotFoundData message={"No Courses Found "} />
        )}
        {error && !loading && <Error errorMessage={error} />}
      </PageContainer>

      <Pagination
        currentPage={currentPage}
        isMorePages={isMorePages}
        onPrevPage={() => setCurrentPage((prev) => prev - 1)}
        onNextPage={() => setCurrentPage((prev) => prev + 1)}
      />
    </div>
  );
}

export default FreeCourses;
