import { NavLink } from "react-router-dom";

const navigationLinks = [
  {
    path: "/profile",
    name: "Public Profile",
  },
  {
    path: "/profile/accountInfo",
    name: "Account Info",
  },
  {
    path: "/profile/myTasks",
    name: "My Tasks",
  },
  {
    path: "/profile/myCourses",
    name: "myCourses",
  },
  {
    path: "/profile/myBlogs",
    name: "My Blogs",
  },
  {
    path: "/profile/chatWithMe",
    name: "Chat With Me",
  },
];
//border-t-[2px] border-t-[#D5FF40]

const activeClass =
  "px-[15px] py-[10px] font-medium text-black border-b-4 border-[#3C5B6F]";

const unActiveClass = "px-[15px] py-[10px] font-medium text-[#3C5B6F]";

const ProfileNavigationBar = () => {
  return (
    <ul className="container w-full max-w-[1400px] m-auto flex gap-10 flex-row justify-start items-start border-b-4 mb-6 ">
      {navigationLinks.map((link) => (
        <li key={link.path} className="pb-2 ">
          <NavLink
            to={`${link.path}`}
            end
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ProfileNavigationBar;
