import { Footer } from "../layout";
import TopContent from "../layout/header/TopContent";
import MidContent from "../layout/header/MidContent";
import ProfileInfo from "../components/profileConponents/ProfileInfo";

import { Outlet } from "react-router-dom";
const Profile = () => {
  return (
    <div className="h-[100vh] ">
      <TopContent />
      <MidContent />
      <ProfileInfo />
      <div className="max-w-[1400px] m-auto flex flex-col justify-between items-center max-md:flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

// Profile structure

// Header

//Profile Info and navigation bar

/*
<Outlet/>
the dynamic content based on the route will be displayed here

Mange layout based ont the matched route

*/

//Footer
