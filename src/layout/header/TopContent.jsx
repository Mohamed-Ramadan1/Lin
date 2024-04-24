import React from 'react'


export default function TopContent() {
  return (
        <div className='topContent relative p-[15px] bg-[#1D2026]'>
          <div className="container max-w-[1700px] m-auto gap-10 flex justify-between items-start">
              
              <div className="links">
                  
                  <ul className='flex items-center gap-[20px]'>
                    <li><a href="" className='px-[15px] py-[10px] font-medium text-[#fff] border-t-[2px] border-t-[#D5FF40]'>Home</a></li>
                    <li><a href="" className='px-[15px] py-[10px] font-medium text-[#8C94A3]'>Courses</a></li>
                    <li><a href="" className='px-[15px] py-[10px] font-medium text-[#8C94A3]'>About</a></li>
                    <li><a href="" className='px-[15px] py-[10px] font-medium text-[#8C94A3]'>Blog</a></li>
                    <li><a href="" className='px-[15px] py-[10px] font-medium text-[#8C94A3]'>Become an Instructor</a></li>
                  </ul>
                </div>
            </div>
        </div>
  )
}
