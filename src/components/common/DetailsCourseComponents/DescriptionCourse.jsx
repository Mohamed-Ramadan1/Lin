import React from "react";

const DescriptionCourse = ({ description }) => {
  return (
    <div className="description">
      <div className="container w-full flex flex-col items-start gap-4">
        <h2 className="text-2xl text-[#222] font-bold">Description</h2>

        <div className="info">
          <p className="text-lg font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCourse;
