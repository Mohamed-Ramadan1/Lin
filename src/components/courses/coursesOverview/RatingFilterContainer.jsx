import { useState } from "react";
import RatingStarButton from "./RatingStarButton";
import RatingFilterBox from "./RatingFilterBox";
import { customFetch } from "../../../utils/customFetch";
import { toast } from "react-toastify";

const RatingFilterContainer = ({ titleCheckList, setCourses }) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleList = () => setOpen((prev) => !prev);

  const handleFilterCourses = async (value) => {
    try {
      const response = await customFetch.get("courses", {
        params: {
          "averageRating[gte]": value,
          "averageRating[lt]": value + 1,
        },
      });
      setCourses(response.data.data.courses);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.log(error.response?.data?.message);
    }
  };

  const handleRatingClick = (value) => {
    if (selectedValue === value) {
      setSelectedValue(null);
      setCourses([]); // Clear the courses if none is selected
    } else {
      setSelectedValue(value);
      handleFilterCourses(value);
    }
  };

  return (
    <div className="list flex flex-col gap-[15px]">
      <div
        className="title cursor-pointer py-[10px] px-[5px] border-b-[1px] border-[#eee] flex justify-between items-center"
        onClick={toggleList}
      >
        <h1 className="text-[#222] text-2xl select-none">{titleCheckList}</h1>
        <div className={open ? "icon hidden" : "icon"}>
          <svg
            width="23px"
            height="23px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#212121"
          >
            <path
              d="M6 12H12M18 12H12M12 12V6M12 12V18"
              stroke="#212121"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className={!open ? "icon hidden" : "icon"}>
          <svg
            width="23px"
            height="23px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#212121"
          >
            <path
              d="M6 12H18"
              stroke="#212121"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className="list flex flex-col justify-start gap-[15px] transition ease-in-out"
        style={{ maxHeight: open ? "100%" : "0", overflow: "hidden" }}
      >
        {[5, 4, 3, 2, 1].map((rating) => (
          <RatingFilterBox
            key={rating}
            value={rating}
            isChecked={selectedValue === rating}
            onClick={() => handleRatingClick(rating)}
          >
            {Array(rating).fill(<RatingStarButton />)}
          </RatingFilterBox>
        ))}
      </div>
    </div>
  );
};

export default RatingFilterContainer;
