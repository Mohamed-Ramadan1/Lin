// Img
import logo from "../../assets/LOGO.png";

// Icons
import FacebookIcon from "../../components/icons/FacebookIcon";
import LinkedinIcon from "../../components/icons/LinkedinIcon";
import TwitterIcon from "../../components/icons/TwitterIcon";
import YoutubeIcon from "../../components/icons/YoutubeIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";

import SocialPage from "./SocialPage";
import NavElement from "./NavElement";
import NavGroupContainer from "./NavGroupContainer";

function ButtomContent() {
  return (
    <div className="bottomContent border-t-[1px] border-t-[#363B47] relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px] bg-[#222]">
      <div className="container max-w-[1400px] m-auto gap-10 flex justify-between items-start max-md:flex-col">
        <div className="contentInfo flex flex-col items-start gap-5">
          <img src={logo} alt="" />

          <p className="max-w-[400px] text-[#8C94A3]">
            Online learning platforms provide interactive courses and resources,
            allowing students to engage in self-paced learning and access
            educational content from anywhere with an internet connection.
          </p>

          <div className="linksSocial">
            <ul className="flex gap-[20px] justify-center items-center max-lg:gap-[10px]">
              <SocialPage socialIcon={<FacebookIcon />} socialLink="" />
              <SocialPage
                socialIcon={<LinkedinIcon />}
                socialLink="https://www.linkedin.com/in/mohamed-ramadan-758555236/"
              />
              <SocialPage socialIcon={<TwitterIcon />} socialLink="" />
              <SocialPage socialIcon={<YoutubeIcon />} socialLink="" />
              <SocialPage socialIcon={<InstagramIcon />} socialLink="" />
            </ul>
          </div>
        </div>

        <div className="contentInfo">
          <div className="links flex flex-wrap gap-[70px] items-start justify-between max-sm:gap-[30px]">
            <NavGroupContainer>
              <NavElement path="/courses" navText="Design" />
              <NavElement path="/courses" navText="Business" />
              <NavElement path="/courses" navText="Development" />
              <NavElement path="/courses" navText=" Finance & Accounting" />
            </NavGroupContainer>

            <NavGroupContainer>
              <NavElement path="/about" navText="About" />
              <NavElement path="/" navText="Contact" />
              <NavElement path="/" navText="Career" />
              <NavElement path="/instructor" navText="Become Instructor" />
            </NavGroupContainer>

            <NavGroupContainer>
              <NavElement path="/" navText="FAQs" />
              <NavElement path="/" navText=" Help Center" />
              <NavElement path="/" navText="Privacy Policy" />
              <NavElement path="/" navText="Terms & Condition" />
            </NavGroupContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtomContent;
