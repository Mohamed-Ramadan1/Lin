import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { customFetch } from "../../utils/customFetch";
import RenderBox from "../../components/courses/courseContent/RenderBox";
import ReviewsContainer from "../../components/courses/courseReviews/ReviewsContainer";

function MyPaiedCourse() {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { courseId } = useParams();
  const { token, user } = useSelector((state) => state.userReducers);

  useEffect(() => {
    const fetchEnrolledCourse = async () => {
      try {
        const res = await customFetch.get(`enrolls/user/${courseId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.data.enrollments.user._id === user._id) {
          setIsEnrolled(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchEnrolledCourse();
  }, [courseId, token, user]);
  return (
    <>
      {isEnrolled ? (
        <>
          <RenderBox courseId={courseId} />
          <ReviewsContainer />
        </>
      ) : (
        <div className="container flex justify-center items-center h-[80vh] flex-col">
          <h1 className="text-4xl ">You are not enrolled in this course</h1>
          <Link
            to={`/courses/${courseId}`}
            className="text-2xl text-blue-800 mt-4 underline "
          >
            Enroll now
          </Link>
        </div>
      )}
    </>
  );
}

export default MyPaiedCourse;
