import BannerProfile from "./../../assets/BannerProfile.png";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.userReducers);
  return (
    <div>
      {/* Background img */}
      <div className="relative">
        <img src={BannerProfile} alt="BannerProfile" className="" />
        <h2 className="absolute text-4xl font-bold text-[#fff] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          Hi, {user ? user.name : ""}👋
        </h2>
      </div>

      <div className="container w-full max-w-[1400px] m-auto flex gap-10 flex-col justify-center items-start">
        <div className="relative flex flex-col items-start">
          {/* Profile info */}
          <div className="container  w-full translate-y-[-50%] flex gap-5  items-center relative">
            <img
              src={user.photo}
              alt="WhatWeOffer"
              className="w-[113px] h-[113px] rounded-[10px] "
            />
            <div className="translate-y-[50%]">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-lg">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
