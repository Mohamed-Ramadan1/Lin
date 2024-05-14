import { NavLink } from "react-router-dom";
const NavigationLink = ({ path, NavIcon, navText }) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        `p-3 rounded mt-3 text-white flex gap-5 items-center content-center  ${
          isActive ? "bg-gray-900" : "hover:bg-gray-800"
        }`
      }
    >
      {NavIcon && <NavIcon className="text-3xl" />}
      <p className="text-center">{navText}</p>
    </NavLink>
  );
};

export default NavigationLink;
