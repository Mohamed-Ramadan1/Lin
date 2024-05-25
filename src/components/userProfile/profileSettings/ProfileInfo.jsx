const ProfileInfo = ({ user }) => {
  return (
    <div className="">
      {/* Background img */}
      <div className="bg-[url(https://source.unsplash.com/1600x900/?nature,water)] bg-cover bg-center h-[200px] sm:h-[300px] flex justify-center items-center relative">
        {/* <img src={BannerProfile} alt="BannerProfile" className="" /> */}
        <h2 className="absolute text-2xl sm:text-4xl font-bold text-[#fff] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          Hi, {user ? user.name : ""}👋
        </h2>
      </div>

      <div className="container w-full max-w-[1400px] m-auto flex gap-5 sm:gap-10 flex-col justify-center items-center sm:items-start">
        <div className="relative flex flex-col items-center sm:items-start">
          {/* Profile info */}
          <div className="w-full translate-y-[-50%] flex gap-5 items-center relative">
            <img
              src={user.photo}
              alt="Profile"
              className="w-[80px] h-[80px] sm:w-[113px] sm:h-[113px] rounded-[10px]"
            />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left translate-y-[50%]">
              <h2 className="text-xl sm:text-2xl font-bold">{user.name}</h2>
              <p className="text-sm sm:text-lg">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
