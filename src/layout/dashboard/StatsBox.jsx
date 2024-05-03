import React from "react";

const StatsBox = ({ statsText, statsValue }) => {
  return (
    <div class="rounded-lg p-5 rounded-5 shadow rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div class="flex items-center justify-between">
        <div>
          <span class="text-sm font-medium">{statsText}</span>
        </div>
        <span class="text-sm font-medium text-meta-3 undefined ">
          {statsValue}
          <svg
            class="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default StatsBox;
