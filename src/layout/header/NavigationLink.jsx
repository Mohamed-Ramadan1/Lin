import { Link } from "react-router-dom";
const NavigationLink = ({ path, navigationText }) => {
  return (
    <li>
      <Link
        to={path}
        className="py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3] "
      >
        {navigationText}
      </Link>
    </li>
  );
};

export default NavigationLink;
