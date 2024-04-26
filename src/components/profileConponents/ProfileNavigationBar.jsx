import { NavLink } from "react-router-dom";

const navigationLinks = [
  {
    path: "/accountInfo",
    name: "Account Info",
  },
  {
    path: "/mayTasks",
    name: "My Tasks",
  },
  {
    path: "/favorites",
    name: "Favorites",
  },
  {
    path: "/chat",
    name: "Chat With Me",
  },
  {
    path: "/settings",
    name: "Settings",
  },
];
const ProfileNavigationBar = () => {
  return (
    <ul>
      {navigationLinks.map((link) => (
        <li key={link.path}>
          <NavLink href={link.path}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ProfileNavigationBar;
