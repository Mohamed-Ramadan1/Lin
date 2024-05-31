import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardFooter from "./DashboardFooter";
import DashboardNavBar from "./DashboardNavBar";
import SideBar from "./SideBar";
import { useEffect } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducers);
  useEffect(() => {
    if (user === null || (user && user.role !== "admin")) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <main>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        {/* Sidebar */}
        <div className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
          <SideBar />
        </div>

        {/* Main content */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* Navigation bar */}
          <DashboardNavBar />

          <main className="flex-1 p-4">
            <Outlet />
          </main>
          {/* <div className="mb-10 bottom-0">
            <DashboardFooter />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
