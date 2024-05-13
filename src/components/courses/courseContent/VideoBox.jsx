import ReactPlayer from "react-player";
const VideoBox = (props) => {
  return (
    <div className="w-full h-full rounded-[30px]">
      <ReactPlayer
        url={props.url}
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
  );
};

export default VideoBox;
