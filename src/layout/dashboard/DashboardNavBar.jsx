import Logo from "./../../assets/LOGO.png";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NavBarLink } from "../../components";
function DashboardNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = () => {
    dispatch(logout());
    toast.success("Logged Out Successfully");
    navigate("/");
  };

  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <div className=" font-bold text-2xl">Lin</div>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <button
            onClick={handelLogout}
            className="btn btn-ghost rounded-btn text-2xl"
          >
            Logout
          </button>
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
              <NavBarLink
                path="/dashboard"
                navText="Statics"
                className="text-primary"
              />

              <NavBarLink
                path="/dashboard/freeCourses"
                navText="Free Courses"
              />
              <NavBarLink
                path="/dashboard/paidCourses"
                navText="Paid Courses"
              />
              <NavBarLink
                path="/dashboard/reservations"
                navText="Enrollments"
              />
              <NavBarLink path="/dashboard/users" navText="Users" />
              <NavBarLink path="/dashboard/instructors" navText="Instructors" />
              <NavBarLink path="/dashboard/addcourse" navText="Add Course" />
              <NavBarLink path="/dashboard/adduser" navText="Create User" />
              <NavBarLink
                path="/dashboard/addinstructor"
                navText="Create Instructor"
              />
              <NavBarLink path="/dashboard/settings" navText="Settings" />
              <NavBarLink path="/dashboard/blogs" navText="Blogs" />
              <NavBarLink
                path="/dashboard/paymentsrecords"
                navText="Payments Records"
              />
              <NavBarLink
                path="/dashboard/instructorsrequests"
                navText="Instructors Requests"
              />
              <NavBarLink path="/" navText="Home" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavBar;
