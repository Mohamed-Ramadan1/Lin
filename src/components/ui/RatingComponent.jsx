import React from "react";

const RatingComponent = ({ totalReviews, rating }) => {
  return (
    <div>
      <div className="rating flex gap-[15px] justify-center items-center max-md:gap-2 ">
        <h3 className="text-[#444444] text-[17px] font-bold max-md:text-[13px] block">
          Average Rating : {rating}
        </h3>

        <div className="block">
          Total Reviews :
          <span className="text-[#5e5e5e] max-md:text-[10px]">
            ( {totalReviews} )
          </span>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
