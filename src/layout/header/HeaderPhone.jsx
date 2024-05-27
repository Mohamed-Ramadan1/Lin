import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
// Framer Motion
import { motion } from "framer-motion";

// Img
import logo from "../../assets/LOGOHeader.png";
import Avatar from "../../assets/Avatar.png";
import { Link } from "react-router-dom";

// Icons
import ShoppingCartSimple from "../../components/icons/ShoppingCartSimple";
import HeartHeader from "../../components/icons/HeartHeader";
import Bell from "../../components/icons/Bell";

import HeaderPhoneNavigation from "./HeaderPhoneNavigation";
import NavigationLink from "./NavigationLink";
import SearchIcon from "./SearchIcon";
import { store } from "../../store/store";

export default function HeaderPhone() {
  const user = store.getState().userReducers.user;
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
          <FaBars className="text-3xl" />
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
              <IoClose className="text-2xl text-white" />
            </div>
          </div>

          <div className="w-full">
            <div className="profile w-full flex flex-row-reverse justify-between items-center gap-[15px]">
              <div className="flex gap-3 items-center justify-center">
                <Link to={"/profile/wishlist"}>
                  <HeartHeader />
                </Link>
              </div>

              <img src={Avatar} alt="" />
            </div>
          </div>

          <HeaderPhoneNavigation headerText="Pages">
            <NavigationLink
              path="/"
              navigationText="Home"
              onClick={() => setMenuListLeft(-1000)}
            />
            <NavigationLink
              path="/courses"
              navigationText="Courses"
              onClick={() => setMenuListLeft(-1000)}
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/about"
              navigationText="About"
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/blog"
              navigationText="Blog"
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/profile"
              navigationText="Profile"
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/instructor"
              navigationText="Become an Instructor"
            />
            {user && user.role === "admin" && (
              <NavigationLink
                onClick={() => setMenuListLeft(-1000)}
                path="/dashboard"
                navigationText="Admin Dashboard"
              />
            )}
          </HeaderPhoneNavigation>

          <HeaderPhoneNavigation headerText="User Profile">
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/profile"
              navigationText=" Profile"
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/profile/accountInfo"
              navigationText="Account Info "
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/profile/myTasks"
              navigationText="My Tasks"
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/profile/myCourses"
              navigationText="My Courses"
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/profile/myBlogs"
              navigationText="My Blogs"
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/profile/myNotes"
              navigationText="My Notes"
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/profile/wishlist"
              navigationText="Wishlist"
            />
            <NavigationLink
              onClick={() => setMenuListLeft(-1000)}
              path="/profile/financial-aid-requests"
              navigationText="Financial Aid Requests"
            />
          </HeaderPhoneNavigation>
        </motion.div>
      </div>
    </motion.div>
  );
}
