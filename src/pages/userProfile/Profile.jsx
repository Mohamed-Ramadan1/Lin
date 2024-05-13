import Footer from "../../layout/footer/Footer";

import TopContent from "../../layout/header/TopContent";
import MidContent from "../../layout/header/MidContent";

import ProfileInfo from "../../components/profileConponents/ProfileInfo";
import ProfileNavigationBar from "../../components/profileConponents/ProfileNavigationBar";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducers);
  if (!user) return navigate("/login");
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
