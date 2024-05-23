import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Icons
import ShoppingCartSimple from "../../components/icons/ShoppingCartSimple";
import HeartHeader from "../../components/icons/HeartHeader";
import Bell from "../../components/icons/Bell";

const AuthUserNavigation = () => {
  const { user } = useSelector((state) => state.userReducers);
  return (
    <div className="profile flex flex-row-reverse justify-center items-center gap-[15px]">
      <Link to="/profile">
        <img
          src={user.photo}
          alt=""
          className="w-[50px] h-[50px] rounded-[15px]"
          loading="lazy"
        />
      </Link>

      <ShoppingCartSimple />

      <Link to="/profile/wishlist">
        <HeartHeader />
      </Link>
    </div>
  );
};

export default AuthUserNavigation;
