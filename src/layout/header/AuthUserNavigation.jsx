import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Icons
import HeartHeader from "../../components/icons/HeartHeader";

const AuthUserNavigation = () => {
  const { user } = useSelector((state) => state.userReducers);
  return (
    <div className="profile flex flex-row-reverse justify-center items-center gap-[15px]">
      <Link to="/profile">
        <img
          src={user?.photo}
          alt="user image"
          className="w-[50px] h-[50px] rounded-[15px]"
          loading="lazy"
        />
      </Link>
      <Link to="/profile/wishlist">
        <HeartHeader />
      </Link>
    </div>
  );
};

export default AuthUserNavigation;
