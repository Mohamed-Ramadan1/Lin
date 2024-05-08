const VideoBox = () => {
  return (
    <div className="w-full p-3 border bg-gray-800 rounded-[15px]">
      <div class="aspect-w-16 aspect-h-full w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/vlDzYIIOYmM"
          frameborder="0"
          allowfullscreen
          class="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBox;
