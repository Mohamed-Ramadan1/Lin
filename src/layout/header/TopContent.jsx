import TopContentNavigationLinks from "./TopContentNavigationLinks";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cleareStatus } from "../../store/authHandler";
const TopContent = () => {
  const { user } = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="topContent relative p-[15px] bg-[#1D2026]">
      <div className="container max-w-[1700px] m-auto gap-10 flex justify-between items-start">
        <div className="links  ">
          <TopContentNavigationLinks />
        </div>
        {user && (
          <button
            type="button"
            onClick={() => {
              dispatch(logout());
              dispatch(cleareStatus());

              toast.success("Logged out successfully");
              navigate("/");
            }}
            className="btn flex items-center gap-2 px-4 py-2 text-[#fff] bg-[#9747FF]  "
          >
            <RiLogoutBoxRLine />
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default TopContent;
