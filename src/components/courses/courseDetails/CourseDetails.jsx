const CourseDetails = ({ duration, videos }) => {
  return (
    <div className="courseVideos">
      <div className="container">
        <div className="flex gap-4 flex-col items-start">
          <h2 className="text-2xl text-[#222] font-bold">Course content</h2>
          <div className="more-info flex items-center">
            <span className="font-medium text-[#222] px-[10px] py-[1px] border-r-[2px] border-r-[#9747FF]">
              {videos.length} sections
            </span>
            <span className="font-medium text-[#222] px-[10px] py-[1px] border-r-[2px] border-r-[#9747FF]">
              {duration} hours total length
            </span>
            <span className="font-medium text-[#222] px-[10px] py-[1px]">
              {videos.length || 0} lectures
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
