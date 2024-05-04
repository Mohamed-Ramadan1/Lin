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
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/dashboard">Statics</Link>
          <Link to="/dashboard/freeCourses">Free Courses</Link>
          <Link to="/dashboard/paidCourses">Paid Courses</Link>
          <Link to="/dashboard/reservations">Enrollments</Link>
          <Link to="/dashboard/users">Users</Link>
          <Link to="/dashboard/settings">Settings</Link>
          <Link to="/">Home</Link>
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
