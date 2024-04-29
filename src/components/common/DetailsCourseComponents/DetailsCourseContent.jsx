import React from "react";

import RatingComponent from "../../ui/RatingComponent";
import WhatWilllearn from "./WhatWilllearn";
import CourseVideos from './CourseVideos'
import ListVideos from "./ListVideos";
import DescriptionCourse from "./DescriptionCourse";
import RequirementsCourse from "./RequirementsCourse";
import Instructor from "./Instructor";

const DetailsCourseContent = () => {
    return (

        <div className="details w-full flex gap-[40px] flex-col items-start">
            
            <div className="w-full flex gap-3 flex-col items-start ">
                
                <div className="w-full flex justify-between items-start max-md:flex-col-reverse max-md:gap-4">
                <h2 className="text-3xl font-bold text-[#222]">
                    UI / UX Design - Adobe Xd (Arabic)
                </h2>
                <span className="px-[25px] py-[10px] font-semibold text-[#fff] rounded-full bg-gradient-to-r from-[#FFD600] to-[#9747FF]">
                    82% off
                </span>
                </div>

                <p className="text-1xl font-medium max-w-[900px] text-[#353535]">
                A specialized course in teaching the foundations and principles of
                application interface design, user experience, and approved best
                practices with practical application
                </p>
                
            </div>

            <div className="flex flex-col gap-3">
                <RatingComponent />
                <div className="flex gap-3 items-center"> 
                    <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9747ff"><path d="M12 6L12 12L18 12" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <span>Last updated 3/2021</span>
                </div>
                <div className="flex gap-3 items-center">
                    <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9747ff"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999C16 17.9999 13 21.9506 13 21.9506" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.62964 15.5H21.3704" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.62964 8.5H21.3704" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <span>Lang - Arabic</span>
                </div>
            </div>

            <WhatWilllearn />

            <CourseVideos />

            <ListVideos />

            <DescriptionCourse />

            <RequirementsCourse />

            <Instructor />
            
        </div>

    );
};

export default DetailsCourseContent;
