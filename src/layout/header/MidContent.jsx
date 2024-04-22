import React from "react";
import { useSelector } from "react-redux";

// Img
import logo from "../../assets/LOGOHeader.png";
import Avatar from "../../assets/Avatar.png";
import { Link } from "react-router-dom";
// Icons
import ShoppingCartSimple from "../../components/icons/ShoppingCartSimple";
import HeartHeader from "../../components/icons/HeartHeader";
import Bell from "../../components/icons/Bell";

export default function MidContent() {
  const { user } = useSelector((state) => state.userReducers);

  return (
    <div className="p-[20px]">
      <div className="container max-w-[1700px] m-auto gap-10 flex justify-between items-start">
        <div className="info-left flex gap-[20px] justify-center items-center">
          <div className="logo">
            <a href="">
              <img src={logo} alt="" className="h-[40px] w-[97px]" />
            </a>
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4431 16.4438L20.9994 21.0002"
                  stroke="#1D2026"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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

        <div className="info-right">
          {/* User Sign In  */}
          {user && (
            <div className="profile flex flex-row-reverse justify-center items-center gap-[15px]">
              <img src={Avatar} alt="" />

              <ShoppingCartSimple />
              <HeartHeader />
              <Bell />
            </div>
          )}

          {!user && (
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
                  Log-in
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
