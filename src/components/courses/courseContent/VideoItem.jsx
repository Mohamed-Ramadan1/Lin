import ReactPlayer from "react-player";
const VideoItem = ({ course, onClick }) => {
  const { title, url, _id } = course;

  return (
    <div
      className="flex align-center gap-5 my-2 hover:bg-gray-100 duration-300 "
      onClick={() => onClick(course)}
    >
      <div className="w-[200px] h-[100px] bg-gray-300 p-1">
        <div className="w-full h-full ">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        </div>
      </div>
      <div className="info text-end w-[100%] m-auto p-3">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default VideoItem;
