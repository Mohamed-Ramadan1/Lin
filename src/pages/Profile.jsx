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

      <ProfileNavigationBar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Profile;
