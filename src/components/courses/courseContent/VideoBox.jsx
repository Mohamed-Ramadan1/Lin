import ReactPlayer from "react-player";
import CurrentVideoInformation from "./CurrentVideoInformation";

const VideoBox = ({ selectedVideoInformation }) => {
  return (
    <div className="w-full h-full rounded-[30px] ">
      <div className="h-[90%]">
        <ReactPlayer
          url={selectedVideoInformation.url}
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
      <div className=" h-[10%]">
        <CurrentVideoInformation
          selectVideoInformation={selectedVideoInformation}
        />
      </div>
    </div>
  );
};

export default VideoBox;
