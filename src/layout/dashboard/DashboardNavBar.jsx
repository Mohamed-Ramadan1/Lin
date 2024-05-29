import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { NavBarLink } from "../../components";
import { navLinks } from "./navLinksData";
import useScreenSize from "../../hooks/useScreenSize";
function DashboardNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLargeScreen } = useScreenSize();

  const handelLogout = () => {
    dispatch(logout());
    toast.success("Logged Out Successfully");
    navigate("/", { replace: true });
  };

  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <div className=" font-bold text-2xl">Lin</div>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          {isLargeScreen && (
            <>
              <Link to="/" className="btn btn-ghost rounded-btn text-2xl">
                Home
              </Link>
              <button
                onClick={handelLogout}
                className="btn btn-ghost rounded-btn text-2xl"
              >
                Logout
              </button>
            </>
          )}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn text-2xl"
            >
              Navigate
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-black rounded-box w-52 mt-4 "
            >
              {navLinks.map((link) => (
                <NavBarLink
                  key={link.path}
                  path={link.path}
                  navText={link.navText}
                  className="text-primary"
                />
              ))}
              <button
                onClick={handelLogout}
                className="p-3 rounded mt-3 text-white flex gap-5 items-center content-center hover:bg-gray-800"
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavBar;
