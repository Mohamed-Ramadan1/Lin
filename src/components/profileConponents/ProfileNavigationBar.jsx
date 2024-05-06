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
    path: "/profile/favorites",
    name: "Favorites",
  },
  {
    path: "/profile/chatWithMe",
    name: "Chat With Me",
  },
];

const ProfileNavigationBar = () => {
  return (
    <ul className="container w-full max-w-[1400px] m-auto flex gap-10 flex-row justify-start items-start border-b-4 mb-1 ">
      {navigationLinks.map((link) => (
        <li key={link.path} className="pb-2 ">
          <NavLink to={`${link.path}`}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ProfileNavigationBar;
