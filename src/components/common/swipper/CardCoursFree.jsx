import React from 'react'
import { BtnFav } from '../../ui/BtnFav'

// Image Course
import imgCourse from '../../../assets/imgCardFree.png'

export const CardCoursFree = () => {
  return (
    <div className='w-full'>

      <div className="container w-full flex flex-col items-start gap-[15px]">

        <div className="image relative rounded-[10px] overflow-hidden">

          <BtnFav />

          <img src={imgCourse} alt="" className='w-full h-full object-cover'/>

        </div>

        <div className="content w-full">
          <div className='flex items-center justify-between'>
            <h4 className='text-[#858585] text-xs '>University of Computer Science</h4>
            <span className='w-[40px] h-[20px] flex items-center justify-center bg-[#D5FF40]'>Free</span>
          </div>

          <div className='flex gap-[10px] flex-col items-start my-[5px]'>
            <h1 className='text-1xl text-[#fff] font-bold'>Introduction to Python Programming</h1>
            <p className='text-xs text-[#eee] whitespace-nowrap overflow-hidden text-ellipsis max-w-[230px]'>Learn the fundamentals of Python programming language, including variables, loops, functions, and data structures. This course is designed for beginners with no prior programming experience.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
