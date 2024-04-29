import { useSelector } from "react-redux";

import AuthUserNavigation from "./AuthUserNavigation";
import NotAuthUserNavigation from "./NotAuthUserNavigation";
import MidContentLeftPart from "./MidContentLeftPart";

const MidContent = () => {
  const { user } = useSelector((state) => state.userReducers);

  return (
    <div className="p-[20px]">
      <div className="container max-w-[1700px] m-auto gap-10 flex justify-between items-start">
        <MidContentLeftPart />
        <div className="info-right">
          {user ? <AuthUserNavigation /> : <NotAuthUserNavigation />}
        </div>
      </div>
    </div>
  );
};
export default MidContent;
