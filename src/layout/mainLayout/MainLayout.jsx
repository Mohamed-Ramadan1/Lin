import Footer from "../footer/Footer";

import React from "react";

import Header from "../header/Header";
// import { Outlet } from "react-router-dom";

import DetailsCourse from '../../pages/DetailsCourse'

const MainLayout = () => {
  return (
    <div>
      <Header />

      <DetailsCourse />
      {/* <Outlet /> */}

      <Footer />
    </div>
  );
};

export default MainLayout;
