import { Link } from "react-router-dom";

const NavElement = ({ path, navText }) => {
  return (
    <li>
      <Link
        to={path}
        className="text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]"
      >
        {navText}
      </Link>
    </li>
  );
};

export default NavElement;
