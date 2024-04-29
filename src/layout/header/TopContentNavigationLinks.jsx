import { NavLink } from "react-router-dom";

const activeClass =
  "px-[15px] py-[10px] font-medium text-[#fff] border-t-[2px] border-t-[#D5FF40]";

const unActiveClass = "px-[15px] py-[10px] font-medium text-[#8C94A3]";

const navigationLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/courses",
    text: "Courses",
  },

  {
    path: "/about",
    text: "About",
  },
  {
    path: "/blog",
    text: "Blog",
  },
  {
    path: "/instructor",
    text: "Instructor",
  },
];

const TopContentNavigationLinks = () => {
  return (
    <ul className="flex items-center gap-[20px]">
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TopContentNavigationLinks;
{
  /* <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : unActiveClass)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? activeClass : unActiveClass)}
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : unActiveClass)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? activeClass : unActiveClass)}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructor"
          className={({ isActive }) => (isActive ? activeClass : unActiveClass)}
        >
          Become an Instructor
        </NavLink>
      </li> */
}
