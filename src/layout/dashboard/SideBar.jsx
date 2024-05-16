import Logo from "./../../assets/LOGO.png";
import { NavigationLink } from "../../components"; // Adjust the path as needed
import { BiBlanket } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdPaid, MdPayments } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { FaCodePullRequest } from "react-icons/fa6";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

function SideBar() {
  return (
    <div style={{ overflowY: "auto" }} className="px-5">
      <div className="flex flex-col h-screen w-72.5 bg-black dark:bg-boxdark min-h-[100vh] overflow-hidden">
        <div className="flex flex-col items-center justify-center h-20 w-full border-b border-gray-600">
          <div className="flex gap-5">
            <img src={Logo} alt="avatar" className="h-[60px] rounded-full" />
          </div>
        </div>

        {/* Dashboard link */}
        <NavigationLink
          path="/dashboard"
          NavIcon={IoStatsChart}
          navText="Statistics"
        />

        {/* Free Courses management link */}
        <NavigationLink
          path="/dashboard/freeCourses"
          NavIcon={SiGoogledisplayandvideo360}
          navText="Free Courses"
        />

        {/* Paid Courses */}
        <NavigationLink
          path="/dashboard/paidCourses"
          NavIcon={MdPaid}
          navText="Paid Courses"
        />

        {/* Add Courses */}
        <NavigationLink
          path="/dashboard/addcourse"
          NavIcon={BiBlanket}
          navText="Add Course"
        />

        {/* Create user account */}
        <NavigationLink
          path="/dashboard/adduser"
          NavIcon={FiUserPlus}
          navText="Create User Account"
        />

        {/* Create instructor account */}
        <NavigationLink
          path="/dashboard/addinstructor"
          NavIcon={FaUserCheck}
          navText="Create Instructor Account"
        />

        {/* Manage users */}
        <NavigationLink
          path="/dashboard/users"
          NavIcon={HiUsers}
          navText="Users"
        />

        {/* Manage instructors */}
        <NavigationLink
          path="/dashboard/instructors"
          NavIcon={FiUsers}
          navText="Instructors"
        />

        {/* Reserved courses */}
        <NavigationLink
          path="/dashboard/reservations"
          NavIcon={MdPaid} // Use an appropriate icon here
          navText="Reserved Courses"
        />

        {/* Settings */}
        <NavigationLink
          path="/dashboard/settings"
          NavIcon={IoSettings}
          navText="Settings"
        />

        {/* Payments */}
        <NavigationLink
          path="/dashboard/paymentsrecords"
          NavIcon={MdPayments}
          navText="Payments"
        />

        {/* Blogs */}
        <NavigationLink
          path="/dashboard/blogs"
          NavIcon={LiaBlogSolid}
          navText="Blogs"
        />

        {/* Instructors Requests */}
        <NavigationLink
          path="/dashboard/instructorsrequests"
          NavIcon={FaCodePullRequest}
          navText="Instructors Requests"
        />
      </div>
    </div>
  );
}

export default SideBar;
