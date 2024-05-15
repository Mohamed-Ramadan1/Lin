import Avatar from "../../../assets/Avatar.png";

import "./ThumbnailCourse.css";

const ThumbnailCourse = ({ photo, students, instructor }) => {
  return (
    <div className="thumbnail overflow-hidden relative w-full h-[400px] max-md:h-[300px]">
      <img
        src={photo}
        alt=""
        className="w-full h-full object-cover rounded-3xl"
      />

      <div className="button-content z-10 absolute p-[20px] bottom-0 w-full flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-3">
        <div className="image-teatcher flex gap-3 justify-center items-center">
          <img
            src={Avatar}
            alt=""
            className="w-[50px] h-[50%] rounded-[50px]"
          />
          <div className="info">
            <h2 className="text-2xl font-bold text-[#fff]">
              {instructor.name || "No Name"}
            </h2>
            <span className="text-base text-[#fff]">
              {instructor.specialization}
            </span>
          </div>
        </div>
        <div className="num-student flex gap-3 justify-center items-center">
          <div className="icon">
            <svg
              width="23px"
              height="23px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#D5FF40"
            >
              <path
                d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20"
                stroke="#D5FF40"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M13 14V14C13 11.2386 15.2386 9 18 9V9C20.7614 9 23 11.2386 23 14V14.5"
                stroke="#D5FF40"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                stroke="#D5FF40"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
                stroke="#D5FF40"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div>
            <span className="text-[20px] text-[#fff]">{students || 0} </span>{" "}
            <span className="text-[20px] text-[#fff]">students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCourse;
