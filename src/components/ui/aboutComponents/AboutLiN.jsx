import React from 'react'

// Framer Motion 
import { motion } from 'framer-motion'

const AboutLiN = () => {
    return (
        <div className='aboutLinn relative flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]'>
            <div className="content text-center flex flex-col justify-center items-center gap-[12px]">
                <span className='text-[16px] font-bold text-[#7F56D9] max-sm:text-2xl'>About us</span>
                <motion.h1 initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{type: 'tween', delay: .4}} className='text-[#101828] text-5xl font-bold max-sm:text-4xl'>About the <span className='text-[#7F56D9]'>LIN</span></motion.h1>
                <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{type: 'tween', delay: .5}} className='text-[16px] text-[#3a3a3a] text-center'>Learn more about the company and the team behind it.</motion.p>
            </div>  
        </div>
    )
}

export default AboutLiN