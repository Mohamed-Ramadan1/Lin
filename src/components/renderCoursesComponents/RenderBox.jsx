import { useState, useEffect } from "react";
import VideoBox from "./VideoBox";
import VideoItem from "./VideoItem";
import { useSelector } from "react-redux";
import axios from "axios";
const RenderBox = ({ courseId }) => {
  const { token, user } = useSelector((state) => state.userReducers);
  const [course, setCourses] = useState([]);
  useEffect(() => {
    const fetchEnrolledCourse = async () => {
      try {
        const res = await axios.get(
          `https://graduation-project-backend-5vtx.onrender.com/api/v1/courses/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCourses(res.data.data.course.videos);
        // i want to check if there enrolled course or not and based set the value of is enrolled
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchEnrolledCourse();
  }, [courseId, token, user]);

  // console.log(course.videos);
  return (
    <div className="flex gap-3 flex-col md:flex-row m-5 ">
      <div className="h-[40vh] w-full md:h-[80vh]">
        <VideoBox />
      </div>

      <div className="basis-1/3 h-[30vh] md:h-[80vh]">
        <div className="bg-gray-800 text-yellow-500 p-3 text-center rounded-t-[30px]">
          Related Courses Videos
        </div>
        <div className="overflow-y-auto max-h-[calc(80vh-3rem)]">
          {course &&
            course.map((cour, index) => (
              <VideoItem key={cour._id} course={cour} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RenderBox;
