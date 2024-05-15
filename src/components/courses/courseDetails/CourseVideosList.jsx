import VideoListItem from "./VideoListItem";

const CourseVideosList = ({ videos }) => {
  return (
    <div className="flex w-full flex-col items-start">
      {videos &&
        videos.map((video, index) => (
          <VideoListItem key={video._id} video={video} index={index + 1} />
        ))}
    </div>
  );
};

export default CourseVideosList;
