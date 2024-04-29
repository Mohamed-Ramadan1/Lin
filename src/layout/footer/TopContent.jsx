import { Link } from "react-router-dom";
import InfoBox from "./InfoBox";

const TopContent = () => {
  return (
    <div className="content-top relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px] bg-[#222]">
      <div className="container max-w-[1400px] m-auto gap-10 flex justify-between items-start max-md:flex-col">
        <div className="info w-[50%] max-lg:w-[100%] flex flex-col items-start gap-[32px]">
          <h2 className="text-4xl font-bold text-[#fff]">
            Start learning with 67.1k students around the world.
          </h2>

          <div className="btns flex flex-wrap justify-start items-start gap-[20px]">
            <Link
              to="/signup"
              className="px-[24px] py-[10px] text-[#fff] bg-[#9747FF]"
            >
              Join the Family
            </Link>
            <Link
              to="/courses"
              className="px-[24px] py-[10px] text-[#fff] bg-[#2C2C2C]"
            >
              Browse all courses
            </Link>
          </div>
        </div>

        <div className="info flex gap-[70px] flex-wrap items-center justify-between">
          <InfoBox headerText="26k" descriptionText="Certified Instructor" />
          <InfoBox headerText="2k" descriptionText="Certified Instructor" />
          <InfoBox headerText="99.9%" descriptionText="Success Rate" />
        </div>
      </div>
    </div>
  );
};

export default TopContent;
