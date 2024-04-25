import React from 'react'

// Components
import CardCourse from '../components/common/ViewCoursesComponents/CardCourse'
import FilterCourses from '../components/common/ViewCoursesComponents/FilterCourses'

const ViewCourses = () => {
    return (
        <div className='viewCoursePage relative flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]'>

            <div className="container max-w-[1400px] m-auto flex flex-col gap-10 flex-col justify-center items-center">

                <div className="title flex flex-col items-start gap-[15px]">
                    <div className="info">
                        <h1 className='text-4xl font-bold text-[#222]'>All Business courses</h1>
                        <p className='text-[20px] mt-[10px] text-[#8d8d8d] font-bold'>Courses to get you started</p>
                    </div>
                    <p className='text-base text-[#8d8d8d]'>All Business courses" encompass a wide array of educational offerings designed to equip individuals with the knowledge and skills necessary to thrive in various aspects of the business world. These courses cover topics ranging from entrepreneurship and management to finance, marketing, and beyond. Here's an overview of what you can expect from this category</p>
                </div>

                <div className="sub-container flex gap-[10px] flex-row w-full">

                    <div className='basis-1/5 bg-[#aaa]'>
                        <FilterCourses />
                    </div>

                    <div className='basis-full bg-[#aaa]'>
                        <CardCourse />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ViewCourses