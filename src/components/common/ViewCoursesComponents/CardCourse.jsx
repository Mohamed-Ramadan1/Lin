import React from "react";

import imgCourse from '../../../assets/imgCourse.png'

const CardCourse = () => {
  return (
    <div href="" className="cardCourse p-[10px] flex items-center justify-center gap-[10px] hover:bg-[#f5f5f5] max-md:p-[0px] max-md:justify-start max-md:items-start ">

      {/* Image Course  */}
      <div className="imgCourse border-[1px] border-[#e2e2e2] max-w-[250px] rounded-[10px] max-md:max-w-[100px] max-md:min-w-[50px] max-md:rounded-none ">
        <img src={imgCourse} alt="" className="w-full h-full object-cover rounded-[10px] max-md:w-full max-md:rounded-none"/>
      </div>

      
      {/* Details Course */}
      <div className="content flex flex-col items-start gap-[5px]">

        <span className="py-[2px] px-[10px] text-[10px] font-medium text-[#9747FF] bg-[#efe2ff] rounded-[100px]">DR : Ahmed</span>

        <div className="info w-full flex flex-col items-start gap-[5px]">
          <h1 className="text-2xl font-bold text-[#333] max-md:text-base">UI / UX Design - (Arabic)</h1>
          <p className="text-base font-medium text-[#6e6e6e] max-md:font-light max-md:truncate max-md:max-w-[200px]">Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
        </div>

        <div className="rating flex gap-[15px] justify-center items-center max-md:gap-2 ">

        <h3 className='text-[#444444] text-[17px] font-bold max-md:text-[13px]'>4.3</h3>            
                
        <div className="stars flex items-center gap-[4px]">
                    
            <div className="icon">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FF7A00"/></svg>            
            </div>
            <div className="icon">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FF7A00"/></svg>            
            </div>
            <div className="icon">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FF7A00"/></svg>            
            </div>
            <div className="icon">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#D9D9D9" /></svg>
            </div>
            <div className="icon">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#D9D9D9" /></svg>
            </div>
        </div>
                
        <div>
            <span className='text-[#5e5e5e] max-md:text-[10px]'>( 90,342 )</span>            
        </div>
                
        </div>
            
        <div className="price flex gap-[10px] items-end">
        <h1 className='text-[25px] font-bold text-[#222]  max-sm:text-[20px]'>149,99</h1>
        <span className='text-base text-[#636363] line-through'>155,99</span>
        </div>
        
      </div>

    </div>
  );
};

export default CardCourse;
