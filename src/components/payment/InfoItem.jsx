import React from "react";

const InfoItem = ({ infoTitle, infoDetails }) => {
  return (
    <div className="flex flex-col mx-3 mt-6">
      <span className="font-bold ">
        {infoTitle} : <span className="font-normal ">{infoDetails}</span>
      </span>
    </div>
  );
};

export default InfoItem;
