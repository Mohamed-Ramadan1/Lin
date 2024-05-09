import ReactPlayer from "react-player";

const VideoBox = () => {
  const url =
    "https://res.cloudinary.com/dfjwny742/video/upload/v1715241511/Learn_HTML_In_Arabic_2021_-__06_-_Doctype_And_Standard_And_Quirks_Mode_720P_HD_iswt2h.mp4";

  return (
    // <iframe
    //   class="w-full h-full rounded-[30px]"
    //   src="https://res.cloudinary.com/dfjwny742/video/upload/v1715241511/Learn_HTML_In_Arabic_2021_-__06_-_Doctype_And_Standard_And_Quirks_Mode_720P_HD_iswt2h.mp4"
    //   title="YouTube video player"
    //   frameborder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //   referrerpolicy="strict-origin-when-cross-origin"
    //   allowfullscreen
    // ></iframe>

    <div className="w-full h-full rounded-[30px]">
      <ReactPlayer url={url} playing={true} controls={true} />
    </div>
  );
};

export default VideoBox;
