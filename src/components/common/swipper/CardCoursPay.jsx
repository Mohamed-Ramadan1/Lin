import React from 'react'
// Image Course
import imgCourse from '../../../assets/imgCardFree.png'
import { BtnFav } from '../../ui/BtnFav'

export const CardCoursPay = () => {
    return (
        <div className='w-fill bg-[#2B2B2B] p-[10px] rounded-[20px]'>

        <div className="w-[300px] flex flex-col items-start gap-[15px]">
  
          <div className="image w-full relative rounded-[10px] overflow-hidden">
  
            <BtnFav />
  
            <img src={imgCourse} alt="" className=' w-full object-cover select-none'/>
  
          </div>
  
            <div className="content w-full flex gap-[5px] flex-col items-start ">
                    
            <div className='flex items-center justify-between'>
              <h4 className='text-[#858585] text-xs '>University of Computer Science</h4>
            </div>
  
            <div className='flex gap-[10px] flex-col items-start my-[5px]'>
              <h1 className='text-1xl text-[#fff] font-bold'>Introduction to Python Programming</h1>
              <p className='text-xs text-[#eee] whitespace-nowrap overflow-hidden text-ellipsis max-w-[230px]'>Name Teatcher</p>
            </div>
                    
            <div className="rating flex gap-[15px] justify-center">
                <h3 className='text-[#fff] text-[17px] font-bold'>4.3</h3>            
                        
                <div className="stars flex items-center gap-[4px]">
                            
                    <div className="icon">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFD600"/></svg>            
                    </div>
                    <div className="icon">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFD600"/></svg>            
                    </div>
                    <div className="icon">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFD600"/></svg>            
                    </div>
                    <div className="icon">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#D9D9D9" /></svg>
                    </div>
                    <div className="icon">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#D9D9D9" /></svg>
                    </div>
                </div>
                        
                <div>
                    <span className='text-[#a5a5a5]'>( 90,342 )</span>            
                </div>
                        
                    </div>
                    
                    <div className="price flex gap-[10px] items-end">
                        <h1 className='text-[25px] font-bold text-[#D5FF40]'>149,99</h1>
                        <span className='text-base text-[#eee] line-through'>155,99</span>
                    </div>
  
          </div>
        </div>
      </div>
    )
}
