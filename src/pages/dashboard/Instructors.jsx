import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  InstructorElement,
  InstructorTableHeader,
  Pagination,
  LoadingWhile,
  Error,
  NotFoundData,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

const Instructors = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanged, setIsChanged] = useState(false);
  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "/admin/getAllInstructors",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "instructors",
    }
  );
  useEffect(() => {
    setIsChanged(false);
    fetchData();
  }, [token, isChanged, currentPage, itemsPerPage]);

  return (
    <div className="p-5">
      <PageIntro pageName="Instructors" />
      <PageContainer tableHeader="Instructors">
        <InstructorTableHeader />
        {loading && <LoadingWhile />}

        {!loading &&
          data.length > 0 &&
          data.map((instructor, index) => (
            <InstructorElement
              key={instructor._id}
              index={index + 1 + (currentPage - 1) * itemsPerPage}
              instructor={instructor}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {!loading && data.length === 0 && (
          <NotFoundData message={"No instructors Found "} />
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

export default Instructors;
