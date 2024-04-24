import React from 'react'

// File Css
import '../../ui/ui.css'

// Framer Motion
import { motion } from 'framer-motion'

// images
import imgBanner from '../../../assets/imageBanner.png'
import star from '../../../assets/Star1.png'


export const Banner = () => {
  return (
      <div className='banner px-[124px] py-[70px] relative w-full flex gap-[60px] flex-col justify-center items-center max-lg:px-[30px] max-sm:px-[15px] max-sm:py-[30px]'>
          
            <div className="title relative max-w-[500px]">
                <motion.img initial={{rotate: -260}} animate={{rotate: 90}} transition={{ repeat: Infinity, type: 'spring' }} src={star} alt="" className='absolute top-[-55px] left-[-50px] max-sm:hidden'/>
                <h1 className='text-3xl font-bold text-[#fff] max-sm:text-center'> <span className='text-3xl font-bold text-[#D5FF40]'> Specially</span> selected for you</h1>
                <motion.img initial={{rotate: 260}} animate={{rotate: 90}} transition={{ repeat: Infinity, type: 'spring' }} src={star} alt="" className='absolute bottom-[-40px] right-[-70px] max-sm:hidden'/>
                
            </div>
          
          <div className="container max-w-[1400px] m-auto bg-[#D5FF40] rounded-[20px] overflow-hidden flex justify-between items-center max-md:flex-col-reverse max-md:gap-[20px] max-md:items-start max-md:pb-[20px]">
              
              <div className="content flex gap-[20px] flex-col justify-start items-start  pl-[30px]">
                  
                    <div className='flex gap-[10px] flex-col justify-start items-start'>
                      
                        <motion.h1 initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: .3}} className='text-5xl font-bold'>Unlock </motion.h1>
                        <motion.h3 initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: .4}} className='text-2xl font-bold'>Your Potential with Online Learning</motion.h3>
                      
                    </div>

                    <p className='max-w-[500px] text-[#535353] text-[15px]'>Embark on a journey of self-discovery and growth with our online learning platform. Whether you're looking to advance your career, explore new passions, or simply expand your knowledge, our courses offer endless possibilities to unlock your full potential.</p>
                    
                    <div className="btn outline-none border-none hover:bg-[#303030] w-[120px] bg-[#222] rounded-[10px] flex justify-center items-center">
                        <a href="" className='text-[#fff]'>See More</a>
                    </div>
                </div>
              
                <div className="image max-md:w-full">
                    <img src={imgBanner} alt="" className='h-[400px] max-sm:h-[237px] max-md:w-full object-cover'/>
              </div>
              
            </div>
          
          

        </div>  
  )
}
