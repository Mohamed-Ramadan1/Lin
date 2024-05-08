import Video from "./Video";

const ListVideos = ({ videos }) => {
  return (
    <div className="flex w-full flex-col items-start">
      {videos &&
        videos.map((video, index) => (
          <Video key={video._id} video={video} index={index + 1} />
        ))}
    </div>
  );
};

export default ListVideos;
