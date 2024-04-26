import React, { useState } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Img
import logo from "../../assets/LOGOHeader.png";
import Avatar from "../../assets/Avatar.png";
import ConfettiMinimalistic from "../../components/icons/ConfettiMinimalistic";

// Icons
import ShoppingCartSimple from "../../components/icons/ShoppingCartSimple";
import HeartHeader from "../../components/icons/HeartHeader";
import Bell from "../../components/icons/Bell";

import HeaderPhoneNavigation from "./HeaderPhoneNavigation";
import NavigationLink from "./NavigationLink";
import SearchIcon from "./SearchIcon";
export default function HeaderPhone() {
  const [menuListLeft, setMenuListLeft] = useState(-1000); // Initial position of menuList

  const handleConfettiClick = () => {
    setMenuListLeft(0); // Move menuList to the left
  };

  const handleExitClick = () => {
    setMenuListLeft(-1000); // Move menuList back to its initial position
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, type: "tween" }}
      className=""
    >
      <div className="container flex justify-between items-center p-[20px] max-w-full w-full">
        <div className="logo">
          <a href="">
            <img src={logo} alt="" className="h-[40px] w-[97px]" />
          </a>
        </div>

        <div className="cursor-pointer" onClick={handleConfettiClick}>
          <ConfettiMinimalistic />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween" }}
          className="fixed menuList overflow-y-scroll w-full h-full transition ease-out top-0 flex gap-7 flex-col items-start bg-[#fff] p-[20px] z-10"
          style={{ left: `${menuListLeft}px` }}
        >
          <div className="w-full flex items-center gap-[10px]">
            <div className="inputSearch relative w-full h-[45px]">
              <SearchIcon />
              <input
                type="search"
                name=""
                id=""
                placeholder="What do you want learn..."
                className="w-full h-full py-[10px] px-[40px] outline-none border-[1px] border-[#E9EAF0] "
              />
            </div>

            <div
              className="exit cursor-pointer w-[45px] h-[45px] flex items-center justify-center bg-red-500"
              onClick={handleExitClick}
            >
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#fff"
              >
                <path
                  d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>

          <div className="w-full">
            <div className="profile w-full flex flex-row-reverse justify-between items-center gap-[15px]">
              <div className="flex gap-3 items-center justify-center">
                <ShoppingCartSimple />
                <HeartHeader />
                <Bell />
              </div>

              <img src={Avatar} alt="" />
            </div>
          </div>

          <HeaderPhoneNavigation headerText="Pages">
            <NavigationLink path="/" navigationText="Home" />
            <NavigationLink path="/courses" navigationText="Courses" />
            <NavigationLink path="/about" navigationText="About" />
            <NavigationLink path="/blog" navigationText="Blog" />
            <NavigationLink path="/profile" navigationText="Profile" />
            <NavigationLink
              path="/instructor"
              navigationText="Become an Instructor"
            />
          </HeaderPhoneNavigation>

          <HeaderPhoneNavigation headerText="Category">
            <NavigationLink path="/" navigationText=" Business" />
            <NavigationLink path="/" navigationText="Development" />
            <NavigationLink path="/" navigationText=" IT & Software" />
            <NavigationLink path="/" navigationText="Office Productivity" />
            <NavigationLink path="/" navigationText="Marketings" />
            <NavigationLink path="/" navigationText="Health & Fitness" />
            <NavigationLink
              path="/instructor"
              navigationText="Become an Instructor"
            />
          </HeaderPhoneNavigation>
        </motion.div>
      </div>
    </motion.div>
  );
}
