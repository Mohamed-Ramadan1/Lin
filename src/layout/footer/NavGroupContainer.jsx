import { Children } from "react";

const NavGroupContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-start gap-[20px]">
      <h3 className="text-xl text-[#fff] font-bold">Top 4 Category</h3>
      <ul className="flex flex-col items-start gap-[10px]">{children}</ul>
    </div>
  );
};

export default NavGroupContainer;
