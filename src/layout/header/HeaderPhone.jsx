import React, { useState } from 'react'

// Framer Motion 
import { motion } from 'framer-motion'

// Img
import logo from '../../assets/LOGOHeader.png'
import Avatar from '../../assets/Avatar.png'
import ConfettiMinimalistic from '../../components/icons/ConfettiMinimalistic'

// Icons 
import ShoppingCartSimple from '../../components/icons/ShoppingCartSimple'
import HeartHeader from '../../components/icons/HeartHeader'
import Bell from '../../components/icons/Bell'

export default function HeaderPhone() {

    const [menuListLeft, setMenuListLeft] = useState(-1000); // Initial position of menuList

    const handleConfettiClick = () => {
        setMenuListLeft(0); // Move menuList to the left
    };

    const handleExitClick = () => {
        setMenuListLeft(-1000); // Move menuList back to its initial position
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, type: 'tween'}}
            className=''>
            
            <div className="container flex justify-between items-center p-[20px] max-w-full w-full">

                <div className="logo">
                    <a href=""><img src={logo} alt="" className='h-[40px] w-[97px]'/></a>
                </div>

                <div className='cursor-pointer' onClick={handleConfettiClick}>
                    <ConfettiMinimalistic />
                </div>

                <div
                    className="fixed menuList overflow-y-scroll w-full h-full transition ease-out top-0 flex gap-7 flex-col items-start bg-[#fff] p-[20px] z-10"
                    style={{ left: `${menuListLeft}px` }}
                >
                    

                    <div className='w-full flex items-center gap-[10px]'>
                        <div className="inputSearch relative w-full h-[45px]">
                            <div className="iconSearch absolute left-[10px] top-[50%] translate-y-[-50%]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.4431 16.4438L20.9994 21.0002" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type="search" name="" id="" placeholder='What do you want learn...' className='w-full h-full py-[10px] px-[40px] outline-none border-[1px] border-[#E9EAF0] '/>
                        </div> 

                        <div className="exit w-[45px] h-[45px] flex items-center justify-center bg-red-500" onClick={handleExitClick}>
                            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                    </div>  

                    <div className="w-full">

                        <div className="profile w-full flex flex-row-reverse justify-between items-center gap-[15px]">

                            <div className='flex gap-3 items-center justify-center'>
                                <ShoppingCartSimple />
                                <HeartHeader />
                                <Bell />
                            </div>

                            <img src={Avatar} alt="" />

                        </div>
                    </div>

                    <div className="links w-full flex flex-col items-start gap-3 pb-[20px] border-b-[1px] border-[#e2e2e2]">
                        <h1 className=' py-[10px] text-[25px] font-bold text-[#222]'>Pages</h1>
                        <ul className='flex flex-col items-start gap-[20px]'>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3] '>Home</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>Courses</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>About</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>Blog</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>Become an Instructor</a></li>
                        </ul>
                    </div>

                    <div className="links w-full flex flex-col items-start gap-3">
                        <h1 className=' py-[10px] text-[25px] font-bold text-[#222]'>Category</h1>
                        <ul className='flex flex-col items-start gap-[20px]'>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3] '>Business</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>Development</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>IT & Software</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>Office Productivity</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>Design</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>Marketing</a></li>
                            <li><a href="" className='py-[10px] text-[16px] hover:text-[#222] transition ease-out font-normal text-[#8C94A3]'>Health & Fitness</a></li>
                        </ul>
                    </div>


                  
                </div>

            </div>
            
        </motion.div>
    )
}
