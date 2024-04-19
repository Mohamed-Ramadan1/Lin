import React from 'react'

// Icon
import { IconExploreCourses } from '../icons/IconExploreCourses'
import { BusinessIcon } from '../icons/BusinessIcon'



// Image
import image from '../../assets/exploreImageJob.png'


export const ExploreCourses = () => {
  return (
        <div className='ExploreCourses relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:px-[15px] max-sm:py-[30px] bg-[#222222]'>

          <div className="container max-w-[1400px] m-auto flex gap-6 justify-between items-start max-md:flex-col max-md:gap-[50px] max-md:items-start">

                <div className="imageInfo flex flex-col items-start gap-[20px] ">
                    <div className="img relative max-w-[480px] h-[250px] rounded-[20px] overflow-hidden">
                        <div className="icon absolute bottom-0"><IconExploreCourses /></div>
                        <img src={image} alt="" className='w-full h-full object-cover'/>

                  </div>    
                  
                  <div>
                      
                      <h1 className='text-3xl font-bold text-[#D5FF40]'>Explore 3000+ Free</h1>
                        <h1 className='text-2xl font-[400] text-[#fff]'>Online Courses</h1> 
                    </div>

                    <p className='text-[#777] max-w-[400px]'>Explore the fundamentals of starting and managing a business, from developing a business plan to implementing effective marketing strategies</p>
                </div>
              
                <div className="category grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-[30px]">

                    <div className="box flex flex-col items-start gap-[15px] max-sm:w-full">

                        <BusinessIcon />
                        
                        <div className="content flex flex-col items-start gap-[10px] max-sm:w-full">
                            <h1 className='text-2xl text-[#fff]'>Business</h1>
                            <p className='text-base text-[#777] font-[200] max-w-[300px] max-sm:w-full h-[100px] overflow-hidden '>Explore the fundamentals of starting and managing a business, from developing a business plan to implementing effective marketing strategies</p>
                        </div>

                    </div>

                    <div className="box flex flex-col items-start gap-[15px] max-sm:w-full">

                        <BusinessIcon />
                        
                        <div className="content flex flex-col items-start gap-[10px]">
                            <h1 className='text-2xl text-[#fff]'>Business</h1>
                            <p className='text-base text-[#777] font-[200] max-w-[300px] max-sm:w-full h-[100px] overflow-hidden '>Explore the fundamentals of starting and managing a business, from developing a business plan to implementing effective marketing strategies</p>
                        </div>

                    </div>

                    <div className="box flex flex-col items-start gap-[15px] max-sm:w-full">

                        <BusinessIcon />
                        
                        <div className="content flex flex-col items-start gap-[10px]">
                            <h1 className='text-2xl text-[#fff]'>Business</h1>
                            <p className='text-base text-[#777] font-[200] max-w-[300px] max-sm:w-full h-[100px] overflow-hidden '>Explore the fundamentals of starting and managing a business, from developing a business plan to implementing effective marketing strategies</p>
                        </div>

                    </div>

                    <div className="box flex flex-col items-start gap-[15px] max-sm:w-full">

                        <BusinessIcon />
                        
                        <div className="content flex flex-col items-start gap-[10px]">
                            <h1 className='text-2xl text-[#fff]'>Business</h1>
                            <p className='text-base text-[#777] font-[200] max-w-[300px] max-sm:w-full h-[100px] overflow-hidden '>Explore the fundamentals of starting and managing a business, from developing a business plan to implementing effective marketing strategies</p>
                        </div>

                    </div>

                   
                  
                </div>
              
          </div>
          
        </div>
  )
}
