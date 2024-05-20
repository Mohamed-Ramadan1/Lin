import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        console.log(error.response.data.message);
      }
    };
    fetchEnrolledCourse();
  }, [courseId, token, user]);

  if (!isEnrolled) {
    return (
      <div className="container flex justify-center items-center h-[80vh]">
        <h1 className="text-4xl">You are not enrolled in this course</h1>
      </div>
    );
  }

  return (
    <>
      <RenderBox courseId={courseId} />
      <ReviewsContainer />
    </>
  );
}

export default MyPaiedCourse;
