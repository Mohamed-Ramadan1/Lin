import Footer from "../footer/Footer";

import React from "react";

import Header from "../header/Header";
import { About, Home } from "../../pages";

const MainLayout = () => {
  return (
    <div>
      <Header />
      
      <Home />

      <Footer />
    </div>
  );
};

export default MainLayout;
