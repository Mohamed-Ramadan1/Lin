import React from "react";
import FilledStar from "./FilledStar";
import NotFilledStar from "./NotFilledStar";

const RatingStars = ({ rating }) => {
  // Calculate number of full stars (integer part of rating)
  const fullStars = Math.min(Math.round(rating), 5); // Limit to a maximum of 5 full stars
  // Calculate percentage of the last star to be filled
  const decimalPart = rating - fullStars;
  const lastStarPercentage = decimalPart > 0 ? Math.ceil(decimalPart * 100) : 0;

  // Array to hold star components (up to a maximum of 5 stars)
  const stars = [];

  // Add full stars to the array
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FilledStar key={`star-${i}`} />);
  }

  // Add last star with percentage filled based on lastStarPercentage
  if (fullStars < 5 && lastStarPercentage > 0) {
    stars.push(
      <div
        key="last-star"
        style={{
          display: "inline-block",
          position: "relative",
          width: "16px",
          height: "16px",
        }}
      >
        <FilledStar
          style={{
            position: "absolute",
            clipPath: `inset(0 ${100 - lastStarPercentage}% 0 0)`,
            width: "16px",
            height: "16px",
          }}
        />
        {/* <NotFilledStar
          style={{ position: "absolute", width: "16px", height: "16px" }}
        /> */}
      </div>
    );
  }

  // Add remaining empty stars to reach a maximum of 5 stars
  const remainingStars = Math.max(5 - stars.length, 0); // Ensure remainingStars is non-negative
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<NotFilledStar key={`empty-star-${fullStars + i}`} />);
  }

  return <div style={{ display: "flex" }}>{stars}</div>;
};

export default RatingStars;
