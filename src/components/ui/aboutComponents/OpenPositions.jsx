import React from 'react'

import { easeInOut, motion, stagger } from 'framer-motion'

// image 
import OpenPositionsImage from '../../../assets/OpenPositionsImage.png'

const OpenPositions = () => {
    return (
        <div className='OpenPositions relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]'>
            <div className="container max-w-[1400px] m-auto flex gap-10 flex-col justify-center items-center">

                <div className="title text-center w-[70%] m-auto flex gap-3 flex-col justify-center items-center max-sm:w-full">
                    <span className='text-base font-bold px-[13px] py-[10px] rounded-[100px] bg-[#ebe2ff]'><span className='text-[#6941C6]'>Open positions.</span> SOON</span>
                    <h1 className='text-4xl font-semibold text-[#101828] max-sm:text-3xl max-sm:font-bold'>Join Our Team and Make a Difference!</h1>
                    <p className='text-base font-medium text-[#5b6c85] text-center'>Current Openings:</p>
                </div>

                <div className="img w-fll h-[400px]">
                    <motion.img initial={{width: 0}} whileInView={{width: "100%"}} transition={{ duration: .5, type: "tween" }} src={OpenPositionsImage} alt="" className='w-full h-full object-cover'/>
                </div>

            </div>
        </div>
    )
}

export default OpenPositions