import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import ScrollToTop from "../../components/common/ScrollToTop";
import Header from "../header/Header";
const MainLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
