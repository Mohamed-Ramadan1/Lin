const VideoBox = () => {
  const url =
    "https://res.cloudinary.com/dfjwny742/video/upload/v1715258237/Learn_HTML_In_Arabic_2021_-__03_-_First_Project_And_First_Page_720P_HD_uldnxx.mp4";

  return (
    <iframe
      class="w-full h-full rounded-[30px]"
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>

    // <div className="w-full h-full rounded-[30px]">
    //   <ReactPlayer url={url} playing={true} controls={true} />
    // </div>
  );
};

export default VideoBox;
