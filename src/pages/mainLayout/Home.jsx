import React from "react";

import { Hero } from "../../components/ui/HomeComponents/Hero";
import { SectionSearch } from "../../components/ui/HomeComponents/SectionSearch";
import { ExploreCourses } from "../../components/ui/HomeComponents/ExploreCourses";
import { Banner } from "../../components/ui/HomeComponents/Banner";
import { Howlearner } from "../../components/ui/HomeComponents/Howlearner";
import { TopCourses } from "../../components/ui/HomeComponents/TopCourses";

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionSearch />
      <ExploreCourses />

      <Banner />
      <TopCourses />
      <Howlearner />
    </div>
  );
};

export default Home;
