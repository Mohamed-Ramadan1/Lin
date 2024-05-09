import React from "react";
import ReactPlayer from "react-player";
const VideoItem = ({ course }) => {
  const { title, url, _id } = course;

  console.log(course);
  return (
    // this layout is not correct where when the vide is bigger size its statrt to overflow the container

    <div className="flex align-center gap-5 my-2 hover:bg-gray-100 duration-300 ">
      <div className="w-[200px] h-[100px] bg-gray-300 p-1">
        <div className="w-full h-full">
          <ReactPlayer url={url} playing={false} />
        </div>
      </div>
      <div className="info text-end w-[100%] m-auto p-3">
        <h2>{title}</h2>
      </div>
    </div>

    // <div className="flex align-center gap-5 my-2 hover:bg-gray-100 duration-300 ">
    //   <div className="w-[200px] h-[100px] bg-gray-300 p-1">
    //     <div className="w-full h-full">
    //       <ReactPlayer playing={false} />
    //     </div>
    //   </div>
    //   <div className="info text-end w-[100%] m-auto p-3">
    //     <h2>{title}</h2>
    //   </div>
    // </div>
  );
};

export default VideoItem;
