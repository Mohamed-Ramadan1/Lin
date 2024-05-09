import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RenderBox from "../components/renderCoursesComponents/RenderBox";
import ReviewsContainer from "../components/renderCoursesComponents/ReviewsContainer";
function MyPaiedCourse() {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { courseId } = useParams();
  const { token, user } = useSelector((state) => state.userReducers);

  useEffect(() => {
    const fetchEnrolledCourse = async () => {
      try {
        const res = await axios.get(
          `https://graduation-project-backend-5vtx.onrender.com/api/v1/enrolls/user/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // i want to check if there enrolled course or not and based set the value of is enrolled
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
