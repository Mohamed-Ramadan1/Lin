import { NavLink } from "react-router-dom";

const NavBarLink = ({ path, navText }) => {
  return (
    <li className="text-black ">
      <NavLink
        to={path}
        end
        className={({ isActive }) =>
          `p-3 rounded mt-3 text-white flex gap-5 items-center content-center  ${
            isActive ? "bg-gray-400 text-white" : "hover:bg-gray-800"
          }`
        }
      >
        <p className="text-center">{navText}</p>
      </NavLink>
    </li>
  );
};

export default NavBarLink;
