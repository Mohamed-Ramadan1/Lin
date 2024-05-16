import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  InstructorRequestsHeader,
  InstructorsApplicationElement,
  Pagination,
} from "../../components";

const ManageInstructorsRequests = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [isMorePages, setIsMorePages] = useState(false);

  useEffect(() => {
    const fetchInstructors = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await customFetch.get("instructorApplications", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        const fetchedInstructors = response.data.data.applications;

        if (fetchedInstructors.length < itemsPerPage) {
          setIsMorePages(false);
        } else {
          setIsMorePages(true);
        }

        setInstructors(fetchedInstructors);
      } catch (error) {
        setError(error.message || "Failed to fetch instructor requests");
      } finally {
        setLoading(false);
        setIsChanged(false);
      }
    };

    fetchInstructors();
  }, [token, isChanged, currentPage, itemsPerPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (isMorePages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="p-5">
      <PageIntro pageName="Instructors Requests" />
      <PageContainer tableHeader="Instructors requests">
        <InstructorRequestsHeader />
        {loading ? (
          <div className="flex justify-center items-center h-10">
            <p className="text-2xl font-semibold">Loading...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-10">
            <p className="text-2xl font-semibold text-red-500">{error}</p>
          </div>
        ) : instructors.length > 0 ? (
          instructors.map((instructor, index) => (
            <InstructorsApplicationElement
              key={instructor._id}
              instructor={instructor}
              index={index + 1 + (currentPage - 1) * itemsPerPage}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-10">
            <p className="text-2xl font-semibold">
              No instructor requests found
            </p>
          </div>
        )}
      </PageContainer>
      <Pagination
        currentPage={currentPage}
        isMorePages={isMorePages}
        onPrevPage={prevPage}
        onNextPage={nextPage}
      />
    </div>
  );
};

export default ManageInstructorsRequests;
