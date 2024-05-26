import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  EnrollmentElement,
  EnrollmentHeader,
  Pagination,
} from "../../components";

const Reservations = () => {
  const [allEnrollments, setAllEnrollments] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const { token } = useSelector((state) => state.userReducers);

  useEffect(() => {
    setIsChanged(false);
    const fetchEnrollments = async () => {
      try {
        const response = await customFetch.get("enrolls", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        if (response.data.data.enrollments) {
          setAllEnrollments(response.data.data.enrollments);
          setIsMorePages(true);
        }
        if (response.data.data.enrollments.length === 0) setIsMorePages(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEnrollments();
  }, [isChanged, token, currentPage, itemsPerPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setIsChanged(true);
    }
  };

  const nextPage = () => {
    if (currentPage) {
      setCurrentPage((prev) => prev + 1);
      setIsChanged(true);
    }
  };

  return (
    <div className="p-5">
      <PageIntro pageName="Courses Enrollments" />

      <PageContainer tableHeader="Courses Enrollments">
        <EnrollmentHeader />

        {allEnrollments &&
          allEnrollments.map((enrollment, index) => (
            <EnrollmentElement
              key={enrollment._id}
              enrollment={enrollment}
              index={index + 1}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {allEnrollments.length === 0 && (
          <tr>
            <td colSpan="9" className="text-center p-5 text-3xl">
              No enrollments found
            </td>
          </tr>
        )}
      </PageContainer>
      {allEnrollments && (
        <Pagination
          currentPage={currentPage}
          isMorePages={isMorePages}
          onPrevPage={prevPage}
          onNextPage={nextPage}
        />
      )}
    </div>
  );
};

export default Reservations;
