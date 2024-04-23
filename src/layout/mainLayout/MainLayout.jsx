import Footer from "../footer/Footer";

import React from "react";

import Header from "../header/Header";
import { About } from "../../pages";

const MainLayout = () => {
  return (
    <div>
      <Header />

      <About />

      <Footer />
    </div>
  );
};

export default MainLayout;
