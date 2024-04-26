import React from "react";
import { NavLink } from "react-router-dom";
export default function TopContent() {
  const activeClass =
    "px-[15px] py-[10px] font-medium text-[#fff] border-t-[2px] border-t-[#D5FF40]";
  const unActiveClass = "px-[15px] py-[10px] font-medium text-[#8C94A3]";
  return (
    <div className="topContent relative p-[15px] bg-[#1D2026]">
      <div className="container max-w-[1700px] m-auto gap-10 flex justify-between items-start">
        <div className="links">
          <ul className="flex items-center gap-[20px]">
            <li>
              <NavLink
                to="/"
                // className="px-[15px] py-[10px] font-medium text-[#fff] border-t-[2px] border-t-[#D5FF40]"
                className={({ isActive }) =>
                  isActive ? activeClass : unActiveClass
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? activeClass : unActiveClass
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : unActiveClass
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? activeClass : unActiveClass
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructor"
                className={({ isActive }) =>
                  isActive ? activeClass : unActiveClass
                }
              >
                Become an Instructor
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
