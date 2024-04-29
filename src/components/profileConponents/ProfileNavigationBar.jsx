import { NavLink } from "react-router-dom";

const navigationLinks = [
  {
    path: "/profile",
    name: "Account Info",
  },
  {
    path: "/profile/mytasks",
    name: "My Tasks",
  },
  {
    path: "/profile/favorites",
    name: "Favorites",
  },
  {
    path: "/profile/chat",
    name: "Chat With Me",
  },
  {
    path: "/profile/settings",
    name: "Settings",
  },
];

const ProfileNavigationBar = () => {
  return (
    <ul className="container w-full max-w-[1400px] m-auto flex gap-10 flex-row justify-start items-start border-b-4 mb-4">
      {navigationLinks.map((link) => (
        <li key={link.path} className="pb-2 ">
          <NavLink to={`${link.path}`}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ProfileNavigationBar;
