import { Link } from "react-router-dom";
import Logo from "./../../assets/LOGO.png";

function SideBar() {
  return (
    <div className="px-5">
      <div className="flex flex-col h-screen w-72.5 bg-black dark:bg-boxdark">
        <div className="flex flex-col items-center justify-center h-20 w-full border-b border-gray-600">
          <div className="flex gap-5">
            <img src={Logo} alt="avatar" className=" h-[22px]rounded-full" />
            {/* <h1 className="text-2xl text-white">
              <span className="text-blue-700">Lin</span>{" "}
            </h1> */}
          </div>
        </div>
        <div className=" p-3 rounded mt-3  ">
          <h2 className="text-white "> MENU</h2>
        </div>
        {/* dashboard home */}
        <Link
          className="hover:bg-gray-800 p-3 rounded mt-3 text-white"
          to={"/dashboard"}
        >
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
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
            {/* courses svg icon */}
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p>Paied Courses</p>
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
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <p>Users</p>
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
          {/* icons and link and arrow*/}
          <div className="flex gap-5">
            {/* settings svg icon */}
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 5v2m0 10v2m-6-6h2m10 0h2m-8.485 8.485l1.414-1.414m-1.414 1.414l-1.414-1.414" />
            </svg>

            <p href="/dashboard/settings">Settings</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
