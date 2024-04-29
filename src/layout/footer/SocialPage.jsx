import React from "react";

const SocialPage = ({ socialIcon, socialLink }) => {
  return (
    <li className="w-[47px] h-[47px] bg-[#2A2C31] flex justify-center items-center transition ease-in hover:bg-[#9747FF] hover:text-[#fff]">
      <a href={socialLink} target="_blank">
        {socialIcon}
      </a>
    </li>
  );
};

export default SocialPage;
