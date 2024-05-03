import React, { Children } from "react";

const StatsContainer = ({ children }) => {
  return (
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 mt-5">{children}</div>
  );
};

export default StatsContainer;
