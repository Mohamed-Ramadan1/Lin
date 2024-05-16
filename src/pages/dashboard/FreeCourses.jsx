import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  CourseElement,
  CoursesHeader,
  Pagination,
} from "../../components";

function FreeCourses() {
  const { token } = useSelector((state) => state.userReducers);
  const [courses, setCourses] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await customFetch.get("/admin/freeCourses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        if (res.data.data.courses) {
          setCourses(res.data.data.courses);
          setIsMorePages(true);
        }
        if (res.data.data.courses.length === 0) setIsMorePages(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token, isChanged, currentPage, itemsPerPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setIsChanged(true);
    }
  };

  const nextPage = () => {
    if (isMorePages) {
      setCurrentPage((prev) => prev + 1);
      setIsChanged(true);
    }
  };

  return (
    <div className="p-5">
      <PageIntro pageName="Free Courses" />
      <br />

      {/* table manage table courses table  */}
      <PageContainer tableHeader={"Free Courses"}>
        <CoursesHeader />
        {courses &&
          courses.map((course, index) => (
            <CourseElement
              key={course._id}
              course={course}
              index={index + 1}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {courses && courses.length === 0 && (
          <tr>
            <td colSpan="10" className="text-center p-5 text-3xl">
              No Courses Found
            </td>
          </tr>
        )}
      </PageContainer>
      {courses && (
        <Pagination
          currentPage={currentPage}
          isMorePages={isMorePages}
          onPrevPage={prevPage}
          onNextPage={nextPage}
        />
      )}
    </div>
  );
}

export default FreeCourses;
