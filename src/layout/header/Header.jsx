import TopContent from "./TopContent";
import MidContent from "./MidContent";
import BottomContent from "./BottomContent";
import HeaderPhone from "./HeaderPhone";
import useScreenSize from "../../hooks/useScreenSize";
export default function Header() {
  const { isLargeScreen } = useScreenSize();

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
