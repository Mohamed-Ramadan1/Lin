import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
// Framer Motion
import { motion } from "framer-motion";

// Img
import logo from "../../assets/LOGOHeader.png";
import { Link } from "react-router-dom";

// Icons

import HeartHeader from "../../components/icons/HeartHeader";
import HeaderPhoneNavigation from "./HeaderPhoneNavigation";
import NavigationLink from "./NavigationLink";
import SearchIcon from "./SearchIcon";
import { store } from "../../store/store";
import { logout } from "../../store/userSlice";
import { userProfileLinks, pagesLinks } from "./phoneNavigationLinks";

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
      <div className="container flex justify-between items-center p-[20px] max-w-full w-full ">
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
          <div className="w-full flex items-center gap-[10px] ">
            {user && (
              <div className="w-[200px]">
                <div className="profile w-full flex flex-row-reverse justify-between items-center gap-[15px]">
                  <div className="flex gap-3 items-center justify-center">
                    <Link
                      to={"/profile/wishlist"}
                      onClick={() => setMenuListLeft(-1000)}
                    >
                      <div className="mt-2 ml-3 w-[40px]">
                        <HeartHeader />
                      </div>
                    </Link>
                  </div>

                  <img src={user?.photo} alt="" className="w-[80px] h-[80px]" />
                </div>
              </div>
            )}
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

          <HeaderPhoneNavigation headerText="Pages">
            {!user && (
              <NavigationLink
                onClick={() => setMenuListLeft(-1000)}
                path="/signup"
                navigationText="Sign Up"
              />
            )}
            {!user && (
              <NavigationLink
                onClick={() => setMenuListLeft(-1000)}
                path="/login"
                navigationText="Login"
              />
            )}
            {pagesLinks.map((link) => (
              <NavigationLink
                path={link.path}
                navigationText={link.navigationText}
                onClick={() => setMenuListLeft(-1000)}
              />
            ))}

            {user && user.role === "admin" && (
              <NavigationLink
                onClick={() => setMenuListLeft(-1000)}
                path="/dashboard"
                navigationText="Admin Dashboard"
              />
            )}
            {user && (
              <NavigationLink
                onClick={() => {
                  setMenuListLeft(-1000);
                  store.dispatch(logout());
                }}
                navigationText="Logout"
              />
            )}
          </HeaderPhoneNavigation>

          {user && (
            <HeaderPhoneNavigation headerText="User Profile">
              {userProfileLinks.map((link) => (
                <NavigationLink
                  onClick={() => setMenuListLeft(-1000)}
                  path={link.path}
                  navigationText={link.navigationText}
                />
              ))}
            </HeaderPhoneNavigation>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
