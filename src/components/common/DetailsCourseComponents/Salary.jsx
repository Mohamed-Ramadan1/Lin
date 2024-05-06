import React from "react";
import { BtnFav } from "../../ui/BtnFav";
import InputCheckBox from "../../ui/InputCheckBox";
import ShoppingCartSimple from "../../icons/ShoppingCartSimple";
import { Link } from "react-router-dom";

const Salary = () => {
  return (
    <div className="salary p-3 min-w-[290px] max-h-[400px] flex flex-col gap-4 items-start rounded-3xl max-md:hidden bg-[#D5FF40]">
      <div className="top-salary w-full relative flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold">E£199.99</h2>
          <span className="font-medium line-through">E£250.99 </span>
        </div>

        <div className="relative">
          <BtnFav />
        </div>
      </div>

      <div className="info w-full p-5 flex flex-col gap-4 items-start rounded-2xl bg-[#1E1E1E]">
        <h3 className="font-bold text-base text-[#fff]">
          This course includes:
        </h3>

        <ul className="flex flex-col gap-4 items-start">
          <li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
            <svg
              width="23px"
              height="23px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#ffffff"
            >
              <path
                d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M9.89768 8.51296C9.49769 8.28439 9 8.57321 9 9.03391V14.9661C9 15.4268 9.49769 15.7156 9.89768 15.487L15.0883 12.5209C15.4914 12.2906 15.4914 11.7094 15.0883 11.4791L9.89768 8.51296Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            5 hours on-demand video
          </li>
          <li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
            <svg
              width="23px"
              height="23px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#ffffff"
            >
              <path
                d="M12 21V7C12 5.89543 12.8954 5 14 5H21.4C21.7314 5 22 5.26863 22 5.6V18.7143"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M12 21V7C12 5.89543 11.1046 5 10 5H2.6C2.26863 5 2 5.26863 2 5.6V18.7143"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M14 19L22 19"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M10 19L2 19"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M12 21C12 19.8954 12.8954 19 14 19"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 21C12 19.8954 11.1046 19 10 19"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            4 articles
          </li>
          <li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
            <svg
              width="23px"
              height="23px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#ffffff"
            >
              <path
                d="M6 18L18 18"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 6V14M12 14L15.5 10.5M12 14L8.5 10.5"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
                stroke="#ffffff"
                stroke-width="1.5"
              ></path>
            </svg>
            8 downloadable resources
          </li>
          <li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
            <svg
              width="23px"
              height="23px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#ffffff"
            >
              <path
                d="M2 20V9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z"
                stroke="#ffffff"
                stroke-width="1.5"
              ></path>
              <path
                d="M8.5 2.5L12 6L15.5 2.5"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Access on mobile and TV
          </li>
          <li className="flex items-center text-[15px] gap-3 font-medium text-[#BEBEBE]">
            <svg
              width="23px"
              height="23px"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#ffffff"
            >
              <path
                d="M14 9L13.75 9.375M10 9C9.08779 7.78565 7.63574 7 6 7C3.23858 7 1 9.23858 1 12C1 14.7614 3.23858 17 6 17C7.63582 17 9.08816 16.2144 10.0004 15L10.3337 14.5"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10 9L13.9996 15C14.9118 16.2144 16.3642 17 18 17C20.7614 17 23 14.7614 23 12C23 9.23858 20.7614 7 18 7C16.3642 7 14.9118 7.78555 13.9996 9"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Full lifetime access
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to={"/paymentGatWay"}
            className="px-[40px] text-center w-[160px] py-[15px] rounded-xl font-bold bg-[#D5FF40] hover:bg-[#d6ff40d7]"
          >
            Buy now
          </Link>

          <button className="p-[15px] rounded-xl bg-[#fff] hover:bg-[#ffffffd8]">
            <ShoppingCartSimple />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Salary;
