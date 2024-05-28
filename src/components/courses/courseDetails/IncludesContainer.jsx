import IncludeItem from "./IncludeItem";
import { MdOutlineVideoSettings } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaMobileAlt } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";

const IncludesContainer = ({ duration, videos }) => {
  return (
    <ul className="flex flex-col gap-4 items-start">
      <IncludeItem
        Icon={MdOutlineVideoSettings}
        data={duration}
        text="hours on-demand video"
      />
      <IncludeItem Icon={GoBook} data={4} text="articles" />
      <IncludeItem
        Icon={LiaFileDownloadSolid}
        data={videos.length}
        text="lectures"
      />
      <IncludeItem Icon={FaMobileAlt} text="Access on mobile" />
      <IncludeItem Icon={FaInfinity} text="Full lifetime access" />
    </ul>
  );
};

export default IncludesContainer;
{
  /* <li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
<MdOutlineVideoSettings className="text-2xl" />
{duration} hours on-demand video
</li>
<li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
<GoBook className="text-2xl" />4 articles
</li>
<li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
<LiaFileDownloadSolid className="text-2xl" />
{videos.length} lectures
</li>
<li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
<FaMobileAlt className="text-2xl" />
Access on mobile
</li>
<li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
<FaInfinity className="text-2xl" />
Full lifetime access
</li> */
}
