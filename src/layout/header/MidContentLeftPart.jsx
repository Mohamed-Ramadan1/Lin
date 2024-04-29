import logo from "../../assets/LOGOHeader.png";
import { Link } from "react-router-dom";

const MidContentLeftPart = () => {
  return (
    <div className="info-left flex gap-[20px] justify-center items-center">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" className="h-[40px] w-[97px]" />
        </Link>
      </div>

      <div className="inputSearch relative w-[425px] h-[45px]">
        <div className="iconSearch absolute left-[10px] top-[50%] translate-y-[-50%]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
              stroke="#1D2026"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4431 16.4438L20.9994 21.0002"
              stroke="#1D2026"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="search"
          name=""
          id=""
          placeholder="What do you want learn..."
          className="w-full h-full py-[10px] px-[40px] outline-none border-[1px] border-[#E9EAF0] "
        />
      </div>
    </div>
  );
};

export default MidContentLeftPart;
