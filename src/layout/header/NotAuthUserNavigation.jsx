import { Link } from "react-router-dom";

const NotAuthUserNavigation = () => {
  return (
    <div className="flex gap-[20px] items-center">
      <div className="flex items-center gap-[20px]">
        <Link
          to="/signup"
          className="max-content px-[30px] py-[13px] font-bold text-[#9747FF] bg-[#F4EBFF]"
        >
          Create Account
        </Link>
      </div>

      <div className="flex items-center gap-[20px]">
        <Link
          to="/login"
          className="max-content px-[30px] py-[13px] font-bold text-[#fff] bg-[#9747FF]"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default NotAuthUserNavigation;
