import VideoBox from "./VideoBox";
import VideoItem from "./VideoItem";
const RenderBox = () => {
  return (
    <div className="flex gap-3 flex-col md:flex-row m-5 ">
      <VideoBox />

      <div className="basis-1/3 ">
        <div className="bg-gray-800 text-yellow-500 p-3 text-center rounded-t-[30px]">
          Related Cours Videos
        </div>

        <VideoItem />
      </div>
    </div>
  );
};

export default RenderBox;
