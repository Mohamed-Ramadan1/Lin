import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../../utils/customFetch";

import {
  CourseContentDetails,
  CourseThumbnail,
  CourseEnrollmentDetails,
  LoadingSpinner,
} from "../../components";
import useScreenSize from "../../hooks/useScreenSize";
const DetailsCourse = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { isLargeScreen } = useScreenSize();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await customFetch.get(`/courses/${courseId}`);
        setCourse(response.data.data.course);
        setEnrollments(response.data.data.enrollments);
        setLoading(false);
      } catch (error) {
        // setError(error.response.data.message);
        console.log(error);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);
  if (loading) return <LoadingSpinner />;
  if (error) return <h1>{error}</h1>;
  return (
    <div className="detailsCourse relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="container flex gap-[50px] flex-col items-center justify-center">
        <div className="w-full">
          <CourseThumbnail
            photo={course.photo}
            students={enrollments || 0}
            instructor={course.instructor[0]}
          />
        </div>

        <div className="flex w-full gap-[50px] ">
          <CourseContentDetails course={course} />

          {isLargeScreen && (
            <CourseEnrollmentDetails
              duration={course.duration}
              price={course.price}
              paymentModel={course.paymentModel}
              courseId={course._id}
              videos={course.videos}
              financialAid={course.financialAid}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
