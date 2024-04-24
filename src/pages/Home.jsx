import React from 'react'

// Components
import { Hero } from '../components/ui/HomeComponents/Hero'
import { SectionSearch } from '../components/ui/HomeComponents/SectionSearch'
import { ExploreCourses } from '../components/ui/HomeComponents/ExploreCourses'
import { ShowCards } from '../components/common/swipper/ShowCards'
import { Banner } from '../components/ui/HomeComponents/Banner'
import { Howlearner } from '../components/ui/HomeComponents/Howlearner'
import { TopCourses } from '../components/ui/HomeComponents/TopCourses'


const Home = () => {
    return (
      <div>

        <Hero />
        <SectionSearch />
        <ExploreCourses />
        <ShowCards CategoryName="Get started with these free courses" />
        <ShowCards CategoryName="Specially selected for you" />
        <ShowCards CategoryName="Try our Payed Courses" />

        <Banner />
        <TopCourses />
        <Howlearner />
        
      </div>
    )
}

export default Home