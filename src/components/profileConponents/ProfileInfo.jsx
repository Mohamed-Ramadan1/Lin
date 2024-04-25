import BannerProfile from "./../../assets/BannerProfile.png";
import WhatWeOffer from "../../assets/WhatWeOfferImage.jpg";

const ProfileInfo = () => {
  return (
    <div className="relative">
      {/* Background img */}
      <div className="">
        <img src={BannerProfile} alt="BannerProfile" className="" />
      </div>
      {/* Profile info */}
      <div className="container  m-auto gap-5 flex justify-start items-start relative">
        <img
          src={WhatWeOffer}
          alt="WhatWeOffer"
          className="w-[113px] h-[113px] rounded-[10px] absolute top-[-50px] left-[50px] z-1"
        />
        <div>
          <h1 className="text-2xl">Mohamed Ramadan</h1>
          <p className="text-lg">mohamed@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

// The structure of the profile page is as follows:
//img at the background
//Profile info img , name , email
//Profile navigation bar

//based on the decription recommand some css for doing that
