import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const { user } = useSelector((state) => state.userReducers);
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
      {user && user.role === "admin" ? (
        <li key="admin">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
          >
            Admin-Dashboard
          </NavLink>
        </li>
      ) : null}

      {user && (
        <li key="profile">
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default TopContentNavigationLinks;
