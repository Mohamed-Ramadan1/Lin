import React from 'react'

// Img
import logo from '../../assets/LOGO.png'

// Icons 

import FacebookIcon  from '../../components/icons/FacebookIcon'
import LinkedinIcon  from '../../components/icons/LinkedinIcon'
import TwitterIcon from '../../components/icons/TwitterIcon'
import YoutubeIcon  from '../../components/icons/YoutubeIcon'
import InstagramIcon  from '../../components/icons/InstagramIcon'

function ButtomContent() {
  return (
    <div className='bottomContent border-t-[1px] border-t-[#363B47] relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px] bg-[#222]'>
      <div className="container max-w-[1400px] m-auto gap-10 flex justify-between items-start max-md:flex-col">

        <div className="contentInfo flex flex-col items-start gap-5">

          <img src={logo} alt="" />

          <p className='max-w-[400px] text-[#8C94A3]'>Aliquam rhoncus ligula est, non pulvinar elitconvallis nec. Donec mattis odio at.</p>

          <div className="linksSocial">
            <ul className='flex gap-[20px] justify-center items-center max-lg:gap-[10px]'>
              <li className='w-[47px] h-[47px] bg-[#2A2C31] flex justify-center items-center transition ease-in hover:bg-[#9747FF] hover:text-[#fff]'><a href=""><FacebookIcon /></a></li>
              <li className='w-[47px] h-[47px] bg-[#2A2C31] flex justify-center items-center transition ease-in hover:bg-[#9747FF] hover:text-[#fff]'><a href=""><InstagramIcon /></a></li>
              <li className='w-[47px] h-[47px] bg-[#2A2C31] flex justify-center items-center transition ease-in hover:bg-[#9747FF] hover:text-[#fff]'><a href=""><LinkedinIcon /></a></li>
              <li className='w-[47px] h-[47px] bg-[#2A2C31] flex justify-center items-center transition ease-in hover:bg-[#9747FF] hover:text-[#fff]'><a href=""><TwitterIcon /></a></li>
              <li className='w-[47px] h-[47px] bg-[#2A2C31] flex justify-center items-center transition ease-in hover:bg-[#9747FF] hover:text-[#fff]'><a href=""><YoutubeIcon /></a></li>
            </ul>
          </div>
        </div>

        <div className="contentInfo">

        <div className="links flex flex-wrap gap-[70px] items-start justify-between max-sm:gap-[30px]">
          
          <div className='flex flex-col items-start gap-[20px]'>
            <h3 className='text-xl text-[#fff] font-bold'>Top 4 Category</h3>
            <ul className='flex flex-col items-start gap-[10px]'>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Design</a></li>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Business</a></li>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Development</a></li>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Finance & Accounting</a></li>
            </ul>
          </div>
          
          <div className='flex flex-col items-start gap-[20px]'>
            <h3 className='text-xl text-[#fff] font-bold'>Quick Links</h3>
            <ul className='flex flex-col items-start gap-[10px]'>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>About</a></li>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Contact</a></li>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Career</a></li>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Become Instructor</a></li>
            </ul>
          </div>
          
          <div className='flex flex-col items-start gap-[20px]'>
            <h3 className='text-xl text-[#fff] font-bold'>Support</h3>
            <ul className='flex flex-col items-start gap-[10px]'>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>FAQs</a></li>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Help Center</a></li>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Privacy Policy</a></li>
              <li><a href="" className='text-[#8C94A3] font-medium transition ease-out hover:text-[#fff]'>Terms & Condition</a></li>
            </ul>
          </div>
          
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default ButtomContent