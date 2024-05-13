import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { customFetch } from "../../utils/customFetch";
import { customFetch } from "../../../utils/customFetch";

import VideoBox from "./VideoBox";
import VideoItem from "./VideoItem";

const fakeUrl =
  "https://res.cloudinary.com/dfjwny742/video/upload/v1715258237/Learn_HTML_In_Arabic_2021_-__03_-_First_Project_And_First_Page_720P_HD_uldnxx.mp4";

const RenderBox = ({ courseId }) => {
  const { token, user } = useSelector((state) => state.userReducers);
  const [courseVideos, setCoursesVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (course) => {
    setSelectedVideo(course); // Update selected video state on click
  };

  useEffect(() => {
    const fetchEnrolledCourse = async () => {
      try {
        const res = await customFetch.get(`courses/${courseId}`);
        setCoursesVideos(res.data.data.course.videos);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchEnrolledCourse();
  }, [courseId, token, user]);

  console.log(selectedVideo);
  return (
    <div className="flex gap-3 flex-col md:flex-row m-5 ">
      <div className="h-[40vh] w-full md:h-[80vh]">
        <VideoBox url={selectedVideo ? selectedVideo.url : fakeUrl} />
      </div>

      <div className="basis-1/3 h-[30vh] md:h-[80vh]">
        <div className="bg-gray-800 text-yellow-500 p-3 text-center rounded-t-[30px]">
          Related Courses Videos
        </div>
        <div className="overflow-y-auto max-h-[calc(80vh-3rem)]">
          {courseVideos &&
            courseVideos.map((course, index) => (
              <VideoItem
                key={course._id}
                course={course}
                onClick={handleVideoClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RenderBox;
