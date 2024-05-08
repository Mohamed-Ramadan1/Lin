import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="flex align-center gap-5 my-2 hover:bg-gray-100 duration-300 ">
      <div className="w-[200px] h-[100px] bg-gray-300 p-3">
        <div className="aspect-w-16 aspect-h-full w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/vlDzYIIOYmM"
            frameborder="0"
            allowfullscreen
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="info text-end w-[100%] m-auto">
        <h2>data</h2>
      </div>
    </div>
  );
};

export default VideoItem;
