import Footer from "../footer/Footer";

import React from "react";

import Header from "../header/Header";
import { About, Home } from "../../pages";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
