import React from 'react'

import '../ui/ui.css'

import imgHero from '../../assets/image-hero.png'
import starPlur from '../../assets/plurStar.png'

export const Hero = () => {

  return (
        <div className='hero relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]'>

            <div className="container max-w-[1400px] m-auto flex justify-between items-center max-md:flex-col">
              
                    <div className="content relative flex gap-[40px] flex-col justify-end">
                        
                        <div className='relative rounded-[10px] max-w-[160px] w-full p-[10px] flex justify-center items-center bg-[#D5FF40] max-sm:hidden'>
                            <h6 className='relative'>Expert Instructors</h6>
                            <img src={starPlur} alt="" className='absolute right-[-15px] top-[-20px]'/>
                        </div>

                        <div className="info flex gap-[15px] flex-col justify-end">
                            
                            <div className='flex flex-col justify-end'>
                                    <h1 className='text-6xl font-bold'>Free Online Courses</h1>
                                    <h2 className='text-[55px] font-[500] max-sm:text-[35px] max-sm:mt-[10px]'>With Certificates</h2>
                            </div>

                            <p className='max-w-[500px]'>Include a visually appealing image or video background that represents your website's theme or the topics covered in your courses.</p>
                        </div>

                        <div className="btn max-w-[120px] px-[30px] py-[10px] border-[1px] border-[#2222]">
                            <a href="">join Free</a>
                        </div>

                    </div>
              
                <div className="imageHero relative">
                    <img src={imgHero} alt="" width="500px"/>
                </div>
              
            </div>
          
        </div>
  )
}
