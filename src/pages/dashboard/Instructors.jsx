import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  InstructorElement,
  InstructorTableHeader,
  Pagination,
} from "../../components";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isChanged, setIsChanged] = useState(false);

  const { token } = useSelector((state) => state.userReducers);

  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsChanged(false);
    const fetchInstructors = async () => {
      setLoading(true);
      try {
        const response = await customFetch.get("admin/getAllInstructors", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });
        const fetchedInstructors = response.data.data.instructors;

        if (fetchedInstructors) {
          setInstructors(fetchedInstructors);
          setIsMorePages(fetchedInstructors.length === itemsPerPage);
        } else {
          setInstructors([]);
          setIsMorePages(false);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
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
      <PageIntro pageName="Instructors" />
      <PageContainer tableHeader="Instructors">
        <InstructorTableHeader />

        {loading ? (
          <tr>
            <td colSpan="10" className="text-center p-5 text-3xl">
              Loading........
            </td>
          </tr>
        ) : instructors.length > 0 ? (
          instructors.map((instructor, index) => (
            <InstructorElement
              key={instructor._id}
              index={index + 1 + (currentPage - 1) * itemsPerPage}
              instructor={instructor}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))
        ) : (
          <tr>
            <td colSpan="10" className="text-center p-5 text-3xl">
              No Instructors Found
            </td>
          </tr>
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

export default Instructors;
