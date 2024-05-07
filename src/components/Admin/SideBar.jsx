import { Link } from "react-router-dom";
import Logo from "./../../assets/LOGO.png";
import { BiBlanket } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdPaid } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { FaCodePullRequest } from "react-icons/fa6";

function SideBar() {
  return (
    <div className="px-5">
      <div className="flex flex-col h-screen w-72.5 bg-black dark:bg-boxdark">
        <div className="flex flex-col items-center justify-center h-20 w-full border-b border-gray-600">
          <div className="flex gap-5">
            <img src={Logo} alt="avatar" className=" h-[22px]rounded-full" />
          </div>
        </div>

        {/* dashboard home */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5 items-center content-center">
            <IoStatsChart className="text-3xl" />
            <p>Statics</p>
          </div>
        </Link>
        {/* free courses management link */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard/freeCourses"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
            {/* courses svg icon */}
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" />{" "}
              <circle cx="18" cy="19" r="3" />{" "}
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />{" "}
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>

            <p>Free Courses</p>
          </div>
        </Link>
        {/* paied Courses */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard/paidCourses"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
            <MdPaid className="text-3xl" />

            <p>Paid Courses</p>
          </div>
        </Link>
        {/* add Courses */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard/addcourse"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
            <BiBlanket className="text-3xl" />
            <p>Add Course</p>
          </div>
        </Link>
        {/* add user account */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard/adduser"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
            <FaUserCheck className="text-3xl" />
            <p>Create User Account</p>
          </div>
        </Link>

        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard/addinstructor"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
            <FaUserCheck className="text-3xl" />
            <p>Create instructor Account</p>
          </div>
        </Link>
        {/* manage users link */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard/users"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
            {/* users svg icon */}
            <HiUsers className="text-3xl" />

            <p>Users</p>
          </div>
        </Link>
        {/* manage users link */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard/instructors"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
            {/* users svg icon */}
            <HiUsers className="text-3xl" />
            <p>Instructors</p>
          </div>
        </Link>
        {/* reseved courses */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard/reservations"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
            {/* courses svg icon */}
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>

            <p href="/admin/reserved-courses">Reserved Courses</p>
          </div>
        </Link>

        {/* settings  */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard/settings"}
        >
          <div className="flex gap-5">
            {/* settings svg icon */}
            <IoSettings className="text-3xl" />

            <p href="/dashboard/settings">Settings</p>
          </div>
        </Link>

        {/* payments  */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white "
          to={"/dashboard/paymentsrecords"}
        >
          <div className="flex gap-5">
            {/* icons and link and arrow*/}
            <MdPayments className="text-3xl" />

            <p href="/dashboard/settings">Payments</p>
          </div>
        </Link>

        {/* blogs  */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white "
          to={"/dashboard/blogs"}
        >
          <div className="flex gap-5">
            {/* icons and link and arrow*/}
            <LiaBlogSolid className="text-3xl" />

            <p href="/dashboard/settings">Blogs</p>
          </div>
        </Link>
        {/* become INstructor  */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white "
          to={"/dashboard/instructorsrequests"}
        >
          <div className="flex gap-5">
            {/* icons and link and arrow*/}
            <FaCodePullRequest className="text-3xl" />
            <p>Instructors Requests</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
