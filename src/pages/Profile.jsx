import { Footer } from "../layout";
import TopContent from "../layout/header/TopContent";
import MidContent from "../layout/header/MidContent";
import ProfileInfo from "../components/profileConponents/ProfileInfo";

import { Outlet } from "react-router-dom";
import ProfileNavigationBar from "../components/profileConponents/ProfileNavigationBar";
const Profile = () => {
  return (
    <div className="h-[100vh] relative">
      <TopContent />
      <MidContent />
      <ProfileInfo />
      <div className="w-[1193px] h-[60px] border-b-4 absolute top-[624px] left-[123px] flex">
        <ProfileNavigationBar />
      </div>
      <div className="max-w-[1400px] m-auto flex flex-col justify-between items-center max-md:flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
