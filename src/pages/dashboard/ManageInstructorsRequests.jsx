import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  PageIntro,
  PageContainer,
  InstructorRequestsHeader,
  InstructorsApplicationElement,
  Pagination,
  LoadingWhile,
  Error,
  NotFoundData,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

const ManageInstructorsRequests = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanged, setIsChanged] = useState(false);
  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "/instructorApplications",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "applications",
    }
  );
  useEffect(() => {
    setIsChanged(false);
    fetchData();
  }, [token, currentPage, itemsPerPage, isChanged]);

  return (
    <div className="p-5">
      <PageIntro pageName="Instructors Requests" />
      <PageContainer tableHeader="Instructors requests">
        <InstructorRequestsHeader />
        {loading && <LoadingWhile />}

        {!loading &&
          data.length > 0 &&
          data.map((instructor, index) => (
            <InstructorsApplicationElement
              key={instructor._id}
              instructor={instructor}
              setIsChanged={setIsChanged}
            />
          ))}
        {!loading && data.length === 0 && (
          <NotFoundData message={"No instructors requests Found "} />
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

export default ManageInstructorsRequests;
