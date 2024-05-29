import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  PageIntro,
  PageContainer,
  EnrollmentElement,
  EnrollmentHeader,
  Pagination,
  LoadingWhile,
  Error,
  NotFoundData,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

const Reservations = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanged, setIsChanged] = useState(false);
  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "/enrolls",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "enrollments",
    }
  );

  useEffect(() => {
    setIsChanged(false);
    fetchData();
  }, [isChanged, token, currentPage, itemsPerPage]);

  return (
    <div className="p-5">
      <PageIntro pageName="Courses Enrollments" />

      <PageContainer tableHeader="Courses Enrollments">
        <EnrollmentHeader />

        {loading && <LoadingWhile />}

        {!loading &&
          data.length > 0 &&
          data.map((enrollment, index) => (
            <EnrollmentElement
              key={enrollment._id}
              enrollment={enrollment}
              index={index + 1}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {!loading && data.length === 0 && (
          <NotFoundData message={"No payment records Found "} />
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
};

export default Reservations;
