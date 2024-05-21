import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { ProfileInfo, ProfileNavigationBar } from "../../components";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

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
          <Header />
          <ProfileInfo user={user} />
          <ProfileNavigationBar />
          <div className="mb-6 mt-6">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Profile;
