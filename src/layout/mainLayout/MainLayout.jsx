import Footer from "../footer/Footer";

import React from "react";

import Header from "../header/Header";
import { About, Home, ViewCourses } from "../../pages";

const MainLayout = () => {
  return (
    <div>
      <Header />
      
      <ViewCourses />

      <Footer />
    </div>
  );
};

export default MainLayout;
