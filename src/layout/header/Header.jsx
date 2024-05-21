import { useEffect, useState } from "react";

import TopContent from "./TopContent";
import MidContent from "./MidContent";
import BottomContent from "./BottomContent";
import HeaderPhone from "./HeaderPhone";

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 970);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isLargeScreen ? (
        <div className="fullScreen">
          <TopContent />

          <MidContent />

          <BottomContent />
        </div>
      ) : (
        <div className="phone">
          <HeaderPhone />
        </div>
      )}
    </div>
  );
}
