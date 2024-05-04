import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./../../store/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function DashboardNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = () => {
    dispatch(logout());
    toast.success("Logged Out Successfully");
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-between p-5 bg-white border-b border-gray-200">
        <div className="flex items-center gap-5">
          <button className="text-gray-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/courses">Courses</Link>
          <Link to="/">Home</Link>

          <Link to="/admin/users">Users</Link>
          <Link to="/admin/settings">Settings</Link>
          <button
            onClick={handelLogout}
            className="bg-gray-800 text-white rounded-lg p-3"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default DashboardNavBar;
