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
      <div className="container max-w-[1700px] m-auto gap-5 flex justify-start items-start">
        <img
          src={WhatWeOffer}
          alt="WhatWeOffer"
          className="w-20 h-20 rounded-[10px] bsolute top-[-50px] left-[50px]"
        />
        <div>
          <h1 className="text-2xl">Name</h1>
          <p className="text-lg">Email</p>
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
