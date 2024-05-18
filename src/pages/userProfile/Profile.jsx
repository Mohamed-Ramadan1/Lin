import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { ProfileInfo, ProfileNavigationBar } from "../../components";
import Footer from "../../layout/footer/Footer";
import TopContent from "../../layout/header/TopContent";
import MidContent from "../../layout/header/MidContent";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducers);
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="h-[100vh] relative">
      {user && (
        <>
          <TopContent />
          <MidContent />
          <ProfileInfo user={user} />
          <ProfileNavigationBar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Profile;
