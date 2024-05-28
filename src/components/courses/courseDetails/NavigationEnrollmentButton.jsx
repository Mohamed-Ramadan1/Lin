import { Link } from "react-router-dom";

const NavigationEnrollmentButton = ({ path, text }) => {
  return (
    <Link
      to={path}
      className=" text-center w-[200px] py-[15px] rounded-xl font-bold bg-[#D5FF40] hover:bg-[#d6ff40d7]"
    >
      {text}
    </Link>
  );
};

export default NavigationEnrollmentButton;
