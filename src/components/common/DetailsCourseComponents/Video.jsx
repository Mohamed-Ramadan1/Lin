import { useState } from "react";

const Video = ({ video, index }) => {
  const [open, setOpen] = useState(false);
  const { title, url, _id } = video;
  const toggleList = () => {
    setOpen(!open);
  };

  return (
    <div className="list w-full flex flex-col">
      <div
        className="title w-full cursor-pointer p-4 border-b-[1px] border-[#d6d6d6] flex justify-between items-center bg-[#F6F6F6]"
        onClick={toggleList}
      >
        <h1 className="text-[#222] text-2xl font-medium select-none">
          <span className="text-[#9747FF] font-bold">{index}</span> {title}
        </h1>

        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center select-none">
            <span className="font-bold">1 lecture</span>
          </div>

          <div className={open ? "icon hidden" : "icon"}>
            <svg
              width="23px"
              height="23px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#212121"
            >
              <path
                d="M6 12H12M18 12H12M12 12V6M12 12V18"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>

          <div className={!open ? "icon hidden" : "icon"}>
            <svg
              width="23px"
              height="23px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#212121"
            >
              <path
                d="M6 12H18"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div
        className="list flex flex-col justify-start gap-[15px] transition ease-in-out"
        style={{ maxHeight: open ? "100%" : "0", overflow: "hidden" }}
      >
        <div className="video px-[10px] py-[14px] w-full flex justify-between items-center bg-[#F6F6F6]">
          <div className="info-video flex gap-2 items-center">
            <div className="icon">
              <svg
                width="23px"
                height="23px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#9747ff"
              >
                <path
                  d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                  stroke="#9747ff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.89768 8.51296C9.49769 8.28439 9 8.57321 9 9.03391V14.9661C9 15.4268 9.49769 15.7156 9.89768 15.487L15.0883 12.5209C15.4914 12.2906 15.4914 11.7094 15.0883 11.4791L9.89768 8.51296Z"
                  stroke="#9747ff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="nme-video">
              <p className="text-base underline">{title}</p>
            </div>
          </div>

          <div className="time">
            <span className="font-bold">3:4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
